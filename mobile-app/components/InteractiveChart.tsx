import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart as RNLineChart } from 'react-native-chart-kit';
import { Colors } from '../constants/Colors';

interface InteractiveChartProps {
  data: number[];
  labels: string[];
  title: string;
  color?: string;
  onPointPress?: (index: number, value: number) => void;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({
  data,
  labels,
  title,
  color = Colors.primary,
  onPointPress,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const screenWidth = Dimensions.get('window').width - 40;

  const chartData = {
    labels: labels || data.map((_, i) => ''),
    datasets: [
      {
        data: data,
        color: (opacity = 1) => color,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    decimalPlaces: 0,
    color: (opacity = 1) => color,
    labelColor: (opacity = 1) => Colors.textSecondary,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: selectedIndex !== null ? '8' : '6',
      strokeWidth: '2',
      stroke: color,
      fill: Colors.white,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: Colors.neutral[200],
      strokeWidth: 1,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {selectedIndex !== null && (
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedValue}>{data[selectedIndex]}%</Text>
            <Text style={styles.selectedLabel}>{labels[selectedIndex]}</Text>
          </View>
        )}
      </View>
      <View style={styles.chartContainer}>
        <RNLineChart
          data={chartData}
          width={screenWidth}
          height={240}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
          withInnerLines={true}
          withOuterLines={false}
          withVerticalLines={true}
          withHorizontalLines={true}
          withDots={true}
          withShadow={false}
        />
      </View>
      <View style={styles.legend}>
        {data.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.legendItem,
              selectedIndex === index && styles.legendItemActive,
            ]}
            onPress={() => {
              setSelectedIndex(selectedIndex === index ? null : index);
              onPointPress?.(index, value);
            }}
          >
            <View
              style={[
                styles.legendDot,
                { backgroundColor: selectedIndex === index ? color : Colors.neutral[300] },
              ]}
            />
            <Text
              style={[
                styles.legendText,
                selectedIndex === index && styles.legendTextActive,
              ]}
            >
              {labels[index]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  selectedInfo: {
    alignItems: 'flex-end',
  },
  selectedValue: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.primary,
  },
  selectedLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    borderRadius: 16,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
  },
  legendItemActive: {
    backgroundColor: Colors.primary + '20',
    borderColor: Colors.primary,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  legendTextActive: {
    color: Colors.primary,
  },
});




