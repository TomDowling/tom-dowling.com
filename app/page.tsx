import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Cpu, Github, Linkedin, Mail, MessageSquare, Rocket, Twitter, Zap } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Page() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    React Developer <span className="text-rose-500">Crafting Digital Experiences</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    I build SEO optimised modern, responsive, and performant web applications using React and Next.js. Let's
                                    turn your vision into reality.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/work-experience">
                                    <Button className="bg-rose-500 hover:bg-rose-600">View My Experience</Button>
                                </Link>
                                <Link href="/#contact">
                                    <Button variant="outline">Get in Touch</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-b from-rose-500 to-orange-300 p-1">
                                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                                    <Image
                                        src="/assets/images/avatar.jpg"
                                        width={300}
                                        height={300}
                                        alt="Tom Dowling"
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Services</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Specialized React Solutions</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I have worked on a range of React applications that deliver outstanding user experiences.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <Rocket className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">React Development</h3>
                            <p className="text-muted-foreground mt-2">Architecting & Building Custom React Applications.</p>
                        </div>
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Scalable Applications</h3>
                            <p className="text-muted-foreground mt-2">
                                Server-side rendered and static applications with Next.js for optimal SEO and performance.
                            </p>
                        </div>
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">UI/UX Crafting</h3>
                            <p className="text-muted-foreground mt-2">Collaborative Client Engagement & UI/UX Improvement.</p>
                        </div>
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Optimization</h3>
                            <p className="text-muted-foreground mt-2">Optimizing Rendering Speed & Overall User Experience.</p>
                        </div>
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <Code2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Enterprise Solutions</h3>
                            <p className="text-muted-foreground mt-2">Large-Scale Application Development & Maintenance.</p>
                        </div>
                        <div className="group relative rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl h-full w-full">
                            <div className="absolute right-4 top-[-15%] h-12 w-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                                <Rocket className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">SEO Optimization</h3>
                            <p className="text-muted-foreground mt-2">Following SEO trends and making accessible web applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Portfolio</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A selection of my recent work showcasing React expertise and problem-solving skills.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/placeholder.svg?height=400&width=600"
                                width={600}
                                height={400}
                                alt="E-commerce project"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">All in One Gym Solution (coming soon)</h3>
                                <p className="text-sm text-muted-foreground">
                                    Cross-platform web and mobile application built with Next & React Native for fitness tracking.
                                </p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        React Native
                                    </span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Next.js</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Node.js</span>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/placeholder.svg?height=400&width=600"
                                width={600}
                                height={400}
                                alt="Dashboard project"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">MUI Calendar (coming soon)</h3>
                                <p className="text-sm text-muted-foreground">Maybe a npm package for a mui responsive calendar?</p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">MUI</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Date FNS</span>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/portfolio/expo-build-notifier.png"
                                width={600}
                                height={400}
                                alt="Expo Build Notifier NPM Page Screenshot"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Expo Build Notifier</h3>
                                <p className="text-sm text-muted-foreground">
                                    Before Expo changed it's build process I created the NPM package Expo Build Notifier to help notifiy
                                    users of the completion of a build in Slack, Telegram & Discord
                                </p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        NPM Package
                                    </span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Slack</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Discord</span>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/portfolio/demo-1.png"
                                width={600}
                                height={400}
                                alt="Demo 1 webapp screenshot"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Demo 1</h3>
                                <p className="text-sm text-muted-foreground">
                                    Pixel Perfect Implementation! Following a figma design I created this site pixel perfect to the design.
                                </p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Figma</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        Pixel Perfect
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/portfolio/demo-2.png"
                                width={600}
                                height={400}
                                alt="Demo 2 webapp screenshot"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Demo 2</h3>
                                <p className="text-sm text-muted-foreground">
                                    I Created a Netflix clone using no third party plugins for the carousel.
                                </p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Carousel</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        Light Weight
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src="/assets/images/portfolio/expo-template.png"
                                width={600}
                                height={400}
                                alt="Expo Template GitHub Page Screenshot"
                                className="aspect-video object-cover transition-all group-hover:scale-105"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Expo Template</h3>
                                <p className="text-sm text-muted-foreground">
                                    When I was working with Expo a lot I noticed there wasn't any up-to-date templates, so i created an open
                                    source one that I maintained.
                                </p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Expo</span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        React Navigation
                                    </span>
                                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                        Recoil State Management
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                            <Button className="bg-rose-500 hover:bg-rose-600">View All Projects</Button>
                        </div> */}
                </div>
            </section>

            {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Testimonials</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Clients Say</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Feedback from clients who have experienced the quality of my work.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <Image
                                        src="/assets/images/placeholder.svg?height=100&width=100"
                                        width={60}
                                        height={60}
                                        alt="Client portrait"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm leading-loose text-muted-foreground">
                                            "Working with this developer was a game-changer for our startup. The React application they
                                            built exceeded our expectations in terms of performance and user experience."
                                        </p>
                                        <h4 className="mt-2 font-semibold">Sarah Johnson</h4>
                                        <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <Image
                                        src="/assets/images/placeholder.svg?height=100&width=100"
                                        width={60}
                                        height={60}
                                        alt="Client portrait"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm leading-loose text-muted-foreground">
                                            "The attention to detail and technical expertise in React development is impressive. Our
                                            e-commerce platform has seen a 40% increase in conversion since the redesign."
                                        </p>
                                        <h4 className="mt-2 font-semibold">Michael Chen</h4>
                                        <p className="text-sm text-muted-foreground">CTO, ShopWave</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <Image
                                        src="/assets/images/placeholder.svg?height=100&width=100"
                                        width={60}
                                        height={60}
                                        alt="Client portrait"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm leading-loose text-muted-foreground">
                                            "I was impressed by how quickly complex React components were delivered without sacrificing
                                            quality. The code was clean, well-documented, and easy to maintain."
                                        </p>
                                        <h4 className="mt-2 font-semibold">Emily Rodriguez</h4>
                                        <p className="text-sm text-muted-foreground">Lead Developer, DataViz</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <Image
                                        src="/assets/images/placeholder.svg?height=100&width=100"
                                        width={60}
                                        height={60}
                                        alt="Client portrait"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm leading-loose text-muted-foreground">
                                            "The React Native app developed for our fitness brand has received outstanding user reviews. The
                                            UI is intuitive and the performance is exceptional across both iOS and Android."
                                        </p>
                                        <h4 className="mt-2 font-semibold">James Wilson</h4>
                                        <p className="text-sm text-muted-foreground">Founder, FitLife</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/images/avatar.jpg"
                                width={500}
                                height={500}
                                alt="Tom Dowling"
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">About Me</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    React Developer with 9+ Years Experience
                                </h2>
                                <p className="text-muted-foreground">
                                    As a Senior Frontend Developer with years of experience, I specialize in crafting robust, scalable, and
                                    high-performance React applications. My expertise spans from architecting complex solutions and
                                    modernizing core frameworks to leading development teams and mentoring junior developers.
                                </p>
                                <p className="text-muted-foreground">
                                    I'm passionate about implementing clean, maintainable code, leveraging TDD, and ensuring exceptional
                                    user experiences. My focus is on delivering not just code, but sustainable, future-proof digital
                                    products that drive business value.
                                </p>
                                <p className="text-muted-foreground">
                                    With experience across various industries including e-commerce, fintech, and SaaS, I bring a wealth of
                                    knowledge to every project. I pride myself on writing clean, maintainable code and staying up-to-date
                                    with the latest developments in the React ecosystem.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/assets/docs/cv.pdf" target="_blank">
                                    <Button className="bg-rose-500 hover:bg-rose-600">Download CV</Button>
                                </Link>
                                <Link href="https://github.com/TomDowling/" target="_blank">
                                    <Button variant="outline">My GitHub</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Contact</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Have a project in mind? Get in touch and let's create something amazing.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-rose-100 p-2 text-rose-500">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <Link href="mailto:tom@digital-space.io">
                                        <p className="text-sm text-muted-foreground hover:text-rose-500">tom@digital-space.io</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-rose-100 p-2 text-rose-500">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Social Media</h3>
                                    <div className="flex gap-2 mt-1">
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
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <h3 className="font-semibold mb-4">Availability</h3>
                                <p className="text-sm text-muted-foreground mb-2">Currently available for freelance projects starting:</p>
                                <p className="font-medium text-rose-500">June 2025</p>
                                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="font-medium">Project Type</p>
                                        <p className="text-muted-foreground">Full-time / Part-time</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-muted-foreground">Remote / Dorset, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Send Me a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
