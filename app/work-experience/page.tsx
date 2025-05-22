import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Professional Work History | Tom Dowling's Frontend Career",
    description:
        "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
    keywords:
        "frontend developer career, react work experience, senior frontend history, javascript developer roles, frontend lead, architectural modernization, performance optimization, client management, team leadership",
    openGraph: {
        title: "Professional Work History | Tom Dowling's Frontend Career",
        description:
            "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
        url: "https://portfolio-eight-delta-39.vercel.app/work-history",
        siteName: "Tom Dowling's Frontend Portfolio",
        images: [
            {
                url: "https://portfolio-eight-delta-39.vercel.app/assets/images/og/work-experience.jpg",
                width: 1200,
                height: 630,
                alt: "Tom Dowling's Professional Work History"
            }
        ],
        locale: "en_GB",
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Work History | Tom Dowling's Frontend Career",
        description:
            "A detailed timeline of Tom Dowling's professional journey as a Senior Frontend Developer, highlighting extensive experience in React, Next.js, frontend architecture, and large-scale application development.",
        images: ["https://portfolio-eight-delta-39.vercel.app/assets/images/og/work-experience.jpg"]
    }
};

export default function WorkHistoryPage() {
    return (
        <main className="flex-1">
            <section id="intro" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold  text-center tracking-tighter sm:text-5xl xl:text-6xl/none">Work Experience</h1>
                </div>
            </section>

            <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <Timeline />
                </div>
            </section>
        </main>
    );
}
