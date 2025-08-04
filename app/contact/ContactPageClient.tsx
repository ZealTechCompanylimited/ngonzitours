"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Shield, Users, Award, Globe, Heart } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const interests = [
  "Wildlife Safari",
  "Mountain Climbing",
  "Beach Holiday",
  "Cultural Tours",
  "Photography Safari",
  "Luxury Safari",
  "Budget Safari",
  "Family Safari",
  "Honeymoon Package",
  "Group Tours",
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed tour operator with comprehensive insurance coverage",
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Professional guides with deep knowledge of wildlife and culture",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in sustainable tourism practices",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description: "Committed to conservation and community development",
  },
]

function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interests: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          interests: [],
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Contacting Us!</h1>
              <p className="text-lg text-gray-600 mb-8">
                We've received your message and will get back to you within 24 hours. Our team is excited to help you
                plan your perfect East African adventure!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
                  Send Another Message
                </Button>
                <Button size="lg" asChild>
                  <a href="/tours">Browse Our Tours</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-green-700 to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to embark on your East African adventure? We're here to help you plan the perfect safari, climb, or
            cultural experience.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Star className="h-5 w-5 fill-current" />
            <span>Trusted by 10,000+ travelers</span>
            <Star className="h-5 w-5 fill-current" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Tell us about your dream adventure and we'll create a personalized itinerary for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="What can we help you with?"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700">
                      What interests you? (Select all that apply)
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge
                          key={interest}
                          variant={formData.interests.includes(interest) ? "default" : "outline"}
                          className={`cursor-pointer transition-all hover:scale-105 ${
                            formData.interests.includes(interest)
                              ? "bg-green-600 hover:bg-green-700"
                              : "hover:bg-green-50 hover:border-green-300"
                          }`}
                          onClick={() => handleInterestToggle(interest)}
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      placeholder="Tell us about your dream adventure... When would you like to travel? How many people? Any special requirements?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+255 123 456 789</p>
                    <p className="text-gray-600">+254 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@ngonzitours.com</p>
                    <p className="text-gray-600">bookings@ngonzitours.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      Arusha, Tanzania
                      <br />
                      Near Kilimanjaro Airport
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: 9:00 AM - 4:00 PM
                      <br />
                      <span className="text-sm text-green-600 font-medium">Emergency support 24/7</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-600 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Why Choose Ngonzi Tours?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="shadow-xl border-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Response Guarantee</h3>
                <p className="text-sm opacity-90">We respond to all inquiries within 24 hours, usually much sooner!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick responses and easy communication</p>
                <Button variant="outline" className="w-full bg-transparent">
                  <a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Detailed inquiries and documentation</p>
                <Button variant="outline" className="w-full bg-transparent">
                  <a href="mailto:info@ngonzitours.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                <p className="text-gray-600 mb-4">Meet us in person in Arusha</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPageClient
