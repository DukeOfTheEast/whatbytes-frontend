"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";

// Reusable PercentileGraph component
const PercentileGraph = ({
  percentile,
  width = 800,
  height = 250,
  showLabel = true,
  className = "",
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Generate distribution data points
  const generateDistributionData = () => {
    const points = [];
    for (let i = 0; i <= 100; i += 5) {
      let value;
      if (i < 25) {
        value = 0.2 + i / 100;
      } else if (i < 50) {
        value = 0.4 + Math.pow(i - 25, 1.5) / 300;
      } else if (i < 75) {
        value = 1.2 - Math.pow(i - 50, 1.5) / 300;
      } else {
        value = 0.3 - (i - 75) / 150;
      }
      points.push({
        x: i,
        value: Math.max(0.1, value),
      });
    }
    return points;
  };

  const data = generateDistributionData();

  if (!mounted) {
    return <div className={`relative ${className} h-[${height}px]`} />;
  }

  return (
    <div className={`relative ${className}`}>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="x"
          type="number"
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
        />
        <YAxis hide />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#6B7280"
          strokeWidth={2}
          dot={false}
        />
        <ReferenceLine
          x={percentile}
          stroke="#2563EB"
          strokeWidth={2}
          label={
            showLabel
              ? {
                  value: "your percentile",
                  position: "right",
                  fill: "#2563EB",
                  fontSize: 12,
                }
              : null
          }
        />
      </LineChart>
    </div>
  );
};

export default PercentileGraph;
