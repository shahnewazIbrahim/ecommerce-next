# Ecommerce Project

This is a modern **Ecommerce Platform** where the **backend** is built with **Laravel** and the **frontend** is developed using **Next.js**. The project is designed to provide a seamless shopping experience with features like product browsing, user authentication, shopping cart, and order management.

---

## Project Structure

### Backend: Laravel

The backend is a RESTful API built with Laravel, handling:

- User authentication and authorization
- Product management (CRUD operations)
- Category management
- Shopping cart and order management
- Payment gateway integration
- API endpoints for frontend interaction

### Frontend: Next.js

The frontend is a server-side rendered (SSR) application using Next.js, focusing on:

- Responsive and modern UI/UX
- Integration with backend APIs
- SEO-friendly pages
- Dynamic routing for products and categories
- State management using **React Context API** or **Redux**

---

## Features

### General Features

- Secure authentication (JWT or Sanctum for API authentication)
- Fully responsive design
- Role-based access control (admin and user)

### Admin Panel

- Manage products, categories, and users
- View and process orders
- Dashboard for analytics

### User Features

- Product browsing and filtering
- Add to cart and checkout
- Order history and tracking

---

## Technologies Used

| **Category**      | **Technology**               |
| ----------------- | ---------------------------- |
| Backend           | Laravel                      |
| Frontend          | Next.js, React, Tailwind CSS |
| Database          | MySQL/PostgreSQL             |
| Authentication    | Laravel Sanctum/JWT          |
| API Communication | REST API                     |
| Payment Gateway   | Stripe/PayPal                |
| State Management  | Context API/Redux Toolkit    |

---

## Installation

### Prerequisites

- PHP >= 8.1
- Node.js >= 18.x
- Composer
- MySQL or PostgreSQL

### Backend Setup (Laravel)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/backend.git
   ```
2. Navigate to the backend directory:

   ```bash
   cd backend

   ```

3. Install Dependencies:

   ```bash
    composer install

   ```

4. Configure .env file:

   ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ecommerce
    DB_USERNAME=root
    DB_PASSWORD=

   ```

5. Run migrations and seed the database:

   ```bash
    php artisan migrate --seed

   ```

6. Start the project:
   ```bash
    php artisan serve
   ```

### Frontend Setup (Next.js)

1. Navigate to the backend directory:

   ```bash
   cd next-ecommerce-frontend

   ```

2. Install Dependencies:

   ```bash
    npm install

   ```

3. Configure .env.local file:

   ```bash
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

   ```

4. Run migrations and seed the database:

   ```bash
    php artisan migrate --seed

   ```

5. Start the project:

   ```bash
    npm run dev

   ```
