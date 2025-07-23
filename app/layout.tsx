import type { Metadata } from "next";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Code2, Github, Linkedin, Menu } from "lucide-react"; // Import Menu icon
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "Digital Space | Tom Dowling | Senior React & Next.js Developer",
    description:
        "Hire Tom Dowling, a senior freelance React and Next.js developer in Dorset, UK. Specializing in scalable frontend architecture, performance optimization, and custom web application development for agencies and businesses worldwide.",
    keywords:
        "react developer, next.js developer, freelance react, senior frontend, react consultant, frontend architecture, react performance, typescript, digital space, web development, dorset, remote react developer, bournemouth react developer, frontend expert",
    openGraph: {
        title: "Digital Space | Tom Dowling | Senior React & Next.js Developer",
        description:
            "Hire Tom Dowling, a senior freelance React and Next.js developer in Dorset, UK. Specializing in scalable frontend architecture, performance optimization, and custom web application development for agencies and businesses worldwide.",
        url: "https://digital-space.io/",
        siteName: "Digital Space | Tom Dowling",
        images: [
            {
                url: "https://digital-space.io/assets/images/og/homepage.jpg",
                width: 1200,
                height: 630,
                alt: "Digital Space - Tom Dowling Senior React Developer"
            }
        ],
        locale: "en_GB",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Space | Tom Dowling | Senior React & Next.js Developer",
        description:
            "Hire Tom Dowling, a senior freelance React and Next.js developer in Dorset, UK. Scalable frontend architecture and high-performance web solutions.",
        images: ["https://digital-space.io/assets/images/og/homepage.jpg"]
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-P95QKTJ" />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Tom Dowling",
                            jobTitle: "Senior React & Next.js Developer",
                            url: "https://digital-space.io/",
                            image: "https://digital-space.io/assets/images/og/homepage.jpg",
                            sameAs: ["https://www.linkedin.com/in/dowling-tom/", "https://github.com/TomDowling/"],
                            worksFor: {
                                "@type": "Organization",
                                name: "Digital Space",
                                url: "https://digital-space.io/"
                            },
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Dorset",
                                addressCountry: "UK"
                            }
                        })
                    }}
                />
            </Head>
            <body>
                <div className="flex min-h-screen flex-col">
                    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto flex h-16 items-center px-4 space-x-4 justify-between sm:space-x-0 sm:px-0">
                            <Link href="/" className="flex gap-2 items-center text-xl font-bold">
                                <Code2 className="h-6 w-6 text-rose-500" />
                                <span>Tom Dowling</span>
                            </Link>

                            <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                                <nav className="flex items-center space-x-6">
                                    <Link href="/blog" className="text-sm font-medium hover:text-rose-500 transition-colors">
                                        Blog
                                    </Link>
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
                                    <Link href="/#contact">
                                        <Button variant="default" className="bg-rose-500 hover:bg-rose-600">
                                            Hire Me
                                        </Button>
                                    </Link>
                                </nav>
                            </div>

                            <div className="md:hidden flex items-center">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <Menu className="h-6 w-6" />
                                            <span className="sr-only">Toggle navigation menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right">
                                        <nav className="flex flex-col gap-4 py-6">
                                            <Link href="/blog" className="text-lg font-medium hover:text-rose-500 transition-colors">
                                                Blog
                                            </Link>
                                            <Link href="/#services" className="text-lg font-medium hover:text-rose-500 transition-colors">
                                                Services
                                            </Link>
                                            <Link href="/#portfolio" className="text-lg font-medium hover:text-rose-500 transition-colors">
                                                Portfolio
                                            </Link>
                                            <Link
                                                href="/work-experience"
                                                className="text-lg font-medium hover:text-rose-500 transition-colors">
                                                Work Experience
                                            </Link>
                                            <Link href="/#about" className="text-lg font-medium hover:text-rose-500 transition-colors">
                                                About
                                            </Link>
                                            <Link href="/#contact">
                                                <Button variant="default" className="w-full bg-rose-500 hover:bg-rose-600">
                                                    Hire Me
                                                </Button>
                                            </Link>
                                        </nav>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </header>
                    {children}
                    <footer className="w-full py-6 md:py-0">
                        <section className="w-full py-12 md:py-24 lg:py-32">
                            <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                        Ready to build your next React project?
                                    </h2>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Let's collaborate to create a modern, performant web application that exceeds your expectations.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                                    <Link href="/#contact">
                                        <Button className="bg-rose-500 hover:bg-rose-600">Start a Project</Button>
                                    </Link>
                                    <Link href="/#portfolio">
                                        <Button variant="outline">View Portfolio</Button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <div className="pt-8 sm:pt-0 border-t container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <div className="flex gap-2 items-center text-xl font-bold">
                                <Code2 className="h-6 w-6 text-rose-500" />
                                <span>Tom Dowling</span>
                            </div>
                            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                                &copy; {new Date().getFullYear()} Tom Dowling. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/TomDowling/"
                                    className="text-muted-foreground hover:text-rose-500"
                                    target="_blank">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/dowling-tom/"
                                    className="text-muted-foreground hover:text-rose-500"
                                    target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
