import ThemeSwitcher from "@/components/theme/theme-switcher";
import ReduxProvider from "@/contexts/provider/redux-provider";
import Link from "next/link";
import { Button } from "rizzui";

const RootPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <ThemeSwitcher />
      <h1>Navigate to Dashboard: /dashboard</h1>
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
};

export default RootPage;
