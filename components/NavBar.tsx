/** @format */
import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    BookOpenText,
    Dices,
    FlaskConical,
    MonitorIcon,
} from "lucide-react";
import { ThemeSelector } from "./theme/theme-selector";
import { LogoHeader } from "./brand/logo";
import { NightLightToggle } from "./theme/nightlight-toggle";

export const navItems = [
    {
        title: "Content",
        url: "/content",
        icon: BookOpenText,
    },
    // {
    //     title: "STEAM",
    //     url: "/steam",
    //     icon: FlaskConical,
    // },
    // {
    //     title: "3D Printing",
    //     url: "/3d-printing",
    //     icon: MonitorIcon,
    // },
    // {
    //     title: "3D Printing",
    //     url: "/3d-printing",
    //     icon: MonitorIcon,
    //     icon_suffix: ArrowRight,
    // },
];

export function NavbarStatic() {
    return (
        <nav className="bg-opacity-5 bg-card sticky top-0 z-20 w-full border-b backdrop-blur-xl backdrop-filter">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-2 md:px-4">
                <LogoHeader />
                <div className="flex items-center gap-2">
                    <ul className="hidden space-x-4 md:flex">
                        {navItems.map((item) => (
                            <li
                                key={item.title}
                                className="flex items-center gap-1"
                            >
                                <Link
                                    href={item.url}
                                    className="flex items-center gap-0.5 text-sm hover:underline mr-2"
                                >
                                    {item.icon && (
                                        <item.icon
                                            size={18}
                                            className="mr-1 inline align-middle"
                                        />
                                    )}
                                    <span className="align-middle">
                                        {item.title}
                                    </span>
                                    {/* {item.icon_suffix && (
                                        <item.icon_suffix
                                            size={18}
                                            className="ml-1 inline align-middle"
                                        />
                                    )} */}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeSelector />
                    <NightLightToggle />
                </div>
            </div>
        </nav>
    );
}
