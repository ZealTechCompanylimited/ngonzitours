"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+255123456789" // Replace with actual WhatsApp number
    const message = "Hello! I'm interested in your tour packages. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  )
}
