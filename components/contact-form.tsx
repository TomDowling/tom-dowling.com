"use client";

import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "react-hot-toast"; // Example for notifications, install if you want

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)
        setIsSubmitting(true);
        setSubmissionStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                // Path to your API route
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmissionStatus("success");
                // toast.success(result.message || "Message sent successfully!");
                // Optionally clear the form after successful submission
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmissionStatus("error");
                // toast.error(result.message || "Failed to send message. Please try again.");
                console.error("Form submission error:", result);
            }
        } catch (error) {
            setSubmissionStatus("error");
            // toast.error("An unexpected error occurred. Please try again later.");
            console.error("Network or unexpected error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required // Add HTML5 validation
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                </div>
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                </label>
                <Input id="subject" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600" disabled={isSubmitting}>
                {" "}
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submissionStatus === "success" && <p className="text-green-600">Your message has been sent!</p>}
            {submissionStatus === "error" && <p className="text-red-600">There was an error sending your message. Please try again.</p>}
        </form>
    );
}
