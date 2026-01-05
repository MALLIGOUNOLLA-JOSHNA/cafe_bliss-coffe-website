# Café Bliss Website with Admin Panel

A complete café website with admin authentication system and management dashboard.

## Features

### Frontend (Customer)
- Beautiful responsive website
- Menu browsing
- Shopping cart
- User login/registration
- Order placement
- Profile management

### Backend (Admin)
- Secure admin authentication with JWT
- Role-based access control
- Menu item CRUD operations
- Order management
- Order status updates
- Admin dashboard with statistics

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

3. Access the website:
- Customer site: http://localhost:3000
- Admin login: http://localhost:3000/admin/login.html

## Default Admin Credentials

- Email: `admin@cafebliss.com`
- Password: `admin123`

**⚠️ Change these credentials in production!**

## Project Structure

```
cafe_bliss_website/
├── backend/
│   ├── models/
│   │   └── Admin.js          # Admin model with bcrypt hashing
│   ├── middleware/
│   │   └── authMiddleware.js # JWT authentication middleware
│   ├── routes/
│   │   ├── adminRoutes.js    # Admin authentication routes
│   │   ├── menuRoutes.js     # Menu CRUD routes
│   │   └── orderRoutes.js    # Order management routes
│   └── data/                 # JSON data files (created automatically)
├── admin/
│   ├── css/
│   │   └── admin.css         # Admin panel styles
│   ├── js/
│   │   ├── auth.js           # Authentication utilities
│   │   ├── dashboard.js      # Dashboard functionality
│   │   ├── menu.js           # Menu management
│   │   └── orders.js         # Orders management
│   ├── login.html            # Admin login page
│   ├── dashboard.html        # Admin dashboard
│   ├── menu.html             # Menu management page
│   └── orders.html           # Orders management page
├── index.html                # Main customer website
├── login.html                # Customer login
├── profile.html              # Customer profile
├── server.js                 # Express server
└── package.json              # Dependencies
```

## API Endpoints

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/verify` - Verify token (protected)

### Menu Management (Protected)
- `GET /api/menu` - Get all menu items (public)
- `GET /api/menu/:id` - Get single menu item (public)
- `POST /api/menu` - Create menu item (admin)
- `PUT /api/menu/:id` - Update menu item (admin)
- `DELETE /api/menu/:id` - Delete menu item (admin)

### Order Management
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get single order (admin)
- `POST /api/orders` - Create order (public)
- `PUT /api/orders/:id/status` - Update order status (admin)

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Role-based access control (admin middleware)
- Protected routes for admin operations
- Token expiration (24 hours)
- Secure logout (token removal)

## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JWT, bcryptjs
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Data Storage**: JSON files (can be easily migrated to database)

## Notes

- Data is stored in JSON files in `backend/data/` directory
- Default admin account is created automatically on first server start
- JWT secret is set to default - change in production using environment variables
- All admin routes are protected with authentication middleware

## Production Deployment

Before deploying to production:

1. Set environment variables:
   - `JWT_SECRET`: Strong random secret key
   - `PORT`: Server port (default: 3000)

2. Change default admin credentials

3. Consider migrating to a database (PostgreSQL, MongoDB, etc.)

4. Set up HTTPS

5. Configure CORS properly for your domain

