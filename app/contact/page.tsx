// app/contact/page.tsx
"use client"; // Required for hooks and interactivity

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Using Sonner for toast notifications

// Define Zod schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log("Contact Page Form Data:", values);
    try {
      // ** TODO: Replace with your actual API endpoint call **
      // Example: Send data to a serverless function or API route
      // const response = await fetch('/api/contact', { // Example API route
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });
      // if (!response.ok) {
      //    const errorData = await response.json();
      //    throw new Error(errorData.message || 'Failed to send message');
      // }

      // Simulate success for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      toast.success("Message Sent!", {
        description: "Thank you for contacting us. We'll be in touch shortly.",
        duration: 5000, // Show for 5 seconds
      });
      form.reset(); // Reset form fields on successful submission
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission Failed", {
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <>
      {/* Contact Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-parascap-green text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss how we can help your
                business grow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Contact Info Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-parascap-darkGray dark:text-gray-50">
                Get in Touch
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Reach out via the form or use our contact details below. We look
                forward to hearing from you.
              </p>
              <div className="space-y-4 text-parascap-darkGray dark:text-gray-300">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-parascap-green shrink-0" />
                  <div>
                    <span className="font-medium">Email</span>
                    <br />
                    <a
                      href="mailto:info@parascapventures.com"
                      className="hover:underline hover:text-parascap-green"
                    >
                      info@parascapventures.com
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-parascap-green shrink-0" />
                  <div>
                    <span className="font-medium">Phone</span>
                    <br />
                    <a
                      href="tel:+911234567890"
                      className="hover:underline hover:text-parascap-green"
                    >
                      +91 123 456 7890
                    </a>{" "}
                    {/* Replace number */}
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-parascap-green shrink-0" />
                  <div>
                    <span className="font-medium">Address</span>
                    <br />
                    <span>
                      123 Business Street, New Delhi, 110001, India
                    </span>{" "}
                    {/* Replace address */}
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 mt-1 text-parascap-green shrink-0" />
                  <div>
                    <span className="font-medium">LinkedIn</span>
                    <br />
                    <a
                      href="https://linkedin.com/company/parascap-ventures" // Replace with actual URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-parascap-green"
                    >
                      Follow Parascap Ventures
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-parascap-darkGray dark:text-gray-50 mb-4">
                Send Us a Message
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              className="dark:bg-gray-950 dark:border-gray-800"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your Email"
                              {...field}
                              className="dark:bg-gray-950 dark:border-gray-800"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject of your message"
                            {...field}
                            className="dark:bg-gray-950 dark:border-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            rows={5}
                            {...field}
                            className="dark:bg-gray-950 dark:border-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-parascap-green text-white hover:bg-parascap-green/90"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-parascap-darkGray dark:text-gray-50">
                Book a Consultation
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Schedule a free consultation with our experts to discuss your
                business needs in detail.
              </p>
            </div>
            {/* TODO: Link this button to a Calendly or scheduling tool */}
            <Button className="bg-parascap-darkGray text-white hover:bg-black/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
              Schedule Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
