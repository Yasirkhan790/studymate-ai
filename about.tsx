import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — StudyMate AI" },
      { name: "description", content: "StudyMate AI is an AI-powered study companion that helps students learn faster with explanations, summaries, quizzes and structured notes." },
      { property: "og:title", content: "About — StudyMate AI" },
      { property: "og:description", content: "Our mission: help every student learn faster with AI." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="text-4xl font-bold md:text-5xl">About <span className="text-gradient">StudyMate AI</span></h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Students spend hours hopping between websites, PDFs and videos to understand a single topic. StudyMate AI brings explanations, summaries, quizzes and notes into one clean, focused space — so you can spend your time actually learning.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="glass-card rounded-2xl p-6">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Our mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">Make high-quality, personalized learning available to every student — regardless of resources.</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Who it's for</h2>
          <p className="mt-2 text-sm text-muted-foreground">School students, college learners, self-learners, and anyone preparing for exams.</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">The AI feature</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            StudyMate AI is powered by Google Gemini via a secure server function. Your API key never touches the browser — every request is signed and validated on the server before reaching the model. The assistant follows a strict tutor prompt that keeps answers accurate, structured and student-friendly.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Built for speed</h2>
          <p className="mt-2 text-sm text-muted-foreground">Modern responsive UI, dark mode, local storage for notes, and blazing fast interactions.</p>
        </div>
      </div>
    </div>
  );
}