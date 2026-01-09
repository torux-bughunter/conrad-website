import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp, TrendingDown } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface AnimatedStatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  gradient?: string[];
  trend?: 'up' | 'down' | 'neutral';
}

export const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  label,
  value,
  icon,
  gradient = [Colors.primary, Colors.secondary],
  trend = 'neutral',
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.label}>{label}</Text>
          {trend !== 'neutral' && (
            <View style={styles.trendContainer}>
              {trend === 'up' ? (
                <TrendingUp size={16} color={Colors.white} />
              ) : (
                <TrendingDown size={16} color={Colors.white} />
              )}
            </View>
          )}
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  gradient: {
    padding: 18,
    minHeight: 120,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginBottom: 12,
  },
  value: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.black,
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  trendContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

