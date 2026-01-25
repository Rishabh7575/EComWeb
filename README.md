# EComWeb – Full-Stack Multi-Vendor E-commerce Platform

EComWeb is a full-stack multi-vendor e-commerce web application built using **Next.js, PostgreSQL, and Prisma**.

The project focuses on scalable architecture, secure authentication, efficient data handling, and real-world payment integration, simulating features used in modern production e-commerce platforms.

---

## Project Overview

This platform allows multiple vendors to list and manage their products, while customers can browse products, search efficiently, place orders, and complete secure payments.

It includes role-based workflows for users, vendors, and administrators, along with authentication, order tracking, and payment verification mechanisms.

> **Note:**  
> This project was initially bootstrapped from an open-source Next.js e-commerce template for UI structure and routing.  
> All backend logic, database schema design, authentication flow, payment integration, indexing strategy, and deployment configuration were implemented and customized by me.

---

## Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS

### Backend
- Next.js API Routes (Node.js runtime)

### Database
- PostgreSQL (Neon – serverless)
- Prisma ORM

### Authentication
- Clerk
- OTP-based verification (Two-Factor Authentication)

### Payments
- Razorpay (Test Mode)
- Webhook-based order verification

### Deployment
- Vercel

### Tools & Services
- Git & GitHub
- VS Code
- Prisma Studio
- Neon Database Console

---

## Key Features

- Multi-vendor product listing and management  
- Secure user authentication with OTP-based 2FA  
- Optimized product search using database indexing  
- Razorpay payment integration with webhook handling  
- Admin and vendor dashboards  
- Order management and payment status tracking  
- Responsive UI for desktop and mobile  
- Production-ready deployment on Vercel  

---

## Architecture Overview

- **Frontend:** Built using Next.js pages and components for fast rendering and SEO-friendly routing  
- **Backend:** REST-style APIs implemented using Next.js API routes  
- **Database Layer:** PostgreSQL accessed using Prisma ORM  
- **Authentication:** Handled via Clerk with OTP verification  
- **Payments:** Razorpay checkout flow + server-side webhook verification  
- **Deployment:** Hosted on Vercel with environment-based configuration

---

## My Contributions

The following components were designed, implemented, or significantly customized by me:

- Integrated **Razorpay payment gateway** and implemented webhook listeners for secure order verification and status updates  
- Implemented **OTP-based two-factor authentication (2FA)** to improve account security  
- Designed relational **PostgreSQL schema** using Prisma and optimized queries  
- Added **database indexing** to improve product search and filtering performance  
- Developed **vendor and admin workflows** for managing products and orders  
- Configured environment variables and Prisma migrations  
- Debugged API routes and stabilized the application for production deployment  
- Structured the codebase to improve scalability and maintainability  

---

## Setup Instructions (Optional)

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
