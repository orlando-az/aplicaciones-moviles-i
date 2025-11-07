import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const COLOR_OPTIONS = [
  "#0984e3",
  "#6c5ce7",
  "#e17055",
  "#00b894",
  "#fdcb6e",
  "#22c55e",
];

export default function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(COLOR_OPTIONS[0]);
  const [showHelp, setShowHelp] = useState(false);

  const isLimitReached = count >= 20;
  const titleText = name.trim()
    ? `Bienvenid@, ${name.trim()} 👋`
    : "Bienvenid@, invitad@ 👋";

  const handleGreet = () => {
    const msg = `Hola${name.trim() ? `, ${name.trim()}` : ""} 👋`;
    if (Platform.OS === "web") {
      window.alert(msg);
    } else {
      Alert.alert("Saludo", msg);
    }
  };

  const handleIncrement = () => {
    if (!isLimitReached) setCount((c) => Math.min(20, c + 1));
  };

  const handleLongPress = () => {
    if (!isLimitReached) setCount((c) => Math.min(20, c + 5));
  };

  const handleReset = () => {
    if (Platform.OS === "web") {
      const ok = window.confirm("¿Resetear contador?");
      if (ok) setCount(0);
    } else {
      Alert.alert("Confirmar", "¿Resetear contador?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Resetear", style: "destructive", onPress: () => setCount(0) },
      ]);
    }
  };

  const handleSelectColor = (color: string) => setSelectedColor(color);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          {/* Encabezado dinámico */}
          <Text style={[styles.title, { color: selectedColor }]}>
            {titleText}
          </Text>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.image}
          />

          {/* Input nombre */}
          <TextInput
            placeholder="Escribe tu nombre..."
            placeholderTextColor="#9ca3af"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.label}>Tu nombre: {name.trim() || "—"}</Text>

          {/* Saludar (web/nativo) */}
          <Button title="Saludar" onPress={handleGreet} />

          {/* Chips de color (horizontal) */}
          <Text style={styles.sectionTitle}>Tema / Color</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          >
            {COLOR_OPTIONS.map((c) => {
              const selected = c === selectedColor;
              return (
                <Pressable
                  key={c}
                  onPress={() => handleSelectColor(c)}
                  style={[
                    styles.chip,
                    { backgroundColor: c, borderWidth: selected ? 3 : 0 },
                  ]}
                >
                  <Text style={styles.chipText}>{selected ? "✔" : " "}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Botón azul (contador) */}
          <View style={styles.counterRow}>
            <Text style={styles.counterText}>Clics: {count}</Text>
            {isLimitReached && (
              <Text style={styles.limitText}>Límite alcanzado (20)</Text>
            )}
          </View>

          <Pressable
            onPress={handleIncrement}
            onLongPress={handleLongPress}
            delayLongPress={600}
            disabled={isLimitReached || !name.trim()}
            style={({ pressed }) => [
              styles.bigButton,
              {
                backgroundColor: isLimitReached
                  ? "#94a3b8"
                  : pressed
                  ? shadeColor(selectedColor, -12)
                  : selectedColor,
              },
            ]}
          >
            <Text style={styles.bigButtonText}>
              {isLimitReached ? "Deshabilitado" : "Botón Azul"}
            </Text>

            {/* Badge con contador (opcional +) */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{count}</Text>
            </View>
          </Pressable>

          {/* Reset con confirmación */}
          <Pressable onPress={handleReset} style={styles.resetBtn}>
            <Text style={styles.resetText}>Resetear contador</Text>
          </Pressable>

          {/* Ayuda plegable */}
          <Pressable
            onPress={() => setShowHelp((v) => !v)}
            style={styles.helpToggle}
          >
            <Text style={styles.helpToggleText}>
              {showHelp ? "Ocultar ayuda ▲" : "¿Cómo se usa? ▼"}
            </Text>
          </Pressable>

          {showHelp && (
            <View style={styles.helpBox}>
              <Text style={styles.helpItem}>
                • Escribe tu nombre para habilitar el botón azul.
              </Text>
              <Text style={styles.helpItem}>
                • Toca para +1, mantén presionado ~0.6s para +5.
              </Text>
              <Text style={styles.helpItem}>
                • Cambia el color del tema con los chips.
              </Text>
              <Text style={styles.helpItem}>
                • Al llegar a 20, el botón se deshabilita.
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/** util: aclarar/oscurecer color (hex) con delta -100..+100 */
function shadeColor(hex: string, percent: number) {
  const p = Math.max(-100, Math.min(100, percent)) / 100;
  const num = parseInt(hex.slice(1), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const rn = Math.round(r + (p >= 0 ? (255 - r) * p : r * p))
    .toString(16)
    .padStart(2, "0");
  const gn = Math.round(g + (p >= 0 ? (255 - g) * p : g * p))
    .toString(16)
    .padStart(2, "0");
  const bn = Math.round(b + (p >= 0 ? (255 - b) * p : b * p))
    .toString(16)
    .padStart(2, "0");
  return `#${rn}${gn}${bn}`;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  scroll: { flex: 1 },
  content: { width: "100%", alignItems: "center", padding: 16 },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  image: { width: 100, height: 100, marginBottom: 10 },

  input: {
    width: "90%",
    maxWidth: 360,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  label: { marginBottom: 12, fontSize: 16, color: "#374151" },

  sectionTitle: {
    width: "90%",
    maxWidth: 360,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  chipsRow: { paddingVertical: 6, gap: 8, paddingHorizontal: 8 },
  chip: {
    width: 40,
    height: 40,
    borderRadius: 999,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#111827",
  },
  chipText: { color: "#fff", fontWeight: "700" },

  counterRow: {
    width: "90%",
    maxWidth: 360,
    marginTop: 16,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterText: { fontSize: 18, fontWeight: "600" },
  limitText: { fontSize: 12, color: "#ef4444", fontWeight: "600" },

  bigButton: {
    width: "90%",
    maxWidth: 360,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  bigButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#111827",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 28,
    alignItems: "center",
  },
  badgeText: { color: "#fff", fontWeight: "700" },

  resetBtn: {
    backgroundColor: "#22c55e",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  resetText: { color: "#fff", fontWeight: "700" },

  helpToggle: { marginTop: 8, marginBottom: 6 },
  helpToggleText: { color: "#2563eb", fontWeight: "600" },
  helpBox: {
    width: "90%",
    maxWidth: 360,
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 10,
    gap: 4,
    marginBottom: 16,
  },
  helpItem: { color: "#374151" },
});
