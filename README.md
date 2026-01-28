# Node.js PostgreSQL CRUD API

A simple REST API built with Node.js and Express for managing users with PostgreSQL database.

## Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- psql command-line tool

## Project Dependencies

- **Express.js** (^4.18.2) - Web framework
- **pg** (^8.11.0) - PostgreSQL client for Node.js

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install Express.js and the PostgreSQL client library.

## Database Setup

### 2. Create Database

Run the database setup script to create the `mydb` database:

```bash
psql -U postgres -f setup.sql
```

This script will:
- Terminate any existing connections to `mydb`
- Drop the database if it exists
- Create a new `mydb` database

### 3. Initialize Tables

Run the table initialization script to create the users table and seed sample data:

```bash
psql -U postgres -d mydb -f init_tables.sql
```

This script will:
- Drop the `users` table if it exists
- Create the `users` table with columns: `id`, `name`, `email`, `created_at`
- Insert sample data (John Doe and Jane Smith)

## Starting the Server

### 4. Run the Server

```bash
npm start
```

or

```bash
node index.js
```

The server will start on **http://localhost:5000**

You should see:
```
Server running on http://localhost:5000
```

## Database Configuration

The server connects to PostgreSQL with the following credentials (modify in `index.js` if different):

```javascript
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "root",
  port: 5432,
});
```

## API Endpoints

### GET - Retrieve All Users
```
GET /users
```

### GET - Retrieve User by ID
```
GET /users/:id
```

### POST - Create a New User
```
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### PUT - Update User by ID
```
PUT /users/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
```

## Database Commands

### Connect to PostgreSQL

```bash
psql -U postgres
```

### Connect to mydb database

```bash
psql -U postgres -d mydb
```

### View all users

```sql
SELECT * FROM users;
```

### View specific user

```sql
SELECT * FROM users WHERE id = 1;
```

### Add a new user manually

```sql
INSERT INTO users (name, email) VALUES ('New User', 'newuser@example.com');
```

### Update a user

```sql
UPDATE users SET name = 'Updated Name', email = 'updated@example.com' WHERE id = 1;
```

### Drop the database

```bash
psql -U postgres -f setup.sql
```

## Quick Start Summary

1. Install dependencies: `npm install`
2. Create database: `psql -U postgres -f setup.sql`
3. Initialize tables: `psql -U postgres -d mydb -f init_tables.sql`
4. Start server: `npm start`
5. Access API at: `http://localhost:5000`
