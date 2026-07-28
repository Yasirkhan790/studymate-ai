# StudyMate AI

> An AI-powered study companion that helps students learn faster by combining explanations, summaries, quizzes, and structured notes in one place.

---

## Problem Statement

Students today waste hours jumping between websites, PDFs, lecture videos, and notes just to understand a single topic and prepare for exams. There is no single, focused tool that explains hard concepts, summarizes content, tests knowledge, and stores study notes in one seamless experience.

## Target Users

- **High school and college students** who need quick, clear explanations of difficult topics.
- **Self-learners and online course takers** who want summaries and quizzes to reinforce learning.
- **Exam candidates** who need organized study notes and practice questions.
- **Teachers and tutors** who want to generate supplementary study materials for students.

## Live Demo

**Deployed URL:** `[YOUR_LIVE_URL_HERE]`

Replace the placeholder above with the actual live URL after publishing.

## Public GitHub Repository

**Repository URL:** `[YOUR_GITHUB_REPO_URL_HERE]`

Replace the placeholder above with the public GitHub repository link.

## Complete Features

StudyMate AI brings together four core study workflows into a single, modern, responsive web application:

### 1. Explain Topic
Enter any topic and receive a clear, beginner-friendly explanation written in simple English with short paragraphs and helpful bullet points.

### 2. Summarize Text
Paste long articles, textbook passages, or lecture notes and instantly receive concise, well-organized study summaries.

### 3. Generate Quiz
Create five multiple-choice questions (A–D) on any topic, complete with a clearly marked answer key and short explanations.

### 4. Study Notes
Generate structured study notes with headings and bullet points, then save, search, delete, and export them as `.txt` files.

### Additional Features

- **Save & Manage Notes:** All saved notes are stored in the browser's local storage and can be searched, deleted individually, or bulk-exported.
- **Copy & Download Responses:** Every AI response can be copied to the clipboard or downloaded as a `.txt` file.
- **Dark Mode Toggle:** A persistent dark/light mode switch that respects user preference across sessions.
- **Responsive Glassmorphic UI:** Premium modern design with blue gradient accents, soft shadows, and mobile-first responsiveness.
- **Validated Contact Form:** A contact page with client-side validation and success feedback.
- **Full SEO:** Meta tags, Open Graph, Twitter cards, JSON-LD, dynamic sitemap, `robots.txt`, and `llms.txt`.
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation, and focus-visible styles.

## AI Feature Explanation

StudyMate AI is powered by **Google Gemini 3.6 Flash** through the **Lovable AI Gateway** (OpenAI-compatible API). When a student selects a mode and submits content, the request is sent securely to a TanStack Start server function. The server function builds a system prompt and mode-specific instructions, calls the Gemini model, and returns the generated response to the user.

The AI is instructed to:
- Use simple, student-friendly English.
- Keep paragraphs short and use bullet points where helpful.
- Never invent facts.
- Encourage learning rather than simply giving answers.
- Format all output in clean Markdown.

## Full System Prompt

```
You are StudyMate AI.
Your job is to help students learn faster.

Rules:
- Explain difficult topics in simple English.
- Use short paragraphs.
- Use bullet points when helpful.
- If summarizing, produce concise study notes.
- If generating quizzes, create five multiple-choice questions with answers (label options A-D and clearly mark the correct answer).
- If creating notes, organize them into headings and bullet points.
- Never invent facts.
- Encourage learning instead of simply giving answers.

Format all output using clean Markdown.
```

## Technologies and Services Used

| Category | Technology / Service |
|----------|----------------------|
| Frontend | React 19, TanStack Router, TanStack Start |
| Backend | TanStack Start Server Functions (edge / Cloudflare Workers) |
| Styling | Tailwind CSS v4 with OKLCH theme tokens |
| UI Components | shadcn/ui, Lucide React icons, Sonner toasts |
| AI Model | Google Gemini 3.6 Flash |
| AI Gateway | Lovable AI Gateway (OpenAI-compatible) |
| Validation | Zod |
| Storage | Browser localStorage for saved notes |
| Deployment | Lovable Publish (Cloudflare Workers) |

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone [YOUR_GITHUB_REPO_URL_HERE]
   cd studymate-ai
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root and add the required variable (see Environment Variables below).

4. **Run the development server**

   ```bash
   bun run dev
   ```

5. **Open the app**

   Navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `LOVABLE_API_KEY` | Auto-provisioned by Lovable; used server-side only to authenticate AI Gateway requests. | Yes |

## Folder Structure

```
.
├── public/
│   ├── robots.txt              # Search engine crawler instructions
│   └── llms.txt                # Structured project overview for AI crawlers
├── src/
│   ├── components/
│   │   ├── site-footer.tsx     # Site-wide footer with links and attribution
│   │   └── site-nav.tsx        # Sticky navigation + dark mode toggle
│   ├── hooks/
│   │   └── use-mobile.tsx      # Responsive breakpoint hook
│   ├── lib/
│   │   ├── ai.functions.ts     # Server function calling Gemini via Lovable AI Gateway
│   │   ├── error-capture.ts    # Error capture utilities
│   │   ├── error-page.ts       # Error page helpers
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts            # General utility functions
│   ├── routes/
│   │   ├── __root.tsx          # Global layout, SEO defaults, fonts
│   │   ├── about.tsx           # About / mission page
│   │   ├── assistant.tsx       # AI Assistant (Explain / Summarize / Quiz / Notes)
│   │   ├── contact.tsx         # Validated contact form
│   │   ├── features.tsx        # Feature showcase page
│   │   ├── index.tsx           # Landing / hero page
│   │   ├── notes.tsx           # Saved notes dashboard (localStorage)
│   │   └── sitemap[.]xml.ts    # Dynamic sitemap generation
│   ├── router.tsx              # TanStack Router configuration
│   ├── server.ts               # Server entry configuration
│   ├── start.ts                # Start / middleware configuration
│   └── styles.css              # Tailwind v4 theme, glassmorphism, animations
├── README.md                   # Project documentation
├── package.json                # Dependencies and scripts
└── vite.config.ts              # Vite build configuration
```

## Screenshots

Add screenshots to `/screenshots/` and reference them here:

| Home | AI Assistant | Saved Notes |
|------|--------------|-------------|
| ![Home](screenshots/home.png) | ![Assistant](screenshots/assistant.png) | ![Notes](screenshots/notes.png) |

## Future Improvements

- Cloud sync for notes across devices.
- Voice input for the AI Assistant.
- Flashcards with spaced repetition.
- PDF upload and summarization.
- Multi-language support.

## License

MIT
