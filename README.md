# To-Do List Management App

A full-stack To-Do List Management application built using **Laravel**, **React**, and **TypeScript**. This project was created to explore and improve skills in full-stack development, API design, and UI/UX implementation.

---

## 🚀 **Technologies Used:**

- **Backend:**
  - **Laravel** (PHP Framework)
  - **RESTful API** with routes for CRUD operations
  - **Soft Deletes** for tasks
  - **Eloquent ORM** for database interaction
  
- **Frontend:**
  - **React** with **TypeScript**
  - **Inertia.js** to simplify page rendering and data passing between backend and frontend
  - **Bootstrap** for a responsive, modern UI
  - **Axios** for API requests

---

## 🔧 **Key Features:**

- Add, update, and delete to-do tasks
- Mark tasks as "Completed" or "Not Completed"
- Soft delete functionality for task recovery
- Dynamic, responsive UI
- Data persisted in a MySQL database

---

## 🛠️ **Setup Instructions**

Follow these steps to clone and run this project on your local machine.

### 1. **Clone the repository**

Clone the project repository from GitHub:

```bash
# Clone the repository
git clone https://github.com/your-username/todo-app.git

# Navigate to the project directory
cd todo-app

# Install PHP dependencies for Laravel backend
composer install

# Copy the .env file
cp .env.example .env

# Generate the Laravel application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Install the frontend dependencies using npm
npm install

# Start the React development server
npm run dev

# Start the Laravel development server
php artisan serve
