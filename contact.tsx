import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — StudyMate AI" },
      { name: "description", content: "Get in touch with the StudyMate AI team — questions, feedback, or partnership requests." },
      { property: "og:title", content: "Contact — StudyMate AI" },
      { property: "og:description", content: "Reach out to the StudyMate AI team." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Message sent — we'll reply soon!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
      <div className="text-center">
        <span className="btn-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl">
          <Mail className="h-5 w-5" />
        </span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Get in touch</h1>
        <p className="mt-2 text-muted-foreground">Questions, feedback or ideas — we'd love to hear from you.</p>
      </div>

      {sent && (
        <div className="glass-card mt-8 flex items-center gap-3 rounded-2xl p-4 text-sm">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          Thanks! Your message has been sent.
        </div>
      )}

      <form onSubmit={submit} noValidate className="glass-card mt-8 space-y-4 rounded-2xl p-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 w-full resize-y rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
        <button type="submit" className="btn-gradient btn-gradient-hover inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold">
          <Send className="h-4 w-4" /> Send message
        </button>
      </form>
    </div>
  );
}