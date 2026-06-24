# Monogram Commission API 🎨

A backend REST API for managing custom monogram and embroidery commission orders — built around a real personal craft business workflow.

## Features

- 🔐 User registration and login with hashed passwords (bcrypt)
- 🔑 JWT-based authentication
- 📋 Create and track monogram commission orders
- 👤 Users can view their own orders
- 🛠️ Admin-only route to view all orders
- 🗄️ PostgreSQL database via Prisma ORM (hosted on Neon)

## Tech Stack

- Node.js + Express
- PostgreSQL (Neon)
- Prisma ORM
- bcrypt (password hashing)
- jsonwebtoken (authentication)

## API Endpoints

| Method | Endpoint       | Description                   | Auth Required |
| ------ | -------------- | ----------------------------- | ------------- |
| POST   | /auth/register | Create a new account          | No            |
| POST   | /auth/login    | Log in and receive a token    | No            |
| POST   | /orders        | Create a new commission order | Yes           |
| GET    | /orders/mine   | View your own orders          | Yes           |
| GET    | /orders        | View all orders (admin only)  | Yes (admin)   |

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/sunkan-mi27/monogram-api.git
cd monogram-api
```

AUTHOR : SUNKANMI ✍🏾
