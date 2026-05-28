# GitHub Profile Analyzer API 🚀

A scalable backend API that analyzes GitHub user profiles using the GitHub Public API and stores useful profile insights in a MySQL database.

This project is built using Node.js, Express.js, Prisma ORM, and MySQL following REST API architecture and clean backend practices.

---

# ✨ Features

- Analyze any public GitHub profile
- Fetch real-time data from GitHub API
- Store profile insights in MySQL database
- Get all analyzed profiles
- Get single profile details
- Pagination support
- Prisma ORM integration
- RESTful API design
- Error handling and validation
- Scalable backend architecture

---

# 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | API Framework |
| MySQL | Database |
| Prisma ORM | Database ORM |
| GitHub REST API | Third-party API |

---

# 📂 Project Structure

```txt
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── utils/
 ├── config/
 └── app.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/github-profile-analyzer.git
```

---

## 2️⃣ Move to Project Folder

```bash
cd github-profile-analyzer
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your_database_url"
PORT=5000
GITHUB_TOKEN="your_github_token"
```

---

# 🗄 Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run Database Migration:

```bash
npx prisma migrate dev
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
npm start
```

---

# 🌐 API Endpoints

## Analyze GitHub Profile

```http
POST /api/profile/analyze
```

### Request Body

```json
{
  "username": "octocat"
}
```

---

## Get All Profiles

```http
GET /api/profile?page=1&limit=10
```

---

## Get Single Profile

```http
GET /api/profile/:username
```

---

# 🧠 Stored Insights

The API stores useful GitHub profile insights such as:

- Username
- Name
- Bio
- Followers
- Following
- Public Repositories
- Profile Avatar
- GitHub Profile URL
- Account Creation Date

---

# 🗃 Database Schema

Prisma schema available at:

```txt
prisma/schema.prisma
```

---

# 🚀 Live API

```txt
https://your-api.onrender.com
```

---

# 📬 Postman Collection

(Optional)

You can import the Postman collection to test all API endpoints easily.

---

# 📖 Learning Goals

This project helped in understanding:

- REST API development
- Third-party API integration
- Database design
- Prisma ORM
- Backend deployment
- Pagination
- Clean backend architecture

---

# 👨‍💻 Author

Danish Khan

---

# ⭐ Future Improvements

- GitHub repository analysis
- User activity tracking
- Redis caching
- Authentication
- Rate limiting
- Docker support
- API documentation with Swagger