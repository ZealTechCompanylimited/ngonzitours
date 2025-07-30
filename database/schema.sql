-- Enable pgcrypto for uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for tour bookings
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tour_name VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    country VARCHAR(100),
    travel_date DATE NOT NULL,
    number_of_adults INT NOT NULL,
    number_of_children INT DEFAULT 0,
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- e.g., 'pending', 'confirmed', 'cancelled'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    author VARCHAR(255) NOT NULL,
    publish_date DATE NOT NULL,
    category VARCHAR(100),
    image_url TEXT,
    excerpt TEXT,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for tours (if you want to manage them in DB)
CREATE TABLE IF NOT EXISTS tours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    category VARCHAR(100),
    price_per_person NUMERIC(10, 2) NOT NULL,
    duration_days INT NOT NULL,
    group_size VARCHAR(100),
    location VARCHAR(255),
    rating NUMERIC(2, 1),
    reviews_count INT DEFAULT 0,
    highlights TEXT[], -- Array of strings
    itinerary JSONB, -- Store as JSON array of objects
    inclusions TEXT[], -- Array of strings
    exclusions TEXT[], -- Array of strings
    images TEXT[], -- Array of image URLs
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for admin users (for a simple admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL, -- Store hashed passwords, NOT plain text
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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
