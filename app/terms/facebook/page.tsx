import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — Facebook App | Tom Dowling",
    description:
        "Privacy Policy for the Facebook Application: how information is collected, used, and shared when you use our App to post content to Facebook.",
    openGraph: {
        title: "Privacy Policy — Facebook App | Tom Dowling",
        description:
            "Privacy Policy for the Facebook Application: how information is collected, used, and shared when you use our App to post content to Facebook.",
        url: "https://digital-space.io/terms/facebook",
        siteName: "Digital Space | Tom Dowling",
        locale: "en_GB",
        type: "website"
    }
};

export default function FacebookPrivacyPolicyPage() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-center text-muted-foreground">Effective Date: April 22, 2026</p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="space-y-8 text-foreground/90 leading-relaxed">
                        <p>
                            This Privacy Policy describes how your information is collected, used, and shared when you
                            use our Facebook Application (the &quot;App&quot;) to post content to Facebook. By using
                            the App, you agree to the collection and use of information in accordance with this policy.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">1. Information We Collect</h2>
                            <p className="mb-3">
                                When you use the App to post to Facebook, we may access certain information from your
                                Facebook account via Meta&apos;s APIs. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong className="text-foreground">Public Profile Information:</strong> Name,
                                    profile picture, and user ID.
                                </li>
                                <li>
                                    <strong className="text-foreground">Permissions:</strong> We request specific
                                    permissions (for example,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">publish_to_groups</code>,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">
                                        pages_manage_posts
                                    </code>
                                    ) required to perform the posting actions you initiate.
                                </li>
                                <li>
                                    <strong className="text-foreground">Content:</strong> The text, images, or links you
                                    specifically choose to post through the App.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information collected for the following purposes:</p>
                            <div className="overflow-x-auto rounded-lg border bg-background">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="px-4 py-3 font-semibold">Purpose</th>
                                            <th className="px-4 py-3 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Functionality</td>
                                            <td className="px-4 py-3">
                                                To allow you to create and manage posts on your Facebook Timeline, Pages,
                                                or Groups.
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Authentication</td>
                                            <td className="px-4 py-3">
                                                To verify your identity via Facebook Login to ensure only you can post to
                                                your account.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 align-top font-medium">Improvement</td>
                                            <td className="px-4 py-3">
                                                To monitor the technical performance of the App and fix bugs.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">3. Data Sharing and Disclosure</h2>
                            <p className="mb-3">We do not sell your personal data to third parties. Your information is only shared in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong className="text-foreground">With Meta/Facebook:</strong> Information is sent
                                    to Facebook servers to execute the posting functionality.
                                </li>
                                <li>
                                    <strong className="text-foreground">Legal Requirements:</strong> If required by law
                                    to comply with legal obligations or protect our rights.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">4. Data Retention and Deletion</h2>
                            <p>
                                We only retain your information for as long as necessary to provide the App&apos;s
                                services. If you wish to delete your data or revoke access, you can do so through your
                                Facebook Settings under &quot;Apps and Websites.&quot; Alternatively, you can contact
                                us directly to request data deletion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">5. Security</h2>
                            <p>
                                The security of your data is important to us. We use industry-standard encryption and
                                security protocols provided by Meta&apos;s API to ensure your data is handled securely
                                during the posting process.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:{" "}
                                <Link
                                    href="mailto:tom@digital-space.io"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    tom@digital-space.io
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
