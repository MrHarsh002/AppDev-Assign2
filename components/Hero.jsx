import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.hero}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://www.shutterstock.com/image-illustration/modern-classic-black-interior-capitone-600nw-1567371268.jpg",
        }}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <View style={styles.mainText}>
          <Text style={styles.textPrimary}>Perfect</Text>
          <Text style={styles.textSecondary}>Furniture</Text>
          </View>
          <Text style={styles.tagline}>For your Dream Home</Text>
          <Text style={styles.deal}>UPTO 25% OFF</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 230,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    flexDirection: "row",
    gap: 10
  },
  textPrimary: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 34,
  },
  textSecondary: {
    fontSize: 25,
    fontWeight: "700",
    color: "#c86228ff",
    lineHeight: 34,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 17,
    color: "#dfdfdfff",
    marginBottom: 10,
  },
  deal: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    backgroundColor: "#c85c1eff",
    padding: 6,
    borderRadius: 0,
  },
});
