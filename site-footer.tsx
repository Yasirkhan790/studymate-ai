import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-4 pb-10 md:px-6">
      <div className="glass-card rounded-2xl p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="btn-gradient inline-flex h-8 w-8 items-center justify-center rounded-lg">
                <GraduationCap className="h-4 w-4" aria-hidden />
              </span>
              <span>Study<span className="text-gradient">Mate</span> AI</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Learn any topic faster with AI-powered explanations, summaries, quizzes and notes.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/assistant" className="hover:text-foreground">AI Assistant</Link></li>
              <li><Link to="/notes" className="hover:text-foreground">Saved Notes</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> Contact us
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Powered by Google Gemini
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} StudyMate AI. Built for learners everywhere.
        </div>
      </div>
    </footer>
  );
}