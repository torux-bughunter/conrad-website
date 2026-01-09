import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart as RNPieChart } from 'react-native-chart-kit';
import { Colors } from '../constants/Colors';

interface PieChartData {
  name: string;
  value: number;
  color: string;
  legendFontColor?: string;
  legendFontSize?: number;
}

interface PieChartProps {
  data: PieChartData[];
  title?: string;
  height?: number;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  height = 220,
}) => {
  const screenWidth = Dimensions.get('window').width - 40;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.chartContainer}>
        <RNPieChart
          data={data}
          width={screenWidth}
          height={height}
          chartConfig={{
            color: (opacity = 1) => Colors.text,
          }}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chart}
        />
      </View>
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
  },
  chart: {
    borderRadius: 16,
  },
});

