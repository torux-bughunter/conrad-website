import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart as RNBarChart } from 'react-native-chart-kit';
import { Colors } from '../constants/Colors';

interface ComparisonChartProps {
  data1: number[];
  data2: number[];
  labels: string[];
  title: string;
  label1: string;
  label2: string;
  color1?: string;
  color2?: string;
  unit?: string;
  yAxisSuffix?: string;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({
  data1,
  data2,
  labels,
  title,
  label1,
  label2,
  color1 = Colors.primary,
  color2 = Colors.secondary,
  unit = '%',
  yAxisSuffix = '%',
}) => {
  const screenWidth = Dimensions.get('window').width - 40;

  const chartData = {
    labels,
    datasets: [
      {
        data: data1,
        color: (opacity = 1) => color1,
      },
      {
        data: data2,
        color: (opacity = 1) => color2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    decimalPlaces: 0,
    color: (opacity = 1) => Colors.textSecondary,
    labelColor: (opacity = 1) => Colors.textSecondary,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: Colors.neutral[200],
      strokeWidth: 1,
    },
    barPercentage: 0.6,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: color1 }]} />
          <Text style={styles.legendText}>{label1}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: color2 }]} />
          <Text style={styles.legendText}>{label2}</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <RNBarChart
          data={chartData}
          width={screenWidth}
          height={240}
          chartConfig={chartConfig}
          style={styles.chart}
          yAxisLabel=""
          yAxisSuffix={yAxisSuffix}
          showValuesOnTopOfBars={true}
          fromZero={true}
          withInnerLines={true}
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
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  legend: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text,
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




