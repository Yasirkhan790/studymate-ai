import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, FileText, ListChecks, BookOpen, Moon, Save, Download, Search, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — StudyMate AI" },
      { name: "description", content: "Explore StudyMate AI features: AI explanations, summaries, quizzes, study notes, saved notes, dark mode and more." },
      { property: "og:title", content: "Features — StudyMate AI" },
      { property: "og:description", content: "AI-powered study features for students and self-learners." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/features" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/features" }],
  }),
  component: Features,
});

const main = [
  { icon: Brain, title: "Explain Topic", desc: "Turn any confusing subject into plain-English explanations with short paragraphs and helpful bullet points." },
  { icon: FileText, title: "Summarize Text", desc: "Paste articles or notes and instantly receive concise, exam-ready study summaries." },
  { icon: ListChecks, title: "Generate Quiz", desc: "Create 5-question multiple-choice quizzes with answers to test your understanding." },
  { icon: BookOpen, title: "Study Notes", desc: "Get well-structured notes with clear headings and bullet points for revision." },
];

const extras = [
  { icon: Moon, title: "Dark Mode", desc: "Comfortable study sessions day or night." },
  { icon: Save, title: "Save Notes", desc: "Store responses locally with one click." },
  { icon: Search, title: "Search Notes", desc: "Instantly find any saved note by title or content." },
  { icon: Download, title: "Export", desc: "Download responses or all notes as text files." },
  { icon: Zap, title: "Fast & Responsive", desc: "Mobile-first, blazing fast interface." },
  { icon: Shield, title: "Private", desc: "Your notes stay in your browser — never uploaded." },
];

function Features() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">All the study tools you need, <span className="text-gradient">in one place</span></h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Four core AI capabilities plus everything that makes real studying feel good.</p>
      </div>

      <section className="mt-14 grid gap-5 sm:grid-cols-2">
        {main.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card rounded-2xl p-7">
            <span className="btn-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">And more</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 text-center">
        <Link to="/assistant" className="btn-gradient btn-gradient-hover inline-flex rounded-xl px-6 py-3 text-sm font-semibold">Launch AI Assistant</Link>
      </div>
    </div>
  );
}