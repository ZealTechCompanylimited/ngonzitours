# Ngonzi Tours

Ngonzi Tours is a premium safari and adventure tour operator specializing in unforgettable experiences across Tanzania and Kenya. This project is a Next.js application built with Tailwind CSS and Shadcn UI, designed to showcase tour packages, destinations, and provide booking and contact functionalities.

## Features

-   **Tour Listings**: Browse various tour categories like Wildlife Safari, Mountain Climbing, Beach Holidays, and Cultural Tours.
-   **Dynamic Tour Pages**: Detailed pages for each tour with itineraries, inclusions, and pricing.
-   **Destination Guides**: Information about key destinations like Tanzania, Kenya, and Zanzibar.
-   **Blog**: A section for travel articles and tips.
-   **Contact Form**: Users can send inquiries directly from the website.
-   **Booking Form**: Users can submit tour booking requests.
-   **Admin Panel (Basic)**: A simple dashboard to view contact messages and bookings (requires authentication).
-   **Email Notifications**: Automated emails for booking confirmations (to user) and new booking/contact alerts (to admin).
-   **Supabase Integration**: Backend for storing contacts, bookings, blog posts, and tour data.
-   **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

-   **Next.js 14 (App Router)**: React framework for building full-stack web applications.
-   **React**: Frontend library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework for rapid styling.
-   **Shadcn UI**: Reusable UI components built with Radix UI and Tailwind CSS.
-   **Lucide React**: Icon library.
-   **Supabase**: Open-source Firebase alternative for database, authentication, and more.
-   **Nodemailer**: For sending emails.
-   **Zod & React Hook Form**: For form validation.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/ngonzitours.git
cd ngonzitours
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### 3. Environment Variables Setup

Create a `.env.local` file in the root of your project based on `.env.example`.

\`\`\`env
# Supabase Credentials
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY"

# Admin Panel Credentials (for basic access)
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your_secure_admin_password" # IMPORTANT: In a real app, use strong hashing for passwords!

# SMTP Email Configuration (for sending emails)
SMTP_HOST="your_smtp_host"
SMTP_PORT="your_smtp_port" # e.g., 587 for TLS, 465 for SSL
SMTP_USER="your_smtp_user"
SMTP_PASSWORD="your_smtp_password"
ADMIN_EMAIL="admin@ngonzitours.com" # Email address to receive booking/contact notifications

# Site URL (for email links)
NEXT_PUBLIC_SITE_URL="http://localhost:3000" # Change to your deployment URL in production
\`\`\`

-   **Supabase Keys**: Find these in your Supabase project settings under `API`.
    -   `NEXT_PUBLIC_SUPABASE_URL`: Project URL
    -   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `anon` public key
    -   `SUPABASE_SERVICE_ROLE_KEY`: `service_role` secret key (use with caution, keep server-side)
-   **Admin Credentials**: Set a username and a **strong password** for the basic admin panel.
-   **SMTP Configuration**:
    -   `SMTP_HOST`: Your email provider's SMTP host (e.g., `smtp.gmail.com`, `smtp.sendgrid.net`).
    -   `SMTP_PORT`: The port for your SMTP server (commonly `587` for TLS or `465` for SSL).
    -   `SMTP_USER`: Your email address for sending emails.
    -   `SMTP_PASSWORD`: The password or app-specific password for your email account.
    -   `ADMIN_EMAIL`: The email address where you want to receive notifications for new bookings and contact form submissions.
-   **NEXT_PUBLIC_SITE_URL**: Set this to your deployed website's URL when deploying to Vercel or other platforms.

### 4. Database Setup (Supabase)

This project includes a `database/schema.sql` file to set up the necessary tables in your Supabase project.

1.  **Create a new Supabase project**: Go to [Supabase](https://supabase.com/) and create a new project.
2.  **Run the setup script**:
    This script will attempt to create the tables and the `exec_sql` function (if not present) and seed an admin user.

    \`\`\`bash
    npm run db:setup
    \`\`\`

    **Important Notes for `db:setup`:**
    -   The `exec_sql` function is a powerful tool used by the script to run arbitrary SQL. In some Supabase setups, you might need to manually enable or create this function in your Supabase SQL Editor if the script encounters permission errors.
    -   If `CREATE EXTENSION pgcrypto` fails, you might need to run it manually in your Supabase SQL Editor.
    -   The `admin_users` table will be populated with the `ADMIN_USERNAME` and `ADMIN_PASSWORD` from your `.env.local` file. **For a production application, you should implement proper password hashing (e.g., using `bcrypt`) instead of storing plain passwords.**

### 5. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js App Router pages and API routes.
    -   `api/`: API routes for contact and booking submissions.
    -   `admin/`: Basic admin dashboard.
    -   `blog/`: Blog listing and individual post pages.
    -   `booking/`: Tour booking form.
    -   `contact/`: Contact form.
    -   `destinations/`: Destination guides.
    -   `tours/`: Tour listings and dynamic tour detail pages.
-   `components/`: Reusable React components.
    -   `ui/`: Shadcn UI components (modified or extended).
-   `lib/`: Utility functions and data fetching logic.
    -   `data.ts`: Dummy data and data fetching functions.
    -   `email.ts`: Nodemailer configuration and email templating.
    -   `supabase.ts`: Supabase client initialization.
-   `database/`: SQL schema for Supabase.
-   `public/`: Static assets like images and favicons.
-   `scripts/`: Node.js scripts for database setup.

## Deployment

The project can be easily deployed to Vercel. Ensure your environment variables are configured on Vercel for production deployments [^1].

## Contributing

Feel free to fork the repository and contribute!

## License

This project is open-sourced under the MIT License.
\`\`\`
