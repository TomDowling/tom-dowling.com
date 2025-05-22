import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Cpu, Github, Linkedin, Mail, MessageSquare, Rocket, Twitter, Zap } from "lucide-react";

export default function Home() {
    return (
        <>
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
                                        I build SEO optimised modern, responsive, and performant web applications using React and Next.js.
                                        Let's turn your vision into reality.
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
                                            src="/avatar.jpg"
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
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="E-commerce project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">E-commerce Platform</h3>
                                    <p className="text-sm text-muted-foreground">
                                        A full-featured online store built with React, Next.js, and Stripe integration.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Next.js
                                        </span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Stripe
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="Dashboard project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">Analytics Dashboard</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Interactive dashboard with real-time data visualization using React and D3.js.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">D3.js</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            WebSockets
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="Mobile app project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">Fitness Mobile App</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Cross-platform mobile application built with React Native for fitness tracking.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            React Native
                                        </span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Redux</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Firebase
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="SaaS project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">SaaS Platform</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Subscription-based service with user authentication and payment processing.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Next.js
                                        </span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">Auth0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="Social media project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">Social Media Platform</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Community platform with real-time messaging and content sharing.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            GraphQL
                                        </span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Socket.io
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    width={600}
                                    height={400}
                                    alt="AI project"
                                    className="aspect-video object-cover transition-all group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold">AI Content Generator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Web application that leverages AI to generate and edit content.
                                    </p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">React</span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            OpenAI API
                                        </span>
                                        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-500">
                                            Tailwind CSS
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

                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                                        src="/placeholder.svg?height=100&width=100"
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
                                        src="/placeholder.svg?height=100&width=100"
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
                                        src="/placeholder.svg?height=100&width=100"
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
                                        src="/placeholder.svg?height=100&width=100"
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
                </section>

                <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=500&width=500"
                                    width={500}
                                    height={500}
                                    alt="Developer portrait"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">About Me</div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        React Developer with 9+ Years Experience
                                    </h2>
                                    {/* <p className="text-muted-foreground">
                    I'm a passionate React developer with a strong focus on
                    creating efficient, scalable, and user-friendly web
                    applications. My journey in web development began over 5
                    years ago, and I've been specializing in React for the
                    majority of that time.
                  </p> */}
                                    <p className="text-muted-foreground">
                                        As a Senior Frontend Developer with years of experience, I specialize in crafting robust, scalable,
                                        and high-performance React applications. My expertise spans from architecting complex solutions and
                                        modernizing core frameworks to leading development teams and mentoring junior developers.
                                    </p>
                                    <p className="text-muted-foreground">
                                        I'm passionate about implementing clean, maintainable code, leveraging TDD, and ensuring exceptional
                                        user experiences. My focus is on delivering not just code, but sustainable, future-proof digital
                                        products that drive business value.
                                    </p>
                                    <p className="text-muted-foreground">
                                        With experience across various industries including e-commerce, fintech, and SaaS, I bring a wealth
                                        of knowledge to every project. I pride myself on writing clean, maintainable code and staying
                                        up-to-date with the latest developments in the React ecosystem.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button className="bg-rose-500 hover:bg-rose-600">Download Resume</Button>
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
                                            <p className="text-sm text-muted-foreground">tom@digital-space.io</p>
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
                                            {/* <Link href="#" className="text-muted-foreground hover:text-rose-500">
                                                <Twitter className="h-5 w-5" />
                                                <span className="sr-only">Twitter</span>
                                            </Link> */}
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
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Currently available for freelance projects starting:
                                    </p>
                                    <p className="font-medium text-rose-500">June 2025</p>
                                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <p className="font-medium">Project Type</p>
                                            <p className="text-muted-foreground">Full-time / Part-time</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p className="text-muted-foreground">Remote / Worldwide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <h3 className="font-semibold mb-4">Send Me a Message</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Name
                                            </label>
                                            <Input id="name" placeholder="Your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Email
                                            </label>
                                            <Input id="email" type="email" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="Project inquiry" />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" />
                                    </div>
                                    <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

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
                            <Button className="bg-rose-500 hover:bg-rose-600">Start a Project</Button>
                            <Button variant="outline">View Portfolio</Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t py-6 md:py-0">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex gap-2 items-center text-xl font-bold">
                        <Code2 className="h-6 w-6 text-rose-500" />
                        <span>Tom Dowling</span>
                    </div>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} Tom Dowling. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* <Link href="#" className="text-muted-foreground hover:text-rose-500">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link> */}
                        <Link href="https://github.com/TomDowling/" className="text-muted-foreground hover:text-rose-500" target="_blank">
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
        </>
    );
}
