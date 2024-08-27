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
  safari: {
   label: "Skill",
   color: skill.backgroundColor,
  },
 } satisfies ChartConfig;

 return (
  <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full">
   <RadialBarChart
    data={chartData}
    endAngle={(skill.data.percent / 100) * 360}
    innerRadius={80}
    outerRadius={140}
   >
    <PolarGrid
     gridType="circle"
     radialLines={false}
     stroke="none"
     className="first:fill-muted last:fill-background"
     polarRadius={[86, 74]}
    />
    <RadialBar dataKey="visitors" background />
    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
     <Label
      content={({ viewBox }) => {
       if (viewBox && "cx" in viewBox && "cy" in viewBox) {
        return (
         <text
          x={viewBox.cx}
          y={viewBox.cy}
          textAnchor="middle"
          dominantBaseline="middle"
         >
          <tspan
           x={viewBox.cx}
           y={viewBox.cy}
           className="fill-foreground text-4xl font-bold"
          >
           {chartData[0].visitors.toLocaleString()}%
          </tspan>
          <tspan
           x={viewBox.cx}
           y={(viewBox.cy || 0) + 24}
           className="fill-muted-foreground"
          >
           {skill.name}
          </tspan>
         </text>
        );
       }
      }}
     />
    </PolarRadiusAxis>
   </RadialBarChart>
  </ChartContainer>
 );
}
