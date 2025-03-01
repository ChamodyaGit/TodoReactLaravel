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

## Prerequisites
- Ensure you have **Composer** and **Node.js** installed on your system.
- Install a code editor like **VS Code**.

Follow these steps to clone and run this project on your local machine.

## Installation Steps

### 1. Open the Cloned Project
Open the cloned project in **VS Code** or any code editor of your choice.

### 2. Install PHP Dependencies
Run the following command in the terminal to install required PHP dependencies:
```sh
composer install
```

### 3. Setup Environment File
Create a `.env` file in the project root and copy the contents of `.env.example` into it.

### 4. Generate Application Key
Run the following command to generate an application key inside the `.env` file:
```sh
php artisan key:generate
```

### 5. Configure Database
Update the following lines in the `.env` file with your database credentials

### 6. Migrate Database
Run the following command to create tables in the database:
```sh
php artisan migrate
```

### 7. Install Node Dependencies
Run the following command to install frontend dependencies:
```sh
npm install
```

### 8. Compile Assets
Run the following command to compile frontend assets:
```sh
npm run dev
```

### 9. Serve the Application
Open a separate terminal and run the following command to start the Laravel server:
```sh
php artisan serve
```

### 10. Access the Application
Open your browser and go to:
```
http://127.0.0.1:8000
