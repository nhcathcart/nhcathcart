import { useState, useEffect, ReactNode } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";

export function PieChart() {
  const defaultWidth = 100;
  const color1 = "#FFB3D9";
  const color2 = "#EAEAEA";
  const color3 = "#C5E1A5";
  interface Data {
    label: string;
    value: number;
    color: string;
  }
  type NullableObject = null | Data;

  const [active, setActive] = useState<NullableObject>(null);
  const [ref, bounds] = useMeasure();

  const width = bounds.width || defaultWidth;
  const half = width / 2;

  // Sample data for the pie chart

  const data: Data[] = [
    { label: "Category A", value: 40, color: color1 },
    { label: "Category B", value: 25, color: color2 },
    { label: "Category C", value: 35, color: color3 },
  ];

  const calculateFontSize = (chartWidth: number): number => {
    const maxFontSize = Math.floor(chartWidth / 12);
    const adjustedFontSize = Math.min(maxFontSize, 40); // Set a maximum font size of 40

    return adjustedFontSize;
  };

  useEffect(() => {
    const fontSize = calculateFontSize(width);
    const textElement = document.getElementById("chart-text");
    if (textElement) {
      textElement.style.fontSize = `${fontSize}px`;
    }
  }, [width]);
  return (
    <svg
      ref={ref}
      width="80%"
      height="80%"
      viewBox={`-${half} -${half} ${width} ${width}`}
    >
      <Group top={0} left={0} width={width} height={width}>
        <Pie
          data={data}
          pieValue={(data) => data.value}
          outerRadius={half}
          innerRadius={(arc) => {
            if (active && arc.data.label === active.label) return half - 30;
            else return half - 20;
          }}
          padAngle={0.01}
        >
          {(pie) => {
            return pie.arcs.map(
              (arc): ReactNode => (
                <g
                  key={arc.data.label}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.path
                    initial={false}
                    animate={{ d: pie.path(arc) || undefined }}
                    fill={arc.data.color}
                  ></motion.path>
                </g>
              )
            );
          }}
        </Pie>
        <Text
          id="chart-text"
          textAnchor="middle"
          fill="white"
          style={{ fontSize: calculateFontSize(width) }}
        >
          {active === null
            ? "Hover on a slice"
            : `${active.label} : ${active.value}%`}
        </Text>
      </Group>
    </svg>
  );
}
