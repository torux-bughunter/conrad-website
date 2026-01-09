import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../constants/Colors';

interface AquaVitaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  style?: any;
}

export default function AquaVitaLogo({ size = 'md', showTagline = false, style }: AquaVitaLogoProps) {
  const sizeStyles = {
    sm: { fontSize: 18, waveWidth: 40, waveHeight: 8 },
    md: { fontSize: 24, waveWidth: 60, waveHeight: 12 },
    lg: { fontSize: 32, waveWidth: 80, waveHeight: 16 },
    xl: { fontSize: 48, waveWidth: 120, waveHeight: 24 },
  };

  const currentSize = sizeStyles[size];

  return (
    <View style={[styles.container, style]}>
      <View style={styles.logoContainer}>
        {/* Brand name with split colors */}
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: currentSize.fontSize, color: Colors.white }]}>
            Aqua
          </Text>
          <View style={styles.vitaContainer}>
            {/* Wavy lines above Vita */}
            <View style={[styles.waveContainer, { width: currentSize.waveWidth, height: currentSize.waveHeight }]}>
              <Svg width={currentSize.waveWidth} height={currentSize.waveHeight} viewBox="0 0 60 12">
                {/* Upper wave - darker blue */}
                <Path
                  d="M0 8 Q15 4, 30 8 T60 8"
                  stroke="#0F4C75"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Lower wave - lighter blue */}
                <Path
                  d="M0 10 Q15 6, 30 10 T60 10"
                  stroke="#4A90E2"
                  strokeWidth="2"
                  fill="none"
                />
              </Svg>
            </View>
            <Text style={[styles.text, { fontSize: currentSize.fontSize, color: '#4A90E2' }]}>
              Vita
            </Text>
          </View>
        </View>
      </View>
      
      {/* Tagline */}
      {showTagline && (
        <Text style={styles.tagline}>
          where water's tight, we make it right.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  vitaContainer: {
    position: 'relative',
  },
  waveContainer: {
    position: 'absolute',
    top: -12,
    left: 0,
  },
  text: {
    fontWeight: '900',
    letterSpacing: -0.5,
    fontFamily: 'System',
  },
  tagline: {
    color: Colors.white,
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 4,
    opacity: 0.9,
  },
});

