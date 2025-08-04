"use client"

import { CardDescription } from "@/components/ui/card"
import type React from "react"
import { useState, useEffect } from "react"
import { getSupabaseClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, LogIn, LogOut } from "lucide-react"

// Define types for data
interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

interface Booking {
  id: string
  full_name: string
  email: string
  phone: string | null
  country: string | null
  tour_name: string
  preferred_dates: string
  number_of_adults: number
  number_of_children: number | null
  message: string | null
  booking_date: string
}

interface AdminUser {
  id: string
  username: string
  password_hash: string // In a real app, this would be hashed
}

export function AdminClientPage() {
  const supabase = getSupabaseClient()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [contacts, setContacts] = useState<Contact[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [dataLoading, setDataLoading] = useState(false)
  const [dataError, setDataError] = useState<string | null>(null)

  useEffect(() => {
    // Check for existing session (e.g., from local storage or cookie)
    // For this simple demo, we'll just assume no persistence unless explicitly logged in.
    // In a real app, you'd check for a session token.
    const checkAuth = async () => {
      const storedAuth = localStorage.getItem("admin_auth")
      if (storedAuth === "true") {
        setIsAuthenticated(true)
        fetchData()
      }
    }
    checkAuth()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setAuthError(null)

    try {
      // In a real application, you would hash the password on the client
      // and send the hashed password or use a secure authentication flow (e.g., JWT).
      // For this demo, we're directly querying the stored plain password.
      const { data, error } = await supabase
        .from("admin_users")
        .select("*")
        .eq("username", username)
        .eq("password_hash", password) // DANGER: Insecure for production!
        .single()

      if (error || !data) {
        setAuthError("Invalid username or password.")
        setIsAuthenticated(false)
      } else {
        setIsAuthenticated(true)
        localStorage.setItem("admin_auth", "true") // Simple auth persistence for demo
        fetchData()
      }
    } catch (err) {
      console.error("Login error:", err)
      setAuthError("An unexpected error occurred during login.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("admin_auth")
    setContacts([])
    setBookings([])
  }

  const fetchData = async () => {
    setDataLoading(true)
    setDataError(null)
    try {
      // Fetch contacts
      const { data: contactsData, error: contactsError } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })

      if (contactsError) throw contactsError
      setContacts(contactsData || [])

      // Fetch bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from("bookings")
        .select("*")
        .order("booking_date", { ascending: false })

      if (bookingsError) throw bookingsError
      setBookings(bookingsData || [])
    } catch (err: any) {
      console.error("Error fetching data:", err)
      setDataError(`Failed to load data: ${err.message || "Unknown error"}`)
    } finally {
      setDataLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-muted">
        <Card className="w-full max-w-md p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {authError && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{authError}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-muted">
      <Card className="w-full max-w-4xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Admin Panel</CardTitle>
          <CardDescription>Manage contacts and bookings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="contacts">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
            </TabsList>
            <TabsContent value="contacts">
              {dataLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading contacts...
                </div>
              ) : dataError ? (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{dataError}</AlertDescription>
                </Alert>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Created At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.subject}</TableCell>
                        <TableCell>{contact.message}</TableCell>
                        <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
            <TabsContent value="bookings">
              {dataLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading bookings...
                </div>
              ) : dataError ? (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{dataError}</AlertDescription>
                </Alert>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Tour Name</TableHead>
                      <TableHead>Preferred Dates</TableHead>
                      <TableHead>Adults</TableHead>
                      <TableHead>Children</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Booking Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.full_name}</TableCell>
                        <TableCell>{booking.email}</TableCell>
                        <TableCell>{booking.phone || "N/A"}</TableCell>
                        <TableCell>{booking.country || "N/A"}</TableCell>
                        <TableCell>{booking.tour_name}</TableCell>
                        <TableCell>{booking.preferred_dates}</TableCell>
                        <TableCell>{booking.number_of_adults}</TableCell>
                        <TableCell>{booking.number_of_children || "N/A"}</TableCell>
                        <TableCell>{booking.message || "N/A"}</TableCell>
                        <TableCell>{new Date(booking.booking_date).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
          </Tabs>
          <Button className="mt-4" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
