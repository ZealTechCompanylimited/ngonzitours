-- Enable pgcrypto for uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for tour bookings
CREATE TABLE IF NOT EXISTS bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100),
    tour_name VARCHAR(255) NOT NULL,
    preferred_dates TEXT NOT NULL,
    number_of_adults INTEGER NOT NULL DEFAULT 1,
    number_of_children INTEGER DEFAULT 0,
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    author VARCHAR(255),
    author_bio TEXT,
    author_image VARCHAR(255),
    featured_image VARCHAR(255),
    category VARCHAR(100),
    tags TEXT[],
    published BOOLEAN DEFAULT FALSE,
    featured BOOLEAN DEFAULT FALSE,
    reading_time INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- Table for tours (if you want to manage them in DB)
CREATE TABLE IF NOT EXISTS tours (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    price_from DECIMAL(10,2),
    duration VARCHAR(100),
    difficulty VARCHAR(50),
    group_size VARCHAR(50),
    highlights TEXT[],
    inclusions TEXT[],
    exclusions TEXT[],
    itinerary JSONB,
    images TEXT[],
    featured BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for destinations
CREATE TABLE IF NOT EXISTS destinations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    country VARCHAR(100),
    highlights TEXT[],
    best_time_to_visit TEXT,
    climate TEXT,
    culture TEXT,
    images TEXT[],
    featured BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for admin users (for a simple admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- In production, use proper password hashing
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Function to execute arbitrary SQL (for setup script)
-- WARNING: This function is powerful and should be used with extreme caution
-- and ideally removed or restricted in production environments.
CREATE OR REPLACE FUNCTION exec_sql(sql TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    EXECUTE sql;
END;
$$;

-- Insert sample admin user (password: admin123)
INSERT INTO admin_users (username, email, password) 
VALUES ('admin', 'admin@ngonzitours.com', 'admin123')
ON CONFLICT (username) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_tours_slug ON tours(slug);
CREATE INDEX IF NOT EXISTS idx_tours_featured ON tours(featured);
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_destinations_featured ON destinations(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security (RLS)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to tours, destinations, and published blog posts
CREATE POLICY "Allow public read access to tours" ON tours FOR SELECT USING (active = true);
CREATE POLICY "Allow public read access to destinations" ON destinations FOR SELECT USING (active = true);
CREATE POLICY "Allow public read access to published blog posts" ON blog_posts FOR SELECT USING (published = true);

-- Create policies for public insert access to bookings and contacts
CREATE POLICY "Allow public insert to bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Add some sample data for testing (optional)
INSERT INTO bookings (full_name, email, phone, country, tour_name, preferred_dates, number_of_adults, number_of_children, message, status)
VALUES 
    ('John Doe', 'john@example.com', '+1234567890', 'USA', 'Wildlife Safari Adventure', '2024-03-15 to 2024-03-20', 2, 1, 'Looking forward to this amazing adventure!', 'pending'),
    ('Jane Smith', 'jane@example.com', '+0987654321', 'UK', 'Mount Kilimanjaro Climbing', '2024-04-10 to 2024-04-18', 1, 0, 'First time climbing, very excited!', 'confirmed')
ON CONFLICT DO NOTHING;

INSERT INTO contacts (name, email, subject, message, status)
VALUES 
    ('Alice Johnson', 'alice@example.com', 'Question about safari tours', 'Hi, I would like to know more about your safari packages for families.', 'new'),
    ('Bob Wilson', 'bob@example.com', 'Booking inquiry', 'Can you help me plan a 10-day tour of Tanzania?', 'replied')
ON CONFLICT DO NOTHING;
