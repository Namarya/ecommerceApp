import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ width: 45, height: 45 }}
          source={require("./assets/logo.png")}
        />
        <Text style={styles.header}>ReUseTek</Text>
      </View>
      <View>
        <View style={styles.search_bar_container}>
          <FontAwesome5 name="search" size={24} color="#8E8E8E" />
          <View
            style={{ height: 30, width: 2, backgroundColor: "#8E8E8E" }}
          ></View>
          <TextInput
            style={styles.search_bar}
            placeholder="Search Reusetek.com"
            placeholderTextColor={"#8E8E8E"}
          ></TextInput>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4D4D",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  logo: {
    position: "absolute",
    top: 30,
    left: 15,
    flex: 1,
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  search_bar_container: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 36,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 5,
    gap: 6,
  },
  search_bar: {
    minWidth: 250,
    fontSize: 18,
    color: "#4D4D4D",
  },
});
