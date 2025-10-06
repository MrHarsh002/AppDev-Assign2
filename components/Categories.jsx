import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Popular Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.furnitureIcons}>
        <View style={styles.text}>
        <MaterialCommunityIcons name="sofa-single-outline" size={35} color="black"/>
        <Text style={styles.iconText}>
        Sofas
        </Text>
        </View>
        <View>
        <MaterialIcons name="chair" size={35} color="black" />
        <Text style={styles.iconText}>
        Chairs
        </Text>
        </View>
        <View>
        <Ionicons name="bed-outline" size={35} color="black" />
        <Text style={styles.iconText}>      
        Beds
        </Text>
        </View>
        <View>
        <MaterialIcons name="table-restaurant" size={35} color="black" style={{marginLeft: 20}}/>
        <Text style={styles.iconText}>
        Dining Tables
        </Text>
        </View>
        <View>
        <MaterialCommunityIcons name="stool" size={35} color="black" />
        <Text style={styles.iconText}>
        Stools
        </Text>
        </View>
      </View>
      </ScrollView>

      <View style={styles.line}></View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#54321aff"
  },
  furnitureIcons: {
    marginTop: 15,
    flexDirection: "row",
    gap: 50,
  },
  iconText: {
    textAlign: "center",
    fontSize: 12,
  },
  line: {
    borderBottomColor: '#d3d3d3ff',
    borderBottomWidth: 1,
    marginTop: 20,
  }
})