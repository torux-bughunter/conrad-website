import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart as RNBarChart } from 'react-native-chart-kit';
import { Colors } from '../constants/Colors';

interface BarChartProps {
  data: number[];
  labels?: string[];
  title?: string;
  color?: string;
  height?: number;
  unit?: string;
  yAxisSuffix?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  title,
  color = Colors.primary,
  height = 220,
  unit = '%',
  yAxisSuffix = '%',
}) => {
  const screenWidth = Dimensions.get('window').width - 40;

  const chartData = {
    labels: labels || data.map((_, i) => `${i + 1}`),
    datasets: [
      {
        data: data,
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
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: Colors.neutral[200],
      strokeWidth: 1,
    },
    barPercentage: 0.7,
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.chartContainer}>
        <RNBarChart
          data={chartData}
          width={screenWidth}
          height={height}
          chartConfig={chartConfig}
          style={styles.chart}
          yAxisLabel=""
          yAxisSuffix={yAxisSuffix}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withInnerLines={true}
          withOuterLines={false}
          withVerticalLabels={true}
          withHorizontalLabels={true}
        />
      </View>
      {unit && (
        <Text style={styles.unitLabel}>Values in {unit}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  chart: {
    borderRadius: 16,
    marginVertical: 0,
  },
  unitLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
});

