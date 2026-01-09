import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';

interface GradientCardProps {
  children: React.ReactNode;
  colors?: string[];
  style?: ViewStyle;
  border?: boolean;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  colors = [Colors.primary, Colors.secondary],
  style,
  border = true,
}) => {
  return (
    <View style={[styles.container, style, border && styles.border]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    padding: 20,
    borderRadius: 20,
  },
  border: {
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
});




