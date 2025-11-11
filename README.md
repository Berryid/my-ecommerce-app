# BERRY GADGETS E-Commerce Platform

Welcome to BERRY GADGETS, a modern, full-stack e-commerce application built with Django and React.

This project features a complete, decoupled architecture where a Django Rest Framework backend serves a JSON API to a React frontend.

## Features

* **Product Catalog:** Browse a list of all available products.
* **Product Details:** View a detailed page for each individual product.
* **User Authentication:** Full user registration and login system using JWT (JSON Web Tokens).
* **Shopping Cart:** Add items to a persistent shopping cart and view the cart page.

## Tech Stack

### Backend
* **Framework:** Python, Django
* **API:** Django Rest Framework
* **Authentication:** Djoser (for auth endpoints)
* **Tokens:** DRF Simple JWT (for JSON Web Tokens)
* **Database:** SQLite (default)
* **CORS:** `django-cors-headers`

### Frontend
* **Framework:** React
* **Bundler:** Vite
* **Routing:** React Router DOM
* **State Management:** React Context (for Auth and Cart)
* **API Client:** Axios (with interceptors for auth)
* **Token Parsing:** `jwt-decode`

---

## Getting Started

### Prerequisites

* Python 3.10+ and `pip`
* Node.js 18+ and `npm`

### 1. Backend Setup (Django)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # On macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # On Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install dependencies:**
    *(You will need to create a `requirements.txt` file)*
    ```bash
    # Run this to create the file (based on your settings.py):
    pip freeze > requirements.txt 
    # (Or manually add: django, djangorestframework, djangorestframework-simplejwt, django-cors-headers, djoser)

    # Then install:
    pip install -r requirements.txt
    ```

4.  **Run database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **(Optional) Create a superuser:**
    ```bash
    python manage.py createsuperuser
    # Follow the prompts to create an admin account
    ```
    
6.  **Run the backend server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will now be running at `http://127.0.0.1:8000`.

### 2. Frontend Setup (React)

1.  **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  **Install npm packages:**
    ```bash
    npm install
    ```

3.  **Run the frontend dev server:**
    ```bash
    npm run dev
    ```
    The React app will now be running at `http://localhost:5173`.

You can now open `http://localhost:5173` in your browser to use the app!

---

## Key API Endpoints

The frontend app consumes the following API endpoints provided by the backend:

* `GET /api/products/`
    * Lists all products.
* `GET /api/products/<id>/`
    * Retrieves a single product by its ID.
* `POST /auth/users/`
    * Registers a new user (Djoser).
* `POST /auth/jwt/create/`
    * Logs in a user and returns an `access` token (Simple JWT).