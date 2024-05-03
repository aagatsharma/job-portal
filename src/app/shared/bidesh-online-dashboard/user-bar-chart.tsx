"use client";

import WidgetCard from "@/components/cards/widget-card";
import { CustomTooltip } from "@/components/charts/custom-tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMedia } from "@/hooks/use-media";

const data = [
  {
    name: "Nepali (नेपाली) ",
    value: 171,
  },
  {
    name: "English (Nepal)",
    value: 156,
  },
  {
    name: "English (Malaysia)",
    value: 8,
  },
  {
    name: "Hindi (हिन्दी)",
    value: 6,
  },
];

export default function BideshOnlineBarChart({ className }: { className?: string }) {
  const isMediumScreen = useMedia("(max-width: 1200px)", false);
  return (
    <WidgetCard title={"Language/Users"} className={className}>
      <div className="mt-5 aspect-video w-full lg:mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={isMediumScreen ? 24 : 60}
            margin={{
              left: -10,
            }}
            className="[&_.recharts-cartesian-grid-vertical]:opacity-0">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="value" fill="#5a5fd7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
