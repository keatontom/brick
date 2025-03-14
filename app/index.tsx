import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import GlobalStyles from '@/constants/GlobalStyles';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BRICK NO BRICK</Text>
      
      {/* @ts-ignore - Ignoring type error for navigation */}
      <Link href="/(tabs)/one" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: GlobalStyles.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 