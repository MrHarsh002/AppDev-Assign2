import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View>
        <TouchableOpacity style={styles.tab}>
          <Foundation name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.tab}>
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Categories</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity  style={styles.tab}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Text>Favorite</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity  style={styles.tab}>
          <Ionicons name="people-circle-outline" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tab: {
    alignItems: "center",
    flex: 1,
    gap: 2,
    position: "relative",
  },
});
