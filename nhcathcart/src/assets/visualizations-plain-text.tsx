import { ReactElement } from "react";
import { PieChart } from "../components/PieChart";
import { LineChart } from "../components/LIneChart";
import { BarChart } from "../components/BarChart";

interface Vizualization {
    vizualizaiton: ReactElement;
    code: string;
    title: string;
}

export const vizArray: Vizualization[] = [
    {
        vizualizaiton: <LineChart/>,
        title: 'Line Chart',
        code: `
import applestock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import useMeasure from "react-use-measure";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { defaultStyles, useTooltip, Tooltip } from "@visx/tooltip";
import { useState } from "react";
import { GridRows, GridColumns } from "@visx/grid";
import { motion } from "framer-motion";

export function LineChart() {
  const dataSet = applestock.slice(0, 20);
  const [data, setData] = useState(dataSet.slice(0, 10));
  console.log(data);
  const extraData = applestock.slice(10, 20);
  const margin = 32;

  const defaultWidth = 100;
  const defaultHeight = 100;
  const textColor = "#e4dbd8";
  const lineOneColor = "#FFB3D9";
  const LineTwoColor = "#EAEAEA";
  const LineThreeColor = "#f7d0e3";
  const axisColor = textColor;
  const toolTipStyles = {
    ...defaultStyles,
    borderRadius: 4,
    background: "#446595",
    color: textColor,
  };
  const tickLabelProps = {
    fill: textColor,
    fontSize: 12,
    fontFamily: "sans-serif",
  } as const;

  const [ref, bounds] = useMeasure();

  //   const { showTooltip, hideTooltip, tooltipLeft, tooltipTop, tooltipData } =
  //     useTooltip<AppleStock>();
  const width = bounds.width || defaultWidth;
  const height = bounds.height || defaultHeight;
  const innerWidth = width - margin;
  const innerHeight = height - margin;

  const xScale = scaleBand<string>({
    range: [margin, innerWidth],
    domain: data.map(getXValue),
    padding: 0.2,
  });

  const yScale = scaleLinear<number>({
    range: [innerHeight, margin],
    domain: [
      Math.min(...data.map(getYValue)) - 1,
      Math.max(...data.map(getYValue)) + 1,
    ],
  });

  function getXValue(d: AppleStock) {
    return formatDate(d.date);
  }
  function getYValue(d: AppleStock) {
    return d.close;
  }
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day;
  }
  const linePath = data.map((d) => {
    const xVal = getXValue(d) ? getXValue(d) : undefined;
    const scaledXVal = xVal && xScale(xVal) ? xScale(getXValue(d)) : 0;
    return {
      x: scaledXVal ? scaledXVal + xScale.bandwidth() / 2 : 0,
      y: yScale(getYValue(d)),
    };
  });
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox={\`0 0 \${width} \${height}\`}
    >
      <Group>
        <GridRows
          scale={yScale}
          width={innerWidth - margin}
          height={innerHeight}
          stroke="#EDF2F7"
          strokeOpacity={0.2}
          left={margin}
        />
        <GridColumns
          scale={xScale}
          width={innerWidth}
          height={innerHeight - margin}
          stroke="#EDF2F7"
          strokeOpacity={0.2}
          top={margin}
        />

        <AxisLeft
          left={margin}
          scale={yScale}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={tickLabelProps}
        />

        <AxisBottom
          top={innerHeight}
          scale={xScale}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={tickLabelProps}
        />
      </Group>
      <Group>
        <motion.path
          d={\`M\${linePath.map((p) => \`\${p.x},\${p.y}\`).join("L")}\`}
          stroke={lineOneColor}
          strokeWidth={2}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </Group>
      <Group>
        {linePath.map((p, i) => {
          return (
            <motion.circle
              key={\`cicle-\${i}\`}
              cx={p.x}
              cy={p.y}
              r={4}
              fill={lineOneColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          );
        })}
      </Group>
    </svg>
  );
}
        `
    }, 
    {
        vizualizaiton: <PieChart/>,
        title: 'Pie Chart',
        code: `
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
      textElement.style.fontSize = \`\${fontSize}px\`;
    }
  }, [width]);
  return (
    <svg
      ref={ref}
      width="80%"
      height="80%"
      viewBox={\`-\${half} -\${half} \${width} \${width}\`}
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
            : \`\${active.label} : \${active.value}%\`}
        </Text>
      </Group>
    </svg>
  );
}
        `
    },
    {
        vizualizaiton: <BarChart/>,
        title: 'Bar Chart',
        code: `
import applestock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import useMeasure from "react-use-measure";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { Bar } from "@visx/shape";
import { defaultStyles, useTooltip, Tooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { TouchEvent, MouseEvent, useState } from "react";

const data = applestock.slice(0, 10);

const margin = 32;

const defaultWidth = 100;
const defaultHeight = 100;
const textColor = "#e4dbd8";
const barOddColor = "#FFB3D9";
const barEvenColor = "#EAEAEA";
const barOddColorHover = "#f7d0e3";
const barEvenColorHover = "#ffffff";
const toolTipStyles = {
  ...defaultStyles,
  borderRadius: 4,
  background: "#446595",
  color: textColor,
};

const axisColor = textColor;
const tickLabelProps = {
  fill: textColor,
  fontSize: 12,
  fontFamily: "sans-serif",
} as const;

export function BarChart() {
  const [ref, bounds] = useMeasure();
  const { showTooltip, hideTooltip, tooltipLeft, tooltipTop, tooltipData } =
    useTooltip<AppleStock>();
  const width = bounds.width || defaultWidth;
  const height = bounds.height || defaultHeight;

  const innerWidth = width - margin;
  const innerHeight = height - margin;

  function getXValue(d: AppleStock) {
    return formatDate(d.date);
  }
  function getYValue(d: AppleStock) {
    return d.close;
  }
  function isOdd(number: number) {
    return number % 2 === 0;
  }
  const xScale = scaleBand<string>({
    range: [margin, innerWidth],
    domain: data.map(getXValue),
    padding: 0.2,
  });
  const yScale = scaleLinear<number>({
    range: [innerHeight, margin],
    domain: [
      Math.min(...data.map(getYValue)) - 1,
      Math.max(...data.map(getYValue)) + 1,
    ],
  });
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day;
  }
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg
        ref={ref}
        width="100%"
        height="100%"
        viewBox={\`0 0 \${width} \${height}\`}
      >
        <Group>
          {data.map((d, index) => {
            const xValue = getXValue(d);
            const barWidth = xScale.bandwidth();
            const barHeight = innerHeight - (yScale(getYValue(d)) ?? 0);
            const barX = xScale(xValue) || 0;
            const barY = innerHeight - barHeight;
            const fillColor = isOdd(index) ? barOddColor : barEvenColor;
            const hoverColor = isOdd(index)
              ? barOddColorHover
              : barEvenColorHover;
            return (
              <Bar
                key={\`bar-\${xValue}\`}
                x={barX}
                rx={5}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={index === hoveredIndex ? hoverColor : fillColor}
                onMouseLeave={() => {
                  setHoveredIndex(-1);
                  hideTooltip();
                }}
                onMouseMove={(
                  e: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>
                ) => {
                  setHoveredIndex(index);
                  const point = localPoint(e);
                  if (!point) return;
                  const barCenterX = barX + barWidth / 2;
                  const barCenterY = barY + barHeight / 2;
                  showTooltip({
                    tooltipData: d,
                    tooltipLeft: point.x,
                    tooltipTop: point.y,
                  });
                }}
              />
            );
          })}
        </Group>
        <Group>
          <AxisLeft
            left={margin}
            scale={yScale}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={tickLabelProps}
          />
        </Group>
        <Group>
          <AxisBottom
            top={innerHeight}
            scale={xScale}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={tickLabelProps}
          />
        </Group>
      </svg>
      {tooltipData ? (
        <div key={Math.random()}>
          <Tooltip top={tooltipTop} left={tooltipLeft} style={toolTipStyles}>
            <b>Date</b> : {getXValue(tooltipData)}
            <br></br>
            <b>Closing Price</b> : {getYValue(tooltipData)}
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
}
        `
    } 
]