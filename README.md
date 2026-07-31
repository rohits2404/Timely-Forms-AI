# 🚀 Timely Forms AI

> An AI-powered modern form builder that enables users to generate, customize, publish, and analyze forms in minutes.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
![OpenAI Compatible](https://img.shields.io/badge/Groq-OpenAI%20Compatible-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

Timely Forms AI is a full-stack AI-powered form builder that combines modern UI/UX with Large Language Models to automate form creation.

Instead of manually creating every field, simply describe the form in natural language and let AI generate a structured form instantly.

The application also provides:

- AI-generated form validation
- AI question improvements
- Form summaries
- Analytics dashboard
- Response management
- Public shareable forms
- Authentication
- Beautiful drag-and-drop builder

---

# ✨ Features

## 🤖 AI Features

- Generate complete forms from prompts
- AI-powered validation suggestions
- Improve question wording
- Generate form summaries
- JSON-only AI responses for reliability
- OpenAI-compatible Groq API integration

Example prompt:

> Create a Job Application Form for Software Engineers with personal details, experience, skills, resume upload and portfolio.

↓

AI automatically creates the entire form structure.

---

## 📝 Form Builder

- Drag & Drop fields
- Reorder questions
- Field settings panel
- Live Preview
- Form Templates
- Required fields
- Validation rules
- Multiple field types

Supported field types include:

- Text
- Textarea
- Email
- Number
- Phone
- Date
- Checkbox
- Radio
- Select
- Rating
- File Upload
- and more.

---

## 📊 Analytics

Built-in analytics dashboard includes:

- Total Responses
- Completion Rate
- Response Funnel
- Question-wise charts
- KPI cards
- Visual insights
- Charts using Recharts

---

## 📨 Response Management

- Collect submissions
- Store responses
- View response history
- Export utilities
- Insights generation

---

## 🔐 Authentication

- JWT Authentication
- Protected routes
- Password hashing using bcrypt
- Secure API middleware

---

## 🎨 Modern UI

- Responsive Design
- Dark / Light themes
- Tailwind CSS v4
- Beautiful dashboards
- Command Palette
- Toast notifications
- Modern component library

---

# 🏗️ Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS 4
- React Router
- React Hook Form
- DnD Kit
- Axios
- Lucide Icons
- Recharts
- Sonner

---

## Backend

- Node.js
- Express
- PostgreSQL
- JWT
- bcrypt
- OpenAI SDK
- Groq API
- dotenv

---

# 📂 Project Structure

```
Timely-Forms-AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── hooks
│   │   ├── context
│   │   ├── services
│   │   └── lib
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── routes
│   │   ├── middleware
│   │   ├── repositories
│   │   ├── config
│   │   └── utils
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/rohits2404/Timely-Forms-AI.git

cd Timely-Forms-AI
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

## Install Backend

```bash
cd backend

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

DATABASE_URL=postgres://username:password@localhost:5432/timely_forms

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key

GROQ_MODEL=openai/gpt-oss-20b
```

---

# ▶ Running the Project

## Backend

```bash
cd backend

npm run dev
```

---

## Frontend

```bash
cd frontend

npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

# 🤖 AI Architecture

```
User Prompt
      │
      ▼
Frontend
      │
Axios Request
      │
      ▼
Express API
      │
AI Controller
      │
AI Service
      │
Groq (OpenAI Compatible API)
      │
JSON Response
      │
      ▼
Form Builder
```

---

# 📡 API Endpoints

## Authentication

```
POST /auth/register

POST /auth/login
```

---

## Forms

```
GET    /forms

POST   /forms

PUT    /forms/:id

DELETE /forms/:id
```

---

## Responses

```
POST /responses

GET /responses/:formId
```

---

## Insights

```
GET /insights/:formId
```

---

## AI

```
POST /ai/generate-form

POST /ai/generate-validation

POST /ai/improve-question

POST /ai/form-summary
```

---

# 🧠 AI Prompt Engineering

The application forces AI responses into structured JSON.

Instead of free-text generation, the backend instructs the model to:

- Return JSON only
- Avoid markdown
- Match predefined schema
- Reject invalid outputs

This greatly improves consistency and makes AI-generated forms directly usable by the frontend.

---

# 📊 Form Workflow

```
Describe Form

        │

        ▼

AI Generates JSON

        │

        ▼

Editable Form Builder

        │

        ▼

Publish Form

        │

        ▼

Collect Responses

        │

        ▼

Analytics Dashboard
```

---

# 🎯 Key Highlights

- AI-assisted form generation
- Modern React architecture
- Express REST API
- PostgreSQL backend
- JWT authentication
- Drag-and-drop editor
- Interactive analytics
- Modular codebase
- Responsive UI
- OpenAI-compatible AI integration

---

# 📈 Future Improvements

- OAuth Login
- Email notifications
- Team workspaces
- Form versioning
- Conditional logic
- AI response analysis
- PDF export
- Webhooks
- Zapier integration
- Public templates marketplace

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Rohit Sharma**

GitHub:
https://github.com/rohits2404

---

## ⭐ Support

If you found this project helpful:

- ⭐ Star the repository
- 🍴 Fork it
- 🛠️ Contribute
- 💡 Share feedback

---

> Built with ❤️ using React, Node.js, PostgreSQL, and AI.
