/** @format */
"use client";

import * as React from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function NightLightToggle() {
    const [nightLight, setNightLight] = React.useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    // When navigating to the home page, disable night light.
    React.useEffect(() => {
        if (isHomePage && nightLight) {
            setNightLight(false);
        }
    }, [isHomePage, nightLight]);

    // Apply or remove the filter based on the nightLight state.
    React.useEffect(() => {
        if (nightLight) {
            document.body.style.filter =
                "brightness(0.8) sepia(0.5) hue-rotate(20deg)";
        } else {
            document.body.style.filter = "";
        }
    }, [nightLight]);

    // Toggle button click handler.
    const handleToggle = () => {
        setNightLight((prev) => !prev);
    };

    return (
        <Button
            onClick={handleToggle}
            variant="outline"
            size="icon"
            className={isHomePage ? "invisible pointer-events-none" : ""}
        >
            {nightLight ? (
                <Lightbulb className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <LightbulbOff className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle Night Light</span>
        </Button>
    );
}
