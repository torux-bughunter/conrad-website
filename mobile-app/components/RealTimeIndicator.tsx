import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Activity } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface RealTimeIndicatorProps {
  isActive?: boolean;
}

export const RealTimeIndicator: React.FC<RealTimeIndicatorProps> = ({ isActive = true }) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isActive) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, { transform: [{ scale: pulseAnim }] }]}>
        <View style={styles.innerDot} />
      </Animated.View>
      <Text style={styles.text}>Live</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.success,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});




