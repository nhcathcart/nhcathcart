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
      viewBox={`0 0 ${width} ${height}`}
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
          d={`M${linePath.map((p) => `${p.x},${p.y}`).join("L")}`}
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
              key={`cicle-${i}`}
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
