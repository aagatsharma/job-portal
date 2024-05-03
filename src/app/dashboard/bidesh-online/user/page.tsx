import { bideshOnlineUserData } from "@/data/bidesh-online-user-data";
import BideshUserTable from "@/app/shared/bidesh-online-user/list/table";
import TableLayout from "@/app/shared/table-layout";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Enhanced Table"),
};

const pageHeader = {
  title: "Users",
  breadcrumb: [
    {
      name: "Bidesh Online",
    },
    {
      name: "User",
    },
  ],
};

export default function BideshOnlineUserPage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={bideshOnlineUserData}
      fileName="users"
      header="full_name,role,status,joined">
      <BideshUserTable data={bideshOnlineUserData} />
    </TableLayout>
  );
}
