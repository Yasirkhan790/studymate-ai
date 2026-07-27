import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, ListChecks, FileText, Brain } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudyMate AI — Learn any topic faster with AI" },
      { name: "description", content: "Explain difficult topics, summarize content, generate quizzes and structured study notes in one AI-powered study companion." },
      { property: "og:title", content: "StudyMate AI — Learn any topic faster with AI" },
      { property: "og:description", content: "Explain difficult topics, summarize content, generate quizzes and structured study notes in one AI-powered study companion." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "StudyMate AI",
        applicationCategory: "EducationalApplication",
        description: "AI-powered study companion for explanations, summaries, quizzes and notes.",
      }),
    }],
  }),
  component: Home,
});

const features = [
  { icon: Brain, title: "Explain Topic", desc: "Break down any concept into plain-English, student-friendly explanations." },
  { icon: FileText, title: "Summarize Text", desc: "Turn long articles or textbook chapters into concise study notes." },
  { icon: ListChecks, title: "Generate Quiz", desc: "Instantly create 5-question multiple-choice quizzes with answers." },
  { icon: BookOpen, title: "Study Notes", desc: "Organized headings and bullet points for exam-ready revision." },
];

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
          <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Powered by Google Gemini
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Learn any topic <span className="text-gradient">10× faster</span> with AI.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              StudyMate AI explains difficult topics, summarizes content, generates quizzes, and builds study notes — all in one beautiful place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/assistant"
                className="btn-gradient btn-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-6 py-3 text-sm font-semibold hover:bg-accent"
              >
                See Features
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="glass-card rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-muted-foreground">StudyMate AI · Assistant</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl bg-secondary/70 p-3">
                  <span className="font-semibold">You:</span> Explain photosynthesis
                </div>
                <div className="btn-gradient rounded-xl p-3 text-primary-foreground">
                  <span className="font-semibold">StudyMate:</span> Photosynthesis is how plants turn sunlight into food…
                </div>
                <div className="rounded-xl border border-border p-3">
                  <div className="font-semibold text-primary">Key points</div>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-muted-foreground">
                    <li>Chlorophyll absorbs light energy</li>
                    <li>CO₂ + H₂O → glucose + O₂</li>
                    <li>Occurs in the chloroplasts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="py-14">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to study smarter</h2>
          <p className="mt-3 text-muted-foreground">Four powerful AI tools designed for real learning.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card group rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <span className="btn-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/assistant" className="btn-gradient btn-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
            Try the AI Assistant <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}