import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StartNewTrip = () => {
    const router =useRouter()
  return (
    <View style={styles.wrapp}>
      <Ionicons name="location-sharp" size={50} color={Colors.green} />
      <Text style={styles.description}>No trips planned yet.</Text>
      <Text style={styles.paragraf}>Looks like its time to plan a new travel experience. Get started below</Text>
      <TouchableOpacity onPress={() => router.push('/create-trip/search-place')} style={styles.button}>
        <Text style={styles.buttonText}>Start new trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartNewTrip;

const styles = StyleSheet.create({
    wrapp: {
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 30
    },
    description: {
        fontSize: 20,
        fontFamily: "outfit-medium",
        
    },
    paragraf: {
       fontSize: 18,
        fontFamily: "outfit-regular",
        textAlign: "center",
        color: Colors.gray
    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: Colors.accent,
        borderRadius: 15,
        paddingHorizontal: 30

    },
    buttonText: {
        color: Colors.white,
        fontFamily: "outfit-medium",
        fontSize: 18
    }
})