# Blood Donation App

A full-stack web application that connects blood donors with those in need, making blood donation more accessible and efficient.

## Features

- 🔐 User Authentication (Register/Login)
- 🩸 Blood Request Management
- 📍 Location-based Search
- 👤 User Profiles
- 🏆 Rewards System
- 📱 Responsive Design

## Tech Stack

### Frontend
- Vue.js 3
- TypeScript
- Vuetify
- Tailwind CSS
- Vue Router
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- Passport.js (JWT Authentication)

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd blood-donation-app
```

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd backend
npm install
```

4. **Set up Environment Variables**

Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=blood_donation_db
DB_USER=postgres
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

5. **Set up the Database**
```bash
# Connect to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE blood_donation_db;

# Exit psql
\q
```

## Running the Application

1. **Start the Backend Server**
```bash
cd backend
npm run dev
```

2. **Start the Frontend Development Server**
```bash
# In a new terminal, from the root directory
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/api

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Users
- GET `/api/users/profile` - Get user profile
- PUT `/api/users/profile` - Update user profile
- GET `/api/users` - Get all users (admin only)

### Blood Requests
- POST `/api/blood-requests` - Create a new blood request
- GET `/api/blood-requests` - Get all blood requests
- GET `/api/blood-requests/:id` - Get a specific blood request
- PUT `/api/blood-requests/:id` - Update a blood request
- DELETE `/api/blood-requests/:id` - Delete a blood request

## Project Structure

```
blood-donation-app/
├── src/                    # Frontend source code
│   ├── assets/            # Static assets
│   │   ├── components/        # Vue components
│   │   ├── config/            # Configuration files
│   │   ├── router/            # Vue router configuration
│   │   ├── services/          # API services
│   │   ├── views/             # Page components
│   │   └── App.vue            # Root component
│   │
│   ├── backend/               # Backend source code
│   │   ├── src/
│   │   │   ├── config/       # Configuration files
│   │   │   ├── models/       # Database models
│   │   │   ├── routes/       # API routes
│   │   │   ├── middleware/   # Custom middleware
│   │   │   └── server.ts     # Entry point
│   │   └── package.json
│   └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vuetify](https://vuetifyjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
