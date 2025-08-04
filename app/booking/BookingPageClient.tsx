"use client"

import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarIcon,
  Users,
  MessageSquare,
  Star,
  Shield,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Heart,
  Globe,
  Camera,
  Mountain,
  Waves,
  Crown,
  Compass,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select your country"),
  tourType: z.string().min(1, "Please select a tour type"),
  preferredDate: z.date({
    required_error: "Please select your preferred travel date",
  }),
  numberOfPeople: z.number().min(1, "At least 1 person is required").max(20, "Maximum 20 people allowed"),
  budget: z.string().min(1, "Please select your budget range"),
  specialRequests: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Austria",
  "Belgium",
  "Italy",
  "Spain",
  "Japan",
  "South Korea",
  "Singapore",
  "Other",
]

const tourTypes = [
  {
    value: "wildlife-safari",
    label: "Wildlife Safari Adventure",
    description: "Witness the Great Migration and the Big Five",
    icon: <Camera className="h-4 w-4" />,
    duration: "5-7 days",
    price: "From $1,200",
  },
  {
    value: "mountain-climbing",
    label: "Mount Kilimanjaro Climbing",
    description: "Conquer Africa's highest peak",
    icon: <Mountain className="h-4 w-4" />,
    duration: "6-8 days",
    price: "From $2,500",
  },
  {
    value: "beach-holidays",
    label: "Zanzibar Beach Holiday",
    description: "Relax on pristine white-sand beaches",
    icon: <Waves className="h-4 w-4" />,
    duration: "4-6 days",
    price: "From $1,500",
  },
  {
    value: "cultural-tours",
    label: "Cultural Tours & Experiences",
    description: "Immerse yourself in local cultures",
    icon: <Compass className="h-4 w-4" />,
    duration: "3-5 days",
    price: "From $800",
  },
  {
    value: "luxury-safari",
    label: "Luxury Safari Experience",
    description: "Indulge in exclusive African adventures",
    icon: <Crown className="h-4 w-4" />,
    duration: "5-7 days",
    price: "From $3,800",
  },
]

const budgetRanges = [
  "$1,000 - $2,500 per person",
  "$2,500 - $5,000 per person",
  "$5,000 - $10,000 per person",
  "$10,000+ per person",
]

export function BookingPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedTour, setSelectedTour] = useState<any>(null)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    control,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      tourType: "",
      numberOfPeople: 2,
      budget: "",
      specialRequests: "",
    },
  })

  const watchedTourType = watch("tourType")
  const watchedDate = watch("preferredDate")
  const watchedCountry = watch("country")
  const watchedBudget = watch("budget")

  React.useEffect(() => {
    if (watchedTourType) {
      const tour = tourTypes.find((t) => t.value === watchedTourType)
      setSelectedTour(tour)
    }
  }, [watchedTourType])

  const onSubmit = async (data: BookingFormData) => {
    console.log("Form submitted with data:", data)
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Show loading toast
    toast({
      title: "Processing your request...",
      description: "Please wait while we submit your booking request.",
      duration: 2000,
    })

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          country: data.country,
          tourName: selectedTour?.label || data.tourType,
          preferredDates: format(data.preferredDate, "PPP"),
          numberOfAdults: data.numberOfPeople,
          numberOfChildren: 0,
          message: `Budget: ${data.budget}. ${data.specialRequests || ""}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        toast({
          title: "🎉 Booking Request Submitted Successfully!",
          description:
            "Thank you! Our travel experts will contact you within 24 hours to discuss your personalized itinerary.",
          duration: 6000,
        })
        reset()
        setSelectedTour(null)
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        toast({
          title: "❌ Submission Failed",
          description: errorData.error || "There was an error submitting your request. Please try again.",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("Booking submission error:", error)
      setSubmitStatus("error")
      toast({
        title: "🚫 Network Error",
        description: "Unable to submit your request. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CalendarIcon className="h-4 w-4" />
              Book Your Adventure
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Start Your African Journey</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our expert travel consultants will create a personalized itinerary just for
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <User className="h-6 w-6" />
                    Booking Information
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Please provide your details to help us create the perfect adventure for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="firstName"
                              {...register("firstName")}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Enter your first name"
                            />
                          </div>
                          {errors.firstName && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="lastName"
                              {...register("lastName")}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Enter your last name"
                            />
                          </div>
                          {errors.lastName && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              {...register("email")}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="your.email@example.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              {...register("phone")}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                          Country <span className="text-red-500">*</span>
                        </Label>
                        <Controller
                          name="country"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-gray-400" />
                                  <SelectValue placeholder="Select your country" />
                                </div>
                              </SelectTrigger>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.country && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <Separator />

                    {/* Tour Selection Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Camera className="h-4 w-4 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Tour Selection</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="tourType" className="text-sm font-medium text-gray-700">
                            Tour Type <span className="text-red-500">*</span>
                          </Label>
                          <Controller
                            name="tourType"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                  <SelectValue placeholder="Choose your adventure" />
                                </SelectTrigger>
                                <SelectContent>
                                  {tourTypes.map((tour) => (
                                    <SelectItem key={tour.value} value={tour.value}>
                                      <div className="flex items-center gap-2">
                                        {tour.icon}
                                        {tour.label}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.tourType && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.tourType.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">
                            Preferred Travel Date <span className="text-red-500">*</span>
                          </Label>
                          <Controller
                            name="preferredDate"
                            control={control}
                            render={({ field }) => (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "h-12 w-full justify-start text-left font-normal border-gray-200 focus:border-blue-500 focus:ring-blue-500",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                                    {field.value ? format(field.value, "PPP") : "Pick a date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            )}
                          />
                          {errors.preferredDate && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.preferredDate.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="numberOfPeople" className="text-sm font-medium text-gray-700">
                            Number of Travelers <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="numberOfPeople"
                              type="number"
                              min="1"
                              max="20"
                              {...register("numberOfPeople", { valueAsNumber: true })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="2"
                            />
                          </div>
                          {errors.numberOfPeople && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.numberOfPeople.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                            Budget Range <span className="text-red-500">*</span>
                          </Label>
                          <Controller
                            name="budget"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                  <SelectValue placeholder="Select your budget" />
                                </SelectTrigger>
                                <SelectContent>
                                  {budgetRanges.map((range) => (
                                    <SelectItem key={range} value={range}>
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.budget && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.budget.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Selected Tour Preview */}
                      {selectedTour && (
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Selected Tour
                          </h4>
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-900">{selectedTour.label}</h5>
                              <p className="text-sm text-gray-600 mt-1">{selectedTour.description}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                  {selectedTour.duration}
                                </Badge>
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  {selectedTour.price}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Additional Information Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
                          Special Requests or Dietary Requirements
                        </Label>
                        <Textarea
                          id="specialRequests"
                          {...register("specialRequests")}
                          className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Please let us know about any dietary restrictions, accessibility needs, special occasions, or other requests..."
                        />
                        <p className="text-xs text-gray-500">
                          Optional: Help us make your trip perfect by sharing any special requirements.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting Your Request...
                          </>
                        ) : (
                          <>
                            <Heart className="mr-2 h-5 w-5" />
                            Submit Booking Request
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <Alert className="border-green-200 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          <strong>Thank you!</strong> Your booking request has been submitted successfully. Our travel
                          experts will contact you within 24 hours to discuss your personalized itinerary.
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === "error" && (
                      <Alert className="border-red-200 bg-red-50">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800">
                          <strong>Oops!</strong> There was an error submitting your request. Please try again or contact
                          us directly at info@ngonzitours.com.
                        </AlertDescription>
                      </Alert>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Book With Us */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-green-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Why Book With Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 mt-0.5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">Expert Local Guides</h4>
                      <p className="text-sm text-blue-100">15+ years of experience in African tourism</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 mt-0.5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">5-Star Rated Service</h4>
                      <p className="text-sm text-blue-100">4.9/5 rating from 5,000+ happy travelers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 mt-0.5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">Fully Licensed & Insured</h4>
                      <p className="text-sm text-blue-100">Complete peace of mind for your journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5 text-yellow-300" />
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm text-blue-100">Round-the-clock assistance during your trip</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Need Help?
                  </CardTitle>
                  <CardDescription>Our travel experts are here to assist you</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+255 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Mail className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">info@ngonzitours.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">Office Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM EAT</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Trusted by 5,000+ Travelers</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Join thousands of satisfied customers who have experienced the magic of Africa with us.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">15+</p>
                      <p className="text-xs text-gray-600">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">100%</p>
                      <p className="text-xs text-gray-600">Satisfaction Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}
