import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Search, Trash2, Download, FileText } from "lucide-react";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Saved Notes — StudyMate AI" },
      { name: "description", content: "Browse, search, export and manage your saved AI-generated study notes." },
      { property: "og:title", content: "Saved Notes — StudyMate AI" },
      { property: "og:description", content: "All your AI study notes in one place." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/notes" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/notes" }],
  }),
  component: Notes,
});

type SavedNote = {
  id: string;
  mode: "explain" | "summarize" | "quiz" | "notes";
  prompt: string;
  content: string;
  createdAt: number;
};

const STORAGE_KEY = "studymate:notes";

function Notes() {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setNotes(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (next: SavedNote[]) => {
    setNotes(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return notes;
    return notes.filter((n) =>
      n.content.toLowerCase().includes(term) || n.prompt.toLowerCase().includes(term) || n.mode.includes(term),
    );
  }, [notes, q]);

  const remove = (id: string) => {
    persist(notes.filter((n) => n.id !== id));
    toast.success("Note deleted");
  };

  const exportAll = () => {
    if (notes.length === 0) return;
    const text = notes
      .map((n) => `# ${n.mode.toUpperCase()} — ${new Date(n.createdAt).toLocaleString()}\nPrompt: ${n.prompt}\n\n${n.content}\n\n---\n`)
      .join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `studymate-notes-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Saved Notes</h1>
          <p className="mt-1 text-sm text-muted-foreground">{notes.length} saved locally in your browser.</p>
        </div>
        <button
          onClick={exportAll}
          disabled={notes.length === 0}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm hover:bg-accent disabled:opacity-50"
        >
          <Download className="h-4 w-4" /> Export all
        </button>
      </div>

      <div className="glass-card mt-6 flex items-center gap-2 rounded-xl px-4 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search notes…"
          className="w-full bg-transparent py-2 text-sm outline-none"
          aria-label="Search saved notes"
        />
      </div>

      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <div className="glass-card rounded-2xl p-10 text-center">
            <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">
              {notes.length === 0 ? "No notes yet — generate one from the AI Assistant." : "No notes match your search."}
            </p>
          </div>
        ) : (
          filtered.map((n) => (
            <article key={n.id} className="glass-card rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="btn-gradient rounded-full px-2 py-0.5 font-semibold">{n.mode}</span>
                  <span className="text-muted-foreground">{new Date(n.createdAt).toLocaleString()}</span>
                </div>
                <button
                  onClick={() => remove(n.id)}
                  aria-label="Delete note"
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
              {n.prompt && <p className="mb-2 text-xs font-medium text-muted-foreground">Prompt: {n.prompt}</p>}
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed">{n.content}</pre>
            </article>
          ))
        )}
      </div>
    </div>
  );
}