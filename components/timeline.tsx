import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

type WorkExperience = {
    company: string;
    position: string;
    dateRange: string;
    responsibilities: string[];
};

export function TimelineA() {
    // Replace with your actual work experience
    const experiences: WorkExperience[] = [
        {
            company: "Acme Corporation",
            position: "Senior Software Engineer",
            dateRange: "Jan 2020 - Present",
            responsibilities: [
                "Led the development of a new customer-facing application that increased user engagement by 35%",
                "Mentored junior developers and conducted code reviews to maintain high code quality standards",
                "Implemented CI/CD pipelines that reduced deployment time by 40% and improved overall system reliability"
            ]
        },
        {
            company: "Tech Innovations Inc.",
            position: "Software Developer",
            dateRange: "Mar 2017 - Dec 2019",
            responsibilities: [
                "Developed and maintained RESTful APIs serving over 10,000 daily active users",
                "Collaborated with cross-functional teams to deliver features on time and within scope",
                "Optimized database queries resulting in a 25% improvement in application performance"
            ]
        },
        {
            company: "Digital Solutions LLC",
            position: "Junior Developer",
            dateRange: "Jun 2015 - Feb 2017",
            responsibilities: [
                "Assisted in the development of responsive web applications using React and Node.js",
                "Participated in daily stand-ups and sprint planning to ensure project milestones were met",
                "Debugged and fixed issues in legacy code, improving system stability by 15%"
            ]
        }
    ];

    return (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start md:justify-center">
                    <div className="absolute left-0 md:left-1/2 ml-2 md:-ml-3 mt-7 h-6 w-6 rounded-full border-4 border-white bg-primary shadow-md" />

                    <Card
                        className={`w-full md:w-[calc(50%-2rem)] ${
                            index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        } shadow-md hover:shadow-lg transition-shadow duration-300`}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl font-bold text-primary">{experience.company}</CardTitle>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{experience.dateRange}</span>
                                </Badge>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-medium">{experience.position}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {experience.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export function Timeline() {
    const experiences: WorkExperience[] = [
        {
            company: "Cerberus Tech",
            position: "Senior Frontend Developer",
            dateRange: "Mar 2024 - Present",
            responsibilities: [
                "Developing and maintaining the frontend application",
                "Helping to standardize the codebase and improve the workflow",
                "Working on a large scale enterprise application"
            ]
        },
        {
            company: "HonkHonk",
            position: "Frontend Lead",
            dateRange: "Aug 2023 - Feb 2024",
            responsibilities: [
                "Building multiple brand new applications",
                "Leading the UI/UX for the development team",
                "Pushing web standards and performance in the frontend space"
            ]
        },
        {
            company: "daily.dev",
            position: "Senior Frontend Developer",
            dateRange: "Apr 2023 - Aug 2023",
            responsibilities: [
                "Working on the React application",
                "Helping to define and improve standards",
                "Pushing features quickly and efficiently to a high quality"
            ]
        },
        {
            company: "Wordshop",
            position: "Senior Frontend Developer",
            dateRange: "Aug 2022 - Apr 2023",
            responsibilities: [
                "Leading the frontend team, including setting the coding standards and guidelines",
                "Working closely with designers to improve workflow",
                "Learning the whole tech stack and making improvements to push frontend development forward"
            ]
        },
        {
            company: "Spike Global Ltd",
            position: "Frontend Developer",
            dateRange: "Sep 2019 - Aug 2022",
            responsibilities: [
                "Refactoring and developing the current framework (AngularJS and LESS)",
                "Helping to plan and execute migration to a new service using React",
                "Using TypeScript on a daily basis with both Angular and React applications"
            ]
        },
        {
            company: "LV=",
            position: "Frontend Developer",
            dateRange: "Apr 2018 - Sep 2019",
            responsibilities: [
                "Working on Quote and Buy Applications using JavaScript and SASS",
                "Working in an agile workflow for a large organization",
                "Refactoring the JavaScript solution and building up frontend documentation"
            ]
        },
        {
            company: "Moore-Wilson",
            position: "Frontend Developer",
            dateRange: "Oct 2015 - Apr 2018",
            responsibilities: [
                "Started as an Apprentice and worked up to a Technical Project Manager",
                "Working on Drupal Applications using PHP & SASS primarily",
                "Managing and building sites through the whole development cycle"
            ]
        }
    ];

    return (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-300 before:to-transparent">
            {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start md:justify-center">
                    <div className="absolute left-0 md:left-1/2 ml-2 md:-ml-3 mt-7 h-6 w-6 rounded-full border-4 border-white bg-rose-500 shadow-md" />

                    <Card
                        className={`w-full md:w-[calc(50%-2rem)] ${
                            index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        } shadow-md hover:shadow-lg transition-shadow duration-300`}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl font-bold text-rose-500">{experience.company}</CardTitle>
                                <Badge variant="outline" className="flex items-center gap-1 border-rose-200 text-rose-700 bg-rose-50">
                                    <Calendar className="h-3 w-3" />
                                    <span>{experience.dateRange}</span>
                                </Badge>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <Briefcase className="h-4 w-4 text-rose-500" />
                                <span className="font-medium">{experience.position}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {experience.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}
