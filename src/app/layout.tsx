import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { inter, lexendDeca } from "@/app/fonts";
import { cn } from "@/utils/class-names";
import "@/app/globals.css";
import NextProgress from "@/components/next-progress";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/contexts/provider/redux-provider";

export const metadata: Metadata = {
  title: "Bidesh Online Dashboard",
  description: "Write your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning>
      <body
        // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}>
        <ReduxProvider>
          <ThemeProvider>
            <NextProgress />
            {children}
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
