import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [claps, setClaps] = useState(0);

  const handleGreeting = () => {
    console.log("Presionando");
    console.log(Platform.OS);
    if (Platform.OS === "web") {
      window.alert("Hola Bienvenido");
    }
    Alert.alert("Hola Bienvenido");
  };

  const handleClaps = () => {
    setClaps((prev) => prev + 1);
  };

  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={style.title}>Bienviendo a Task APP!!!</Text>
        {/* <View
        style={{
          backgroundColor: "blue",
          flex: 0.5,
        }}
      ></View>
      <View style={{ backgroundColor: "yellow", flex: 0.2 }} /> */}
        <Image source={require("./assets/icon.png")} style={style.imgIcon} />
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={style.imgIcon}
        />
        <TextInput
          placeholder="Ingrese su nombre"
          style={style.input}
          placeholderTextColor={"#ccc"}
          onChangeText={setName}
          value={name}
        />
        <Text>Mi nombre es: {name}</Text>

        <Button title="Saludar" onPress={handleGreeting} />

        <Pressable
          style={({ pressed }) => [
            { ...style.btn, backgroundColor: pressed ? "#22c" : "#22c55e" },
          ]}
          onPress={handleClaps}
        >
          <Text>Dar un aplauso</Text>
        </Pressable>
        <Text>👏🏻 {claps}</Text>

        <Text style={{ fontSize: 40 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          similique! Quia, quaerat tempora! Deleniti cupiditate numquam
          dignissimos harum perspiciatis totam pariatur aliquid vitae omnis,
          incidunt, labore porro! Veniam, dolorem magni.
        </Text>
      </ScrollView>
      <View>
        <ScrollView horizontal>
          {[
            "#22c55e",
            "#22c",
            "#ccc",
            "#22c3",
            "#22c55e",
            "#22c",
            "#ccc",
            "#22c3",
            "#22c55e",
            "#22c",
            "#ccc",
            "#22c3",
          ].map((color, i) => (
            <View
              key={i}
              style={[style.box, { backgroundColor: color }]}
            ></View>
          ))}
        </ScrollView>
      </View>
      {/* <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          similique! Quia, quaerat tempora! Deleniti cupiditate numquam
          dignissimos harum perspiciatis totam pariatur aliquid vitae omnis,
          incidunt, labore porro! Veniam, dolorem magni.
        </Text>
      </ScrollView> */}
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgIcon: {
    height: 100,
    width: 100,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  btn: {
    padding: 10,
    borderRadius: 5,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "#22c55e",
    borderRadius: 5,
    marginRight: 10,
  },
});
