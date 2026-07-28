# StudyMate AI

> An AI-powered study companion that helps students learn faster by combining explanations, summaries, quizzes, and structured notes in one place.

---

## Problem Statement

Students often spend hours switching between websites, textbooks, PDFs, videos, and handwritten notes to understand a single topic. This process is slow and inefficient. StudyMate AI solves this problem by providing explanations, summaries, quizzes, and organized study notes from a single AI-powered application.

---

## Target Users

- High school students
- College and university students
- Self-learners
- Online course learners
- Competitive exam candidates
- Teachers and tutors

---

# Live Demo

**Application URL**

https://study-buddy-ai-4131.lovable.app

The application is publicly deployed using Lovable Publish and is accessible from any modern web browser.

---

# Public GitHub Repository

Repository:

https://github.com/Yasirkhan790/studymate-ai

---

# Features

StudyMate AI combines multiple learning tools into one modern application.

## Explain Topic

Enter any topic and receive a beginner-friendly explanation using simple English and structured formatting.

## Summarize Text

Paste long articles, lecture notes, or textbook content and receive concise study summaries.

## Generate Quiz

Generate five multiple-choice questions with answers to test understanding of any topic.

## Study Notes

Create structured study notes with headings and bullet points.

## Saved Notes

- Save notes locally
- Search notes
- Delete notes
- Export notes as TXT files

## Copy & Download

- Copy AI responses
- Download responses as TXT

## Dark Mode

Supports persistent light and dark themes.

## Responsive Design

Optimized for desktop, tablet, and mobile devices.

## Contact Page

Includes client-side validation and success feedback.

## Accessibility

- Semantic HTML
- Keyboard navigation
- ARIA labels
- Focus-visible styling

## SEO

- Meta tags
- Open Graph
- Twitter Cards
- robots.txt
- Dynamic sitemap
- JSON-LD
- llms.txt

---

# Project Highlights

- Original AI-powered study assistant
- Built as the ACT-AI Final Project
- Uses Google's Gemini AI
- Secure server-side AI integration
- Modern responsive interface
- Mobile friendly
- Accessible
- SEO optimized

---

# AI Feature

StudyMate AI uses Google's Gemini 3.6 Flash model through the Lovable AI Gateway.

Users can choose one of four learning modes:

- Explain Topic
- Summarize Text
- Generate Quiz
- Study Notes

The request is securely processed by a server function before being sent to Gemini.

The AI is instructed to:

- Explain concepts in simple English
- Keep paragraphs short
- Use bullet points
- Generate quizzes with answers
- Create structured notes
- Avoid hallucinations
- Encourage learning instead of simply providing answers

---

# System Prompt

```
You are StudyMate AI.

Your job is to help students learn faster.

Rules

- Explain difficult topics in simple English.
- Use short paragraphs.
- Use bullet points where appropriate.
- Summarize content into concise study notes.
- Generate five multiple-choice questions with answers.
- Organize notes into headings and bullet points.
- Never invent facts.
- Encourage learning instead of simply giving answers.
- Format all responses using clean Markdown.
```

---

# Application Architecture

```
React Client

↓

TanStack Router

↓

TanStack Start Server Function

↓

Lovable AI Gateway

↓

Google Gemini 3.6 Flash

↓

AI Response

↓

User Interface
```

---

# Technologies Used

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Routing | TanStack Router |
| Server | TanStack Start |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Validation | Zod |
| Notifications | Sonner |
| AI | Google Gemini 3.6 Flash |
| AI Gateway | Lovable AI Gateway |
| Storage | Browser Local Storage |
| Deployment | Lovable Publish |
| Version Control | GitHub |

---

# Installation

Clone the repository

```bash
git clone https://github.com/Yasirkhan790/studymate-ai.git

cd studymate-ai
```

Install dependencies

```bash
bun install
```

Run development server

```bash
bun run dev
```

Open

```
http://localhost:8080
```

---

# Build

Create a production build

```bash
bun run build
```

Preview production build

```bash
bun run start
```

---

# Environment Variables

Create a `.env` file.

Required variable:

| Variable | Description |
|----------|-------------|
| LOVABLE_API_KEY | Used by the Lovable AI Gateway for Gemini requests |

Do not commit API keys to GitHub.

---

# Deployment

This application is deployed using Lovable Publish.

Deployment URL

https://study-buddy-ai-4131.lovable.app

Deployment process:

1. Push code to GitHub.
2. Connect repository to Lovable.
3. Configure environment variables.
4. Deploy.
5. Verify all AI features.

---

# Folder Structure

```
.
├── public
│   ├── favicon.ico
│   ├── robots.txt
│   └── llms.txt
│
├── src
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── routes
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── README.md
├── package.json
├── vite.config.ts
└── bun.lock
```

---

# Screenshots

Create a folder named `screenshots` and place these images inside.

### Home Page

![Home](screenshots/home.png)

### AI Assistant

![Assistant](screenshots/assistant.png)

### Saved Notes

![Notes](screenshots/notes.png)

### About Page

![About](screenshots/about.png)

---

# Future Improvements

- User authentication
- Cloud synchronization
- PDF upload
- Voice assistant
- Flashcards
- Spaced repetition
- AI chat history
- Multi-language support
- Mobile application

---

# Author

**Yasir Khan**

Final Project submitted for the ACT-AI Program.

GitHub

https://github.com/Yasirkhan790

---

# Acknowledgements

This project was developed as the Final Project for the ACT-AI Program.

Special thanks to the ACT-AI instructors and mentors for their guidance throughout the course.

Google Gemini provides the AI capabilities used by this application.

---

# License

MIT License

Copyright (c) 2026 Yasir Khan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software, subject to the conditions of the MIT License.
