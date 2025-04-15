/** @format */
// @/components/LayoutTemplate.tsx

export default function ContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full bg-muted h-dvh mx-auto flex flex-col items-center justify-start dark:bg-background dark:text-gray-300">
            {children}
        </main>
    );
}
