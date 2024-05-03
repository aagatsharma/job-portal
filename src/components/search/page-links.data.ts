import { routes } from "@/config/routes";

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  {
    name: "Home",
  },

  {
    name: "Bidesh Online",
  },

  {
    name: "Dashboard",
    href: routes.bideshOnline.dashboard,
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

  {
    name: "Bidesh Job",
  },
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
];
