/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NavbarStatic } from "@/components/NavBar";
import { APP_NAME } from "@/lib/constants";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: APP_NAME,
    description: "Differentiated reading passages on a variety of topics",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh scroll-smooth`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="space"
                    enableSystem
                    disableTransitionOnChange
                    themes={["light", "dark", "space", "reading"]}
                >
                    <NavbarStatic />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
