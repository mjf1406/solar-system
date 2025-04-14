/** @format */
"use client";

import * as React from "react";
import { Book, Moon, Star, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themeIcons = {
    light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    space: <Star className="h-[1.2rem] w-[1.2rem]" />,
    reading: <Book className="h-[1.2rem] w-[1.2rem]" />,
};

type Theme = "light" | "dark" | "space" | "reading";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);
    // A ref to store the user’s preferred (non-home) theme.
    const prevThemeRef = React.useRef<Theme | null>(null);

    // Always call this effect so that we’re sure we’re client-side.
    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Determine if we're on the home page.
    const isHomePage = pathname === "/";

    // When on home, force the "space" theme (but save the user's theme first).
    // When leaving home, if the theme is "space", restore the previous theme.
    React.useEffect(() => {
        if (!mounted) return; // do nothing until mounted

        if (isHomePage) {
            // Save the user's theme if it's not already space.
            if (theme !== "space") {
                prevThemeRef.current = theme as Theme;
                setTheme("space");
            }
        } else {
            // When leaving home, if the current theme is "space" and we have
            // a stored user theme that isn’t "space", restore it.
            if (
                theme === "space" &&
                prevThemeRef.current &&
                prevThemeRef.current !== "space"
            ) {
                setTheme(prevThemeRef.current);
            }
        }
    }, [isHomePage, theme, mounted, setTheme]);

    // Handler for manual theme selection.
    const handleThemeChange = (newTheme: Theme) => {
        // If the user manually selects space, clear the stored previous theme.
        if (newTheme === "space") {
            prevThemeRef.current = null;
        }
        setTheme(newTheme);
    };

    // Always define validTheme and currentIcon.
    const validTheme = (theme || "space") as Theme;
    const currentIcon = mounted ? themeIcons[validTheme] : null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    // When on the home page, hide the button (keep space, no interaction)
                    className={
                        isHomePage ? "invisible pointer-events-none" : ""
                    }
                >
                    {currentIcon}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("space")}>
                    Space
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("reading")}>
                    Reading
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
