import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import GlobalStyles from '@/constants/GlobalStyles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={GlobalStyles.colors.divider} darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/one.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.common.centeredContainer,
  },
  title: {
    ...GlobalStyles.typography.titleMedium,
    color: GlobalStyles.colors.text,
  },
  separator: {
    ...GlobalStyles.common.separator,
    width: '80%',
  },
}); 