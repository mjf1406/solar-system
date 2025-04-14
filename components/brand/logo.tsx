/** @format */

import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import React from "react";

interface LogoProps {
    fill?: string;
    size?: string;
}

export function Logo({ fill, size }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={size}
            width={size}
            fill={fill}
        >
            <path
                fill="#30d5c8"
                d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
            <path />
        </svg>
    );
}

export function LogoHeader() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2"
        >
            <Logo
                fill="hsl(var(--primary))"
                size="30"
            />
            <h1 className="text-foreground text-xl font-bold">{APP_NAME}</h1>
            <span className="-ml-1 justify-start self-start text-xs font-semibold text-red-500 dark:text-orange-500">
                [ALPHA]
            </span>
        </Link>
    );
}
