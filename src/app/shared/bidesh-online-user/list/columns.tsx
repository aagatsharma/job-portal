"use client";

import Link from "next/link";
import { type User } from "@/data/bidesh-online-user-data";
import { routes } from "@/config/routes";
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from "rizzui";
import { HeaderCell } from "@/components/ui/table";
import EyeIcon from "@/components/icons/eye";
import PencilIcon from "@/components/icons/pencil";
import AvatarCard from "@/components/ui/avatar-card";
import DateCell from "@/components/ui/date-cell";
import DeletePopover from "@/app/shared/delete-popover";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "subscriber":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case "admin":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-2">
        <Checkbox
          title={"Select All"}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: "checked",
    key: "checked",
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Name" />,
    dataIndex: "full_name",
    key: "full_name",
    width: 250,
    render: (_: string, row: User) => (
      <AvatarCard src={row.avatar} name={row.full_name} description={`${row.role}`} />
    ),
  },
  {
    title: <HeaderCell title="Role" />,
    dataIndex: "role",
    key: "role",
    width: 250,
    render: (value: string) => getStatusBadge(value),
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    // render: (value: string) => getStatusBadge(value),
  },
  {
    title: (
      <HeaderCell
        title="Joined"
        sortable
        ascending={sortConfig?.direction === "asc" && sortConfig?.key === "joined"}
      />
    ),
    onHeaderCell: () => onHeaderCellClick("joined"),
    dataIndex: "joined",
    key: "joined",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <></>,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Tooltip size="sm" content={"Edit User"} placement="top" color="invert">
          <Link href="#">
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700">
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip size="sm" content={"View User"} placement="top" color="invert">
          <Link href="#">
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700">
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the User`}
          description={`Are you sure you want to delete this #${row.id} User?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
