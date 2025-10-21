# Discuss-V1
🧠 Social App — Node.js + Express + MongoDB

A simple social web application built using Node.js, Express, MongoDB, Mongoose, EJS, and JWT Authentication.
Users can register, log in, create posts, edit posts, like posts, and log out securely.

🚀 Features

✅ User registration with hashed passwords (using bcrypt)
✅ JWT-based authentication stored in cookies
✅ Create, edit, and delete posts
✅ Like/unlike functionality
✅ Logout and session management
✅ Tailwind CSS frontend with EJS templates
✅ MongoDB data persistence with Mongoose

🧩 Technologies Used

Node.js — Server runtime

Express.js — Web framework

EJS — Templating engine

MongoDB + Mongoose — Database and ODM

bcrypt — Password hashing

jsonwebtoken — JWT authentication

cookie-parser — Cookie handling

multer (optional) — File upload support

Tailwind CSS — Styling frontend pages

📁 Project Structure
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
├── public/                 # Static files (if any)
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/data_association.git
cd data_association

2️⃣ Install dependencies
npm install

3️⃣ Set up MongoDB

Make sure MongoDB is running locally or use a cloud connection string (e.g. MongoDB Atlas).

In app.js, replace your connection string if necessary:

mongoose.connect("mongodb://localhost:27017/social_app");

4️⃣ Run the server
node app.js


The app will run on:

http://localhost:3000

🧠 Key Routes
Method	Route	Description
GET	/	Register page
POST	/register	Register new user
GET	/login	Login page
POST	/login	Log in existing user
GET	/logout	Log out user
GET	/profile	Display user profile + posts
POST	/post	Create a new post
GET	/edit/:id	Open edit post page
POST	/update/:id	Update existing post
GET	/like/:id	Like/unlike a post
🔐 Authentication Flow

When a user registers or logs in, a JWT token is generated and stored in a cookie.

The middleware isLoggedIn() verifies the JWT before allowing access to protected routes.

If the token is invalid or missing, the user is redirected to /login.

🧱 Example .env (optional)

To make your setup cleaner, you can move secrets into .env:

JWT_SECRET=your_secret_key
MONGO_URI=mongodb://localhost:27017/social_app
PORT=3000


Then in your app.js:

require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

📸 Frontend Pages

Register Page → Create an account

Login Page → Log in with email and password

Profile Page → View and create posts

Edit Page → Update existing posts

All styled using TailwindCSS and rendered with EJS templates.

🧰 Future Improvements

Add image upload support with multer

Display likes count

Add comments section

Show posts from all users (feed)

Convert EJS → React frontend

👨‍💻 Author

Your Name
📧 your.email@example.com

🌐 GitHub
