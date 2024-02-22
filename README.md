# Recruitment Task: Frontend + Backend Product Management

## Overview

This project is a web application designed for managing a product inventory. It features functionalities to display a list of products, view product details, add new products, edit existing ones, and delete products.

## Technologies

- **Frontend:** React, Redux, Redux-Saga, Formik, React-Router, TailwindCSS, TypeScript
- **Backend:** Node.js, Express, REST API, TypeScript, Prisma ORM
- **Database:** PostgreSQL

## System Requirements

- Node.js (v18.17.0)
- npm or yarn
- Git
- PostgreSQL (v15.4)

## Installation Guide

### Cloning the Repository

1. Clone the project repository:

    ```bash
    git clone https://github.com/marek3289/fakturujto-task
    cd fakturujto-task
    ```

2. **Node Version:** Ensure you are using Node.js version v18.17.0. Use nvm (Node Version Manager) to manage Node.js versions.

3. **PostgreSQL Version:** Ensure your PostgreSQL version is at least v15.4.

### Installing Dependencies

- **Frontend Dependencies:**

    Navigate to the client directory and install dependencies:

    ```bash
    cd client
    npm install # or yarn install
    ```

- **Backend Dependencies:**

    Navigate to the server directory and install dependencies:

    ```bash
    cd ../server
    npm install # or yarn install
    ```

### Database Setup

- **Install PostgreSQL:** Download and install PostgreSQL from the [official PostgreSQL website](https://www.postgresql.org/download/), following the instructions for your operating system.

- **Start PostgreSQL:**

    ```bash
    sudo service postgresql start
    ```

- **Create a New Database:**

    Login to the PostgreSQL CLI:

    ```bash
    psql -U postgres
    ```

    Create a database:

    ```bash
    CREATE DATABASE your_db_name;
    ```

    *Replace `your_db_name` with your preferred database name.*

- **Create a Database User (Optional):**

    Within the PostgreSQL CLI, run:

    ```bash
    CREATE USER your_user_name WITH ENCRYPTED PASSWORD 'your_password';
    GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_user_name;
    ```

    *Update `your_user_name`, `your_password`, and `your_db_name` accordingly.*

- **Update .env File:**

    Update the `.env` file in the server directory with your database connection details:

    ```bash
    DATABASE_URL="postgresql://your_user_name:your_password@localhost/your_db_name?schema=public"
    ```

### Adding Seed Data to the Database

Run the Prisma seed command:

```bash
npx prisma db seed
```

2. Running the Application
Start the backend:
```bash
npm start / yarn start
```

In a new terminal, start the frontend:
```bash
cd ../client
npm run dev / yarn dev
```

The frontend application will be available at http://localhost:5173.

