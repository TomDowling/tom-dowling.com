import Link from "next/link";
import posts from "./posts.json";
import { Metadata } from "next";
import Image from "next/image";

export type IPost = {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
};

export const metadata: Metadata = {
    title: "Blog | Digital Space | React & Next.js Insights by Tom Dowling",
    description:
        "Frontend development blog by Tom Dowling. Expert tips, case studies, and insights on React, Next.js, performance, and scalable web solutions for agencies, startups, and businesses.",
    keywords:
        "react blog, next.js blog, frontend development, web development tips, performance optimization, digital space blog, tom dowling, react case studies, agency frontend, scalable web apps",
    openGraph: {
        title: "Blog | Digital Space | React & Next.js Insights by Tom Dowling",
        description:
            "Frontend development blog by Tom Dowling. Expert tips, case studies, and insights on React, Next.js, performance, and scalable web solutions for agencies, startups, and businesses.",
        url: "https://digital-space.io/blog",
        siteName: "Digital Space | Tom Dowling",
        images: [
            {
                url: "https://digital-space.io/assets/images/og/blog-listing.jpg",
                width: 1200,
                height: 630,
                alt: "Digital Space Blog - React & Next.js Insights"
            }
        ],
        locale: "en_GB",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Digital Space | React & Next.js Insights by Tom Dowling",
        description: "Frontend development blog by Tom Dowling. Tips, case studies, and expert insights for web professionals.",
        images: ["https://digital-space.io/assets/images/og/blog-listing.jpg"]
    }
};

export default function Page() {
    return (
        <main className="flex-1">
            <section id="intro" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold  text-center tracking-tighter sm:text-5xl xl:text-6xl/none">Blog</h1>
                </div>
            </section>

            <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post: IPost) => (
                            <li key={post.id}>
                                <Link href={`/blog/${post.slug}`} className="flex flex-col gap-4">
                                    <Image
                                        // src={`/assets/images/blog/${post.slug}.jpg`}
                                        src={`/assets/images/og/blog-post.jpg`}
                                        alt={post.title}
                                        width={1200}
                                        height={630}
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h2 className="font-bold">{post.title}</h2>
                                        <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
