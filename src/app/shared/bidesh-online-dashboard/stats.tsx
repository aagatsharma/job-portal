import MetricCard from "@/components/cards/metric-card";
import cn from "@/utils/class-names";
import {
  PiCar,
  PiFlag,
  PiGlobe,
  PiTabs,
  PiUserPlus,
  PiUserMinus,
  PiQuestion,
  PiClipboard,
} from "react-icons/pi";

const ticketStats = [
  {
    id: 1,
    icon: <PiGlobe className="h-full w-full" />,
    title: "Language",
    metric: "12,450",
  },
  {
    id: 2,
    icon: <PiCar className="h-full w-full" />,
    title: "Journey",
    metric: "3,590",
  },
  {
    id: 3,
    icon: <PiFlag className="h-full w-full" />,
    title: "Country",
    metric: "7,890",
  },
  {
    id: 4,
    icon: <PiTabs className="h-full w-full" />,
    title: "Tabs",
    metric: "1,160",
  },
  {
    id: 5,
    icon: <PiUserPlus className="h-full w-full" />,
    title: "Active Users",
    metric: "12,450",
  },
  {
    id: 6,
    icon: <PiUserMinus className="h-full w-full" />,
    title: "Inactive Users",
    metric: "3,590",
  },
  {
    id: 7,
    icon: <PiClipboard className="h-full w-full" />,
    title: "Content",
    metric: "7,890",
  },
  {
    id: 8,
    icon: <PiQuestion className="h-full w-full" />,
    title: "Faqs",
    metric: "1,160",
  },
];

const BideshOnlineDashboardStats = ({ className }: { className: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 3xl:gap-8 4xl:gap-9",
        className
      )}>
      {ticketStats.map((stat) => (
        <MetricCard
          key={stat.title + stat.id}
          title={stat.title}
          metric={stat.metric}
          icon={stat.icon}
          iconClassName="bg-transparent w-11 h-11"
        />
      ))}
    </div>
  );
};

export default BideshOnlineDashboardStats;
