import type { Metadata } from "next"
import { AdminClientPage } from "./AdminClientPage"

export const metadata: Metadata = {
  title: "Admin Panel - Ngonzi Tours",
  description: "Admin panel for managing Ngonzi Tours bookings, contacts, and content.",
}

export default function AdminPage() {
  return <AdminClientPage />
}
