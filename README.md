# EComWeb – Multi-Vendor E-Commerce Platform

EComWeb is a full-stack multi-vendor e-commerce web application built using the MERN stack.  
The project focuses on scalable architecture, secure authentication, efficient data handling, and real-world payment integration.

> **Note:** This project was initially bootstrapped from an open-source Next.js e-commerce template.  
> All business logic, database design, payment integration, performance optimizations, and deployment workflows listed below were implemented and customized by me.

---

## Tech Stack

- **Frontend:** React.js, Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Prisma
- **Authentication:** Clerk, OTP-based verification
- **Payments:** Razorpay (test mode)
- **Deployment:** Vercel
- **Tools:** Git, GitHub, VS Code

---

## Key Features

- Multi-vendor product listing and management
- Secure user authentication with OTP-based 2FA
- Product search with optimized database indexing
- Razorpay payment integration with webhook handling
- Admin and vendor dashboards
- Responsive UI for desktop and mobile
- Production-ready deployment on Vercel

---


The following components were designed, implemented, or significantly customized by me:

- Integrated **Razorpay payment gateway** and implemented webhook listeners for order verification and status updates
- Implemented **OTP-based two-factor authentication (2FA)** to improve account security
- Designed and optimized **MongoDB indexing strategies**, reducing product search latency
- Developed vendor and admin workflows for product and order management
- Configured **Prisma schema** and environment-based configuration using `.env.example`
- Debugged and stabilized the application for deployment on **Vercel**
- Structured the codebase for scalability and maintainability

---


