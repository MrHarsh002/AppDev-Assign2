import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View>
        <AntDesign name="menu" size={24} color="black" />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/736x/d5/ef/01/d5ef012249eb201b6c1ef8689aae8eca.jpg",
          }}
        />
        <Text style={{ color: "#663C1F", fontWeight: "bold", fontSize: 19 }}>
          Furni
        </Text>
        <Text style={{ color: "#895129", fontSize: 19 }}>Kraft</Text>
      </View>
      <View style={styles.icons}>
        <EvilIcons name="search" size={28} color="black" />
        <Ionicons name="bag-handle-outline" size={26} color="black" />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    flexDirection: "row",
    gap: 2,
  },
  image: {
    width: 35,
    height: 26,
  },
  icons: {
    flexDirection: "row",
    gap: 15 
}
});
