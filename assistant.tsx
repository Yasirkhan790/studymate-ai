import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { generateStudyResponse } from "@/lib/ai.functions";
import { toast } from "sonner";
import { Copy, Download, Trash2, Save, Sparkles, Loader2 } from "lucide-react";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "AI Assistant — StudyMate AI" },
      { name: "description", content: "Ask StudyMate AI to explain topics, summarize content, generate quizzes or build structured study notes." },
      { property: "og:title", content: "AI Assistant — StudyMate AI" },
      { property: "og:description", content: "Explain, summarize, quiz and take notes with AI." },
      { property: "og:url", content: "https://study-buddy-ai-4131.lovable.app/assistant" },
    ],
    links: [{ rel: "canonical", href: "https://study-buddy-ai-4131.lovable.app/assistant" }],
  }),
  component: Assistant,
});

type Mode = "explain" | "summarize" | "quiz" | "notes";

const MODE_LABELS: Record<Mode, string> = {
  explain: "Explain Topic",
  summarize: "Summarize",
  quiz: "Generate Quiz",
  notes: "Study Notes",
};

type SavedNote = {
  id: string;
  mode: Mode;
  prompt: string;
  content: string;
  createdAt: number;
};

const STORAGE_KEY = "studymate:notes";

function Assistant() {
  const [mode, setMode] = useState<Mode>("explain");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const run = useServerFn(generateStudyResponse);

  const onGenerate = async () => {
    const content = input.trim();
    if (content.length < 2) {
      toast.error("Please enter at least a few words.");
      return;
    }
    setLoading(true);
    setOutput("");
    try {
      const result = await run({ data: { mode, content } });
      setOutput(result.text || "No response generated.");
      toast.success("Response ready");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const onCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard");
  };

  const onDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `studymate-${mode}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onClear = () => {
    setInput("");
    setOutput("");
  };

  const onSave = () => {
    if (!output) return;
    const existing: SavedNote[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const note: SavedNote = {
      id: crypto.randomUUID(),
      mode,
      prompt: input.trim().slice(0, 200),
      content: output,
      createdAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([note, ...existing]));
    toast.success("Saved to your notes");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Powered by Google Gemini
        </span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">AI Assistant</h1>
        <p className="mt-2 text-muted-foreground">Paste a topic, article, or question — choose a mode, and let StudyMate help.</p>
      </div>

      <div className="glass-card mt-10 rounded-2xl p-6">
        <label htmlFor="prompt" className="text-sm font-medium">Your topic or content</label>
        <textarea
          id="prompt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Explain quantum entanglement…"
          rows={6}
          maxLength={6000}
          className="mt-2 w-full resize-y rounded-xl border border-input bg-background/70 px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
        />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label htmlFor="mode" className="text-sm text-muted-foreground">Mode</label>
          <select
            id="mode"
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
          >
            {(Object.keys(MODE_LABELS) as Mode[]).map((m) => (
              <option key={m} value={m}>{MODE_LABELS[m]}</option>
            ))}
          </select>

          <div className="ml-auto flex flex-wrap gap-2">
            <button
              onClick={onGenerate}
              disabled={loading}
              className="btn-gradient btn-gradient-hover inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold disabled:opacity-60"
            >
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</> : <><Sparkles className="h-4 w-4" /> Generate</>}
            </button>
            <button onClick={onClear} className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm hover:bg-accent">
              <Trash2 className="h-4 w-4" /> Clear
            </button>
          </div>
        </div>
      </div>

      {(loading || output) && (
        <div className="glass-card mt-6 rounded-2xl p-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Response</h2>
            <div className="flex flex-wrap gap-2">
              <button onClick={onCopy} disabled={!output} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs hover:bg-accent disabled:opacity-50">
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
              <button onClick={onDownload} disabled={!output} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs hover:bg-accent disabled:opacity-50">
                <Download className="h-3.5 w-3.5" /> Download
              </button>
              <button onClick={onSave} disabled={!output} className="btn-gradient inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold disabled:opacity-50">
                <Save className="h-3.5 w-3.5" /> Save Note
              </button>
            </div>
          </div>
          {loading && !output ? (
            <div className="space-y-2">
              <div className="shimmer h-4 rounded" />
              <div className="shimmer h-4 w-5/6 rounded" />
              <div className="shimmer h-4 w-4/6 rounded" />
            </div>
          ) : (
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-foreground">{output}</pre>
          )}
        </div>
      )}
    </div>
  );
}