"use client";

import WidgetCard from "@/components/cards/widget-card";
import { Title } from "rizzui";
import cn from "@/utils/class-names";
import { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

const data = [
  { name: "United Arab Emirates", value: 190 },
  { name: "Malaysia", value: 163 },
  { name: "Bharat (India)", value: 59 },
  { name: "Nepal", value: 12 },
];
const COLORS = ["#7a35ff", "#7c40d0", "#a2f43b", "#f497be"];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, outerRadius, startAngle, endAngle, midAngle } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 100) * cos;
  const sy = cy + (outerRadius - 100) * sin;
  return (
    <Sector
      cx={sx}
      cy={sy}
      cornerRadius={5}
      innerRadius={50}
      outerRadius={120}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={props.fill}
    />
  );
};

export default function BideshOnlineUserDestinationPieChart({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [chartData] = useState(data);

  const onMouseOver = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback(() => {
    setActiveIndex(0);
  }, []);

  function handleChange(viewType: string) {
    console.log("viewType", viewType);
  }

  return (
    <WidgetCard
      title="Destination"
      titleClassName="text-gray-800 sm:text-lg font-inter"
      headerClassName="items-center"
      className={cn("@container", className)}>
      <div className="h-full items-center gap-4 @sm:flex">
        <div className="relative h-[300px] w-full after:absolute after:inset-1/2 after:h-20 after:w-20 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-dashed after:border-gray-300 @sm:w-3/5 @sm:py-3 rtl:after:translate-x-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className="w-20 [&_.recharts-layer:focus]:outline-none [&_.recharts-sector:focus]:outline-none dark:[&_.recharts-text.recharts-label]:first-of-type:fill-white">
              <Pie
                activeIndex={activeIndex}
                data={chartData}
                cornerRadius={10}
                innerRadius={55}
                outerRadius={100}
                paddingAngle={5}
                stroke="rgba(0,0,0,0)"
                dataKey="value"
                activeShape={renderActiveShape}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="@sm:w-2/5 @sm:ps-2">
          <div className="mb-4 mt-1">
            <div className="mb-1.5 text-gray-700">Destination</div>
            <Title as="h2" className="font-inter font-bold text-gray-900">
              424
            </Title>
          </div>
          <div className="">
            <Detail color={COLORS[0]} value={190} text="United Arab Emirates" />
            <Detail color={COLORS[1]} value={163} text="Malaysia" />
            <Detail color={COLORS[2]} value={59} text="Bharat (India)" />
            <Detail color={COLORS[3]} value={12} text="Nepal" />
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}

function Detail({ color, value, text }: { color: string; value: number; text: string }) {
  return (
    <div className="flex justify-between gap-2 border-b border-gray-100 py-3 last:border-b-0">
      <div className=" col-span-3 flex items-center justify-start gap-1.5">
        <span style={{ background: color }} className="block h-3 w-3 rounded" />
        <p className="text-gray-500">{text}</p>
      </div>
      <span
        style={{ borderColor: color }}
        className="rounded-full border-2 px-2 font-semibold text-gray-700">
        {value}
      </span>
    </div>
  );
}
