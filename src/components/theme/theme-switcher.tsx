"use client";

import { useTheme } from "next-themes";
import { Switch } from "rizzui";

import { PiSun, PiMoonStarsFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useColorPresetName } from "@/hooks/use-theme-color";
import { updateThemeColor } from "@/utils/update-theme-color";
import { presetDark, presetLight } from "@/config/color-presets";
import { siteConfig } from "@/config/site.config";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { colorPresetName } = useColorPresetName();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // if (theme === "light" && colorPresetName === "black") {
    //   updateThemeColor(
    //     presetLight.lighter,
    //     presetLight.light,
    //     presetLight.default,
    //     presetLight.dark,
    //     presetLight.foreground
    //   );
    // }
    // if (theme === "dark" && colorPresetName === "black") {
    //   updateThemeColor(
    //     presetDark.lighter,
    //     presetDark.light,
    //     presetDark.default,
    //     presetDark.dark,
    //     presetDark.foreground
    //   );
    // }

    if (theme === "dark") {
      setIsDarkTheme(true);
    }
  }, [theme]);

  return (
    <>
      <Switch
        offIcon={<PiSun className="h-3.5 w-3.5" />}
        onIcon={<PiMoonStarsFill className="h-3 w-3" />}
        variant="outline"
        checked={isDarkTheme}
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setIsDarkTheme(!isDarkTheme);
        }}
      />
    </>
  );
};

export default ThemeSwitcher;
