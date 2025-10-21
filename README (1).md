# 🧠 Social App — Node.js + Express + MongoDB

A simple social web application built using **Node.js**, **Express**, **MongoDB**, **Mongoose**, **EJS**, and **JWT Authentication**.  
Users can **register, log in, create posts, edit posts, like posts**, and **log out** securely.

---

## 🚀 Features

- ✅ User registration with hashed passwords (using `bcrypt`)
- ✅ JWT-based authentication stored in cookies
- ✅ Create, edit, and delete posts
- ✅ Like/unlike functionality
- ✅ Logout and session management
- ✅ Tailwind CSS frontend with EJS templates
- ✅ MongoDB data persistence with Mongoose

---

## 🧩 Technologies Used

- **Node.js** — Server runtime  
- **Express.js** — Web framework  
- **EJS** — Template engine for HTML rendering  
- **MongoDB + Mongoose** — Database and ODM  
- **bcrypt** — Secure password hashing  
- **jsonwebtoken (JWT)** — Token-based authentication  
- **cookie-parser** — Manage cookies  
- **Tailwind CSS** — Frontend styling

---

## 📁 Project Structure

```
Data_Association/
│
├── app.js                  # Main server file
├── models/
│   ├── user.js             # User schema
│   └── post.js             # Post schema
│
├── views/
│   ├── index.ejs           # Registration page
│   ├── login.ejs           # Login page
│   ├── profile.ejs         # Profile page with post form
│   └── edit.ejs            # Edit post page
│
├── public/                 # Static files (optional)
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/data_association.git
cd data_association
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Connect to MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas.

Edit your connection string in `app.js` if needed:
```js
mongoose.connect("mongodb://localhost:27017/social_app");
```

### 4️⃣ Run the server
```bash
node app.js
```

The app runs on:
```
http://localhost:3000
```

---

## 🧠 Key Routes

| Method | Route | Description |
|--------|--------|-------------|
| **GET** | `/` | Registration page |
| **POST** | `/register` | Create a new user |
| **GET** | `/login` | Login page |
| **POST** | `/login` | Authenticate and create session |
| **GET** | `/logout` | Log out user |
| **GET** | `/profile` | User profile + posts |
| **POST** | `/post` | Create a new post |
| **GET** | `/edit/:id` | Edit a post |
| **POST** | `/update/:id` | Update post content |
| **GET** | `/like/:id` | Like or unlike a post |

---

## 🔐 Authentication Flow

1. When a user registers or logs in, a **JWT token** is generated.  
2. The token is stored in a cookie using `res.cookie('token', token)`.  
3. The middleware `isLoggedIn()` verifies the token on protected routes.  
4. If the token is missing or invalid, the user is redirected to `/login`.

---

## 🧱 Example `.env` File (Optional)

You can use environment variables instead of hardcoding secrets:

```
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://localhost:27017/social_app
PORT=3000
```

Then load them in `app.js`:
```js
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
```

---

## 📸 Frontend Pages

- **Register Page** → Create an account  
- **Login Page** → Log in with email and password  
- **Profile Page** → View and create posts  
- **Edit Page** → Update your existing posts  

All styled using **Tailwind CSS** for a clean modern UI.

---

## 🧰 Future Improvements

- 📷 Add image uploads using `multer`
- ❤️ Show like counts on posts
- 💬 Add comments feature
- 🌐 Public feed showing all users’ posts
- ⚡ Convert frontend to React or Next.js

---

## 👨‍💻 Author

**Your Name**  
📧 your.email@example.com  
🌐 [GitHub](https://github.com/yourusername)

---

### 🏁 Run the App

```bash
npm start
```

Visit → [http://localhost:3000](http://localhost:3000)
