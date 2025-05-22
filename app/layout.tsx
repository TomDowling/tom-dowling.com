import type { Metadata } from "next";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tom Dowling | Senior React Frontend Developer & Consultant",
    description:
        "Hire a senior freelance React developer specializing in frontend architecture, performance optimization, and custom web application development. Delivering scalable, high-performance React solutions.",
    keywords:
        "react developer, freelance react, senior frontend, react consultant, frontend architecture, react performance, typescript, next.js, web development, bournemouth react developer", // Add your location if you want to target local clients
    openGraph: {
        title: "Tom Dowling | Senior React Frontend Developer & Consultant",
        description:
            "Hire a senior freelance React developer specializing in frontend architecture, performance optimization, and custom web application development. Delivering scalable, high-performance React solutions.",
        url: "https://portfolio-eight-delta-39.vercel.app/",
        siteName: "Tom Dowling's Frontend Portfolio",
        images: [
            {
                url: "https://portfolio-eight-delta-39.vercel.app/images/og-image-homepage.jpg",
                width: 1200,
                height: 630,
                alt: "Tom Dowling's Frontend Portfolio"
            }
        ],
        locale: "en_GB",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Tom Dowling | Senior React Frontend Developer & Consultant",
        description:
            "Hire a senior freelance React developer specializing in frontend architecture, performance optimization, and custom web application development. Delivering scalable, high-performance React solutions.",
        images: ["https://portfolio-eight-delta-39.vercel.app/images/og-image-homepage.jpg"]
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex min-h-screen flex-col">
                    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                            <div className="flex gap-2 items-center text-xl font-bold">
                                <Code2 className="h-6 w-6 text-rose-500" />
                                <span>Tom Dowling</span>
                            </div>
                            <div className="flex flex-1 items-center justify-end space-x-4">
                                <nav className="flex items-center space-x-2 md:space-x-6">
                                    <Link href="/#services" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        Services
                                    </Link>
                                    <Link href="/#portfolio" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        Portfolio
                                    </Link>
                                    <Link href="/work-experience" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        Work Experience
                                    </Link>
                                    <Link href="/#about" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        About
                                    </Link>
                                    <Link href="/#contact" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        <Button variant="default" className="bg-rose-500 hover:bg-rose-600">
                                            Hire Me
                                        </Button>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}
