"use client";

import { TrendingUp } from "lucide-react";
import {
 Label,
 PolarGrid,
 PolarRadiusAxis,
 RadialBar,
 RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export function Component({ skill }: any) {
 const chartData = [
  { name: "skill", visitors: skill.data.percent, fill: skill.backgroundColor },
 ];
 const chartConfig = {
  desktop: {
   label: "Desktop",
   color: "hsl(var(--chart-1))",
  },
  mobile: {
   label: "Mobile",
   color: "hsl(var(--chart-2))",
  },
 } satisfies ChartConfig;
 const totalVisitors = 11;
 return (
  <ChartContainer
   config={chartConfig}
   className="mx-auto aspect-square w-full max-w-[250px]"
  >
   <RadialBarChart
    data={chartData}
    endAngle={180}
    innerRadius={80}
    outerRadius={130}
   >
    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
     <Label
      content={({ viewBox }) => {
       if (viewBox && "cx" in viewBox && "cy" in viewBox) {
        return (
         <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
          <tspan
           x={viewBox.cx}
           y={(viewBox.cy || 0) - 16}
           className="fill-foreground text-2xl font-bold"
          >
           asd
          </tspan>
          <tspan
           x={viewBox.cx}
           y={(viewBox.cy || 0) + 4}
           className="fill-muted-foreground"
          >
           Visitors
          </tspan>
         </text>
        );
       }
      }}
     />
    </PolarRadiusAxis>
    <RadialBar
     dataKey="desktop"
     stackId="a"
     cornerRadius={5}
     fill="var(--color-desktop)"
     className="stroke-transparent stroke-2"
    />
    <RadialBar
     dataKey="mobile"
     fill="var(--color-mobile)"
     stackId="a"
     cornerRadius={5}
     className="stroke-transparent stroke-2"
    />
   </RadialBarChart>
  </ChartContainer>
 );
}
