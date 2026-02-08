# 🌈 Vibely — A Modern Social Media Platform

**Vibely** is a full-stack social media application built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It enables users to authenticate via **Google OAuth**, create and share posts, and interact with content through likes — all within a clean, responsive UI.

This project demonstrates real-world full-stack development concepts including authentication, REST APIs, database modeling, and responsive frontend design.

---

## 🔗 Live Demo

> [Vibely – Social Media App](https://vibely-social-media-app-1.onrender.com/)

---

## 📸 Screenshots

[Project image 1](markdown/images/1.png)

---

[Project image 2](markdown/images/2.png)

---

[Project image 3](markdown/images/3.png)

---

## ✨ Key Features

- 🔐 Secure authentication using **Google OAuth 2.0**
- 📝 Create, read, and display user posts
- ❤️ Like and unlike posts in real time
- 🌍 View posts from all users
- 📱 Fully responsive design (mobile & desktop)
- ⚡ RESTful API with scalable architecture

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- CSS / Material UI

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB (Mongoose)

### Authentication
- Google OAuth 2.0

---

## 📦 Prerequisites

Ensure you have the following installed:

- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (v4.2+)
- Google Cloud account (OAuth credentials)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Omprakash625/vibely.git
cd vibely
```
### 2️⃣ Environment Variables

- Create a .env file inside the backend folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
- Create a .env file inside the frontend folder 
```bash
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

replace http://localhost:5000 with your backend url

⚠️ Never commit .env files to version control.

### 3️⃣ Install Dependencies and Run the Application Locally
Backend
```bash
cd backend
npm install
npm start
```

Frontend
```bash
cd frontend
npm install
npm run dev
```

---
## 📂 Project Structure
```text
vibely/
│
├── frontend/        # React frontend
│   ├── src/
│   └── public/
│
├── backend/        # Node.js & Express backend
│   ├── routes/
│   ├── models/
│   ├──controllers/
|   ├──middleware/
|   ├──index.js
│
├── README.md
└── package.json
```
---
## 🧠 What I Learned

- Implementing OAuth authentication securely

- Designing RESTful APIs with Express

- Managing application state in React

- Connecting and modeling data with MongoDB

- Building responsive UIs for real-world applications

- Structuring scalable full-stack projects

## 🚧 Future Enhancements

- 💬 Comments on posts

- 👤 User profiles & avatars

- 🔔 Notifications

- 🌓 Dark mode

- 📸 Image uploads (Cloudinary / Firebase)

- 🔍 Search & hashtags

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- Fork the repository

- Create a feature branch

- Commit your changes

- Open a pull request

### 📄 License

This project is licensed under the MIT License.

### 👋 About the Developer

Built by **Omprakash Patel**
📧 Email: omprakash3954@gmail.com

**🐙 GitHub: https://github.com/Omprakash625**


⭐ If you like this project, feel free to give it a star!
