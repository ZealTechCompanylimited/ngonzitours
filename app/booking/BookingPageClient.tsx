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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  country: z.string().optional(),
  tourName: z.string().min(1, { message: "Please select a tour or enter a custom tour name." }),
  preferredDates: z.date({ required_error: "Preferred dates are required." }),
  numberOfAdults: z
    .string()
    .regex(/^\d+$/, { message: "Must be a number." })
    .transform(Number)
    .pipe(z.number().min(1, { message: "At least 1 adult is required." })),
  numberOfChildren: z.string().regex(/^\d*$/, { message: "Must be a number." }).transform(Number).optional(),
  message: z.string().optional(),
})

type BookingFormValues = z.infer<typeof formSchema>

// Dummy list of tours - replace with actual data from your tours page or API
const availableTours = [
  "Classic Wildlife Safari",
  "Kilimanjaro Trek: Machame Route",
  "Zanzibar Beach Escape",
  "Authentic Cultural Immersion",
  "Ultimate Luxury Safari",
  "Other (please specify in message)",
]

export function BookingPageClient() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      tourName: "",
      numberOfAdults: 1,
      numberOfChildren: 0,
      message: "",
    },
  })

  async function onSubmit(values: BookingFormValues) {
    setLoading(true)
    setStatus(null)
    setErrorMessage(null)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          preferredDates: format(values.preferredDates, "PPP"), // Format date for sending
        }),
      })

      if (response.ok) {
        setStatus("success")
        form.reset({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          tourName: "",
          preferredDates: undefined,
          numberOfAdults: 1,
          numberOfChildren: 0,
          message: "",
        })
      } else {
        const errorData = await response.json()
        setStatus("error")
        setErrorMessage(errorData.error || "Failed to submit booking. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting booking form:", error)
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl text-center">Book Your Adventure</h1>
      <p className="mb-8 text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        Ready to embark on an unforgettable journey? Fill out the form below to start planning your dream tour with
        Ngonzi Tours.
      </p>

      <Card className="max-w-3xl mx-auto p-6">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-2xl">Booking Inquiry Form</CardTitle>
          <CardDescription>Provide your details and preferred tour information.</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...form.register("fullName")} placeholder="John Doe" className="mt-1" />
              {form.formState.errors.fullName && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  placeholder="+255 7XX XXX XXX"
                  className="mt-1"
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="country">Country of Residence (Optional)</Label>
                <Input id="country" {...form.register("country")} placeholder="United States" className="mt-1" />
                {form.formState.errors.country && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.country.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="tourName">Interested Tour</Label>
              <Select onValueChange={(value) => form.setValue("tourName", value)} value={form.watch("tourName")}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select a tour" />
                </SelectTrigger>
                <SelectContent>
                  {availableTours.map((tour) => (
                    <SelectItem key={tour} value={tour}>
                      {tour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.tourName && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.tourName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="preferredDates">Preferred Travel Dates</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !form.watch("preferredDates") && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {form.watch("preferredDates") ? (
                      format(form.watch("preferredDates"), "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={form.watch("preferredDates")}
                    onSelect={(date) => form.setValue("preferredDates", date!)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {form.formState.errors.preferredDates && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.preferredDates.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="numberOfAdults">Number of Adults</Label>
                <Input
                  id="numberOfAdults"
                  type="number"
                  {...form.register("numberOfAdults")}
                  min={1}
                  className="mt-1"
                />
                {form.formState.errors.numberOfAdults && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.numberOfAdults.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="numberOfChildren">Number of Children (0-12 years, optional)</Label>
                <Input
                  id="numberOfChildren"
                  type="number"
                  {...form.register("numberOfChildren")}
                  min={0}
                  className="mt-1"
                />
                {form.formState.errors.numberOfChildren && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.numberOfChildren.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Additional Message / Special Requests (Optional)</Label>
              <Textarea
                id="message"
                {...form.register("message")}
                placeholder="e.g., dietary restrictions, specific interests, preferred accommodation type..."
                rows={4}
                className="mt-1"
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>
            {status === "success" && (
              <Alert>
                <AlertTitle>Booking Submitted!</AlertTitle>
                <AlertDescription>
                  Thank you for your booking inquiry. We will contact you shortly to finalize the details.
                </AlertDescription>
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="destructive">
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{errorMessage || "There was an issue submitting your booking."}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Booking Inquiry"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
