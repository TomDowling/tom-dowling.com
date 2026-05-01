import posts from "./../posts.json";
import { IPost } from "../page";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function getBlogPostBySlug(slug: string) {
    return posts.find((post) => post.slug === slug);
}

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        return {};
    }

    return {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.description,
        keywords: post.seo?.keywords?.join(", "),
        alternates: {
            canonical: post.seo?.canonical
        },
        openGraph: {
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.description,
            url: post.seo?.canonical
        },
        twitter: {
            card: "summary_large_image",
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.description
        }
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = params;

    const post = posts.find((p: IPost) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <main className="flex-1">
            <section id="intro" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold  text-center tracking-tighter sm:text-5xl xl:text-6xl/none">{post.title}</h1>
                </div>
            </section>

            <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="string-to-html" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </section>
        </main>
    );
}
