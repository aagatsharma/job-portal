import BideshOnlineDashBoard from "@/app/shared/bidesh-online-dashboard";
import PageHeader from "@/app/shared/page-header";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Dashboard"),
};

export default function BideshOnlineDashboardPage() {
  const breadcrums = [{ name: "Bidesh Online" }, { name: "Dashboard" }];
  return (
    <>
      <PageHeader title="Dashboard" breadcrumb={breadcrums} />
      <BideshOnlineDashBoard />
    </>
  );
}
