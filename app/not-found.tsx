import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found | Tom Dowling's Frontend Career",
    description:
        "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
    keywords:
        "frontend developer career, react work experience, senior frontend history, javascript developer roles, frontend lead, architectural modernization, performance optimization, client management, team leadership",
    openGraph: {
        title: "Page Not Found | Tom Dowling's Frontend Career",
        description:
            "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
        url: "https://tom-dowling.com/work-history",
        siteName: "Tom Dowling's Frontend Portfolio",
        images: [
            {
                url: "https://tom-dowling.com/assets/images/og/404.jpg",
                width: 1200,
                height: 630,
                alt: "Tom Dowling's Page Not Found"
            }
        ],
        locale: "en_GB",
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Page Not Found | Tom Dowling's Frontend Career",
        description:
            "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
        images: ["https://tom-dowling.com/assets/images/og/404.jpg"]
    }
};

export default function NotFound() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Page <span className="text-rose-500">Not Found</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Oops! It seems the page you're looking for doesn't exist. This could be due to a broken link or an
                                    outdated URL.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/">
                                    <Button className="bg-rose-500 hover:bg-rose-600">Go back to home</Button>
                                </Link>
                                <Link href="/#contact">
                                    <Button variant="outline">Get in Touch</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
