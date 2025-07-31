# HotelPro Management System

## Overview

HotelPro is a comprehensive hotel management system built with a modern full-stack architecture. The application provides features for room management, guest management, reservations, check-in/check-out processes, and billing/invoicing. It's designed as a single-page application with a responsive interface suitable for hotel staff operations.

## User Preferences

Preferred communication style: Simple, everyday language.
Interface Language: Arabic with RTL (right-to-left) layout support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Data Storage**: PostgreSQL database with Drizzle ORM (DatabaseStorage class)
- **Session Management**: Express sessions with PostgreSQL session store configuration

### Build System
- **Bundler**: Vite for frontend development and building
- **Development**: Hot module replacement with Vite dev server
- **Production**: Static file serving with Express
- **TypeScript**: Full TypeScript support across client and server

## Key Components

### Database Schema (Drizzle ORM)
The application uses Drizzle ORM with PostgreSQL as the target database:

- **Rooms**: Manages hotel room information (number, floor, type, status, pricing, capacity, amenities)
- **Guests**: Stores guest information (personal details, contact information)
- **Reservations**: Handles booking data (guest-room relationships, dates, status, amounts)
- **Invoices**: Manages billing information linked to reservations

### API Endpoints
RESTful API structure with CRUD operations for:
- `/api/rooms` - Room management operations
- `/api/guests` - Guest management operations  
- `/api/reservations` - Reservation management operations
- `/api/invoices` - Invoice management operations
- `/api/dashboard/stats` - Dashboard statistics

### UI Components
- **Dashboard**: Real-time hotel overview with occupancy statistics
- **Room Management**: Visual room status grid with management capabilities
- **Guest Management**: Guest information CRUD operations
- **Reservations**: Booking management with date handling
- **Check-in/Check-out**: Workflow management for guest arrivals/departures
- **Billing**: Invoice generation and payment tracking

### Shared Schema
Type-safe schema definitions shared between client and server using Drizzle's schema definitions and Zod validation schemas.

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle requests with validation
3. **Business Logic**: Storage layer (currently in-memory) processes operations
4. **Response Handling**: Type-safe responses flow back to React components
5. **UI Updates**: TanStack Query manages cache invalidation and UI updates

The application uses optimistic updates and proper error handling throughout the data flow.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection (configured for production)
- **@tanstack/react-query**: Server state management
- **@radix-ui/\***: Accessible UI primitive components
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **drizzle-orm**: Type-safe database operations
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code

## Deployment Strategy

### Development
- **Server**: Node.js with tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: PostgreSQL (configured but using in-memory storage for development)

### Production Build
- **Client**: Static files built with Vite, served by Express
- **Server**: Bundled with esbuild for efficient execution
- **Database**: PostgreSQL with Drizzle migrations
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Environment Configuration
- Uses `DATABASE_URL` environment variable for PostgreSQL connection
- Separate build processes for client and server code
- Production-ready error handling and logging

The application is structured for easy deployment to platforms like Replit, with proper environment variable handling and build processes optimized for cloud deployment.

## Recent Changes

### Database Integration (January 30, 2025)
- Replaced in-memory storage with PostgreSQL database
- Implemented DatabaseStorage class using Drizzle ORM
- Added database connection configuration with Neon serverless PostgreSQL
- Created and pushed database schema with all tables (rooms, guests, reservations, invoices)
- Seeded database with sample room data for demonstration
- All CRUD operations now persist to database instead of memory

### Arabic Localization (January 30, 2025)
- Translated entire user interface to Arabic language
- Implemented RTL (right-to-left) layout support with custom CSS
- Updated all page headers, navigation menus, form labels, and user-facing text
- Added dir="rtl" attribute to main container for proper Arabic text rendering
- Modified CSS with RTL-specific styling for proper Arabic layout
- Maintained full functionality while providing Arabic interface

### Desktop Application (January 30, 2025)
- Created Windows desktop application using Electron framework
- Added desktop launcher files (BAT, PowerShell, HTML)
- Implemented standalone application with embedded server
- Created comprehensive Windows setup guide and documentation
- Added Arabic menu support for desktop application
- Generated packaged version for easy distribution