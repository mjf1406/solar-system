/** @format */

// app/components/ScrollToTop.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to the top whenever the route changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}
