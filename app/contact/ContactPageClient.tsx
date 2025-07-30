"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormValues = z.infer<typeof formSchema>

export function ContactPageClient() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setLoading(true)
    setStatus(null)
    setErrorMessage(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        const errorData = await response.json()
        setStatus("error")
        setErrorMessage(errorData.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl text-center">Contact Us</h1>
      <p className="mb-8 text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        Have questions about our tours, destinations, or anything else? We'd love to hear from you! Fill out the form
        below or reach out using the contact details provided.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>We aim to respond to all inquiries within 24-48 hours.</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" {...form.register("name")} placeholder="John Doe" className="mt-1" />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="john.doe@example.com"
                  className="mt-1"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  {...form.register("subject")}
                  placeholder="Inquiry about Safari Tour"
                  className="mt-1"
                />
                {form.formState.errors.subject && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="Type your message here..."
                  rows={5}
                  className="mt-1"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              {status === "success" && (
                <Alert>
                  <AlertTitle>Message Sent!</AlertTitle>
                  <AlertDescription>Thank you for your message. We will get back to you shortly.</AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>{errorMessage || "There was an issue sending your message."}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Our Contact Details</CardTitle>
            <CardDescription>Reach out to us directly.</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0 space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="mt-1 h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@ngonzitours.com" className="hover:underline">
                    info@ngonzitours.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">For general inquiries and bookings.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="mt-1 h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+255784123456" className="hover:underline">
                    +255 784 123 456
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Available Monday - Friday, 9 AM - 5 PM EAT.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Office Address</h3>
                <p className="text-muted-foreground">
                  Ngonzi Tours Headquarters
                  <br />
                  Arusha, Tanzania
                </p>
                <p className="text-sm text-muted-foreground">Visits by appointment only.</p>
              </div>
            </div>
            <div className="h-64 w-full rounded-lg overflow-hidden">
              {/* Placeholder for a map embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9900000000002!2d36.6821!3d-3.3868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIzJzEwLjkiUyAzNsKwNDAnNTUuNCJF!5e0!3m2!1sen!2stz!4v1678901234567!5m2!1sen!2stz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ngonzi Tours Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
