import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ebebebff'}}>
      <View>
      <Navbar/>
      <ScrollView>
      <Hero/>
      <Categories/>
      <ProductCard/>
      </ScrollView>
      <Footer/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
