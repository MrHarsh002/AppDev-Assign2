import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import productData from './productsData'

const ProductCard = () => {
  return (
    <View style={{flex: 1, marginBottom: 80}}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>New Arrivals</Text>
        <View style={styles.more}>
          <TouchableOpacity>
          <Text style={styles.moreText}>View All</Text>
          </TouchableOpacity>
          <AntDesign name="caret-right" size={20} color="black" />
        </View>
      </View>
      <View style={styles.CardContainer}>
        {productData.map((product) => (
          <View key={product.id} style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{ uri: product.image }}
              resizeMode="cover"
            >
              <TouchableOpacity>
                <FontAwesome name="heart" size={18} color="black" style={styles.heartIcon} />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.details}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.rating}>
                <Entypo name="star" size={14} color="orange" />
                <Text>{product.rating}</Text>
              </View>
            </View>
            <View style={styles.tag}>
              <Text style={styles.priceText}>${product.price}</Text>
              <TouchableOpacity>
              <Entypo name="circle-with-plus" size={24} color="#663C1F" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  textContainer: {
    padding: 20,flexDirection: "row",
    justifyContent: "space-between",
  },
  CardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "#54321aff"
  },
  moreText: {
    fontSize: 17,
  },
  card: {
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    height: 240,
    width: 180,
  },
  heartIcon: {
    position: "absolute",
    top: 6,
    right: 10,
    backgroundColor: "#ffffffff",
    borderRadius: 15,
    padding: 4,
  },
  cardImage: {
    width: 170,
    height: 140,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  tag: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#663C1F"
  },
});
