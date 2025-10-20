"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/Types/form-schema";
import { send } from "@/lib/resend";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import z from "zod";
import Blureffect from "./blureffect";
import Pattern from "./pattern";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      subject: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await send(values);

      setShowSuccess(true);

      form.reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-5 px-4 overflow-hidden">
      {/* Background Effects */}
      <Blureffect />

      <div className="relative z-10 max-w-6xl mx-auto" id="contact">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 py-2 leading-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas
            to life.
          </p>
        </div>

        {/* Success Alert - Moved outside grid for better positioning */}
        {showSuccess && (
          <div className="mb-8">
            <Alert className="bg-green-500/10 border-green-500/20 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Thank you for your message! I&apos;ll get back to you as soon as
                possible.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information - Takes 1 column on large screens */}
          <div className="space-y-6">
            <Card className="bg-card/10 backdrop-blur-lg border-primary/20 hover:border-primary/40 active:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 active:shadow-lg active:shadow-primary/20 h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Contact Info
                </CardTitle>
                <CardDescription className="text-card-foreground/80">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {/* Email */}
                <a
                  className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 active:bg-primary/20 active:scale-95 transition-all duration-200 touch-manipulation"
                  href="mailto: raylak82@gmail.com"
                >
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="text-foreground font-medium">
                      raylak82@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 active:bg-primary/20 active:scale-95 transition-all duration-200 touch-manipulation"
                  href="tel:+923342633756"
                >
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <p className="text-foreground font-medium">
                      +92-3342633756
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 active:bg-primary/20 active:scale-95 transition-all duration-200 touch-manipulation">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p className="text-foreground font-medium">Pakistan</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    size="icon"
                    className="rounded-lg bg-foreground/105 border-foreground/20 hover:bg-foreground/20 hover:border-foreground/40 hover:scale-110 active:scale-95 active:bg-foreground/30 active:border-foreground/60 transition-all duration-200 touch-manipulation"
                    onClick={() =>
                      window.open("https://github.com/rayyanlakhani", "_blank")
                    }
                  >
                    <LuGithub className="size-5 text-foreground" />
                  </Button>
                  <Button
                    size="icon"
                    className="rounded-lg bg-foreground/105 border-foreground/20 hover:bg-foreground/20 hover:border-foreground/40 hover:scale-110 active:scale-95 active:bg-foreground/30 active:border-foreground/60 transition-all duration-200 touch-manipulation"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/rayyanlakhani",
                        "_blank"
                      )
                    }
                  >
                    <CiLinkedin className="size-5 text-foreground" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Card className="space-y-6 bg-card/10 backdrop-blur-lg border-foreground/20 hover:border-foreground/40 active:border-foreground/60 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/10 active:shadow-lg active:shadow-foreground/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Message
                </CardTitle>
                <CardDescription className="text-card-foreground/80">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="fullname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">
                                Full Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Full Name"
                                  {...field}
                                  className="bg-background/30 border-border placeholder:text-foreground/40 focus:border-primary active:border-primary/80 active:bg-background/40 transition-colors duration-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Email"
                                  {...field}
                                  className="bg-background/30 border-border placeholder:text-foreground/40 focus:border-primary active:border-primary/80 active:bg-background/40 transition-colors duration-200"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Subject
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject"
                                {...field}
                                className="bg-background/30 border-border placeholder:text-foreground/40 focus:border-primary active:border-primary/80 active:bg-background/40 transition-colors duration-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What do you want to talk about?"
                                {...field}
                                className="bg-background/30 border-border placeholder:text-foreground/40 focus:border-primary active:border-primary/80 active:bg-background/40 transition-colors duration-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group bg-primary text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 active:shadow-lg active:shadow-primary/60 active:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 size-5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-0" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <Pattern />
    </section>
  );
}
