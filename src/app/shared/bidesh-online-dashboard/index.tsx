import BideshOnlineUserOriginPieChart from "./user-origin-pie-chart";
import BideshOnlineDashboardStats from "./stats";
import BideshOnlineUserDestinationPieChart from "./user-destination-pie-chart";
import BideshOnlineBarChart from "./user-bar-chart";

export default function BideshOnlineDashBoard() {
  return (
    <div className="grid grid-cols-12 gap-6 @container @[59rem]:gap-7">
      <BideshOnlineDashboardStats className="col-span-full" />
      <BideshOnlineUserOriginPieChart className="col-span-full lg:col-span-6" />
      <BideshOnlineUserDestinationPieChart className="col-span-full lg:col-span-6" />
      <BideshOnlineBarChart className="col-span-full" />
    </div>
  );
}
