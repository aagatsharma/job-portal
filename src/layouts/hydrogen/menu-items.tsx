import { routes } from "@/config/routes";
import { PiShoppingCartDuotone, PiHeadsetDuotone, PiHouse } from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Overview",
  },

  {
    name: "Home",
    href: "/",
    icon: <PiHouse />,
  },

  {
    name: "Bidesh Online",
    href: "#",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "Dashboard",
        href: routes.bideshOnline.dashboard,
        badge: "",
      },
      {
        name: "User",
        href: routes.bideshOnline.user,
      },
      {
        name: "Tabs",
        href: routes.bideshOnline.tabs,
      },
      {
        name: "Countries",
        href: routes.bideshOnline.countries,
      },
      {
        name: "Journies",
        href: routes.bideshOnline.journies,
      },
      {
        name: "Faqs",
        href: routes.bideshOnline.faqs,
      },
      {
        name: "Language",
        href: routes.bideshOnline.language,
      },
      {
        name: "Info",
        href: routes.bideshOnline.info,
      },
      {
        name: "Push Notification",
        href: routes.bideshOnline.pushnotification,
      },
    ],
  },
  {
    name: "Bidesh Job",
    href: "#",
    icon: <PiHeadsetDuotone />,
    dropdownItems: [
      {
        name: "Dashboard",
        href: routes.bideshJob.dashboard,
      },
      {
        name: "Create Jobs",
        href: routes.bideshJob.createJob,
      },
      {
        name: "Delete Jobs",
        href: routes.bideshJob.deleteJob,
      },
    ],
  },
];
