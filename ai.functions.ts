import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SYSTEM_PROMPT = `You are StudyMate AI.
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

Format all output using clean Markdown.`;

const MODE_INSTRUCTIONS: Record<string, string> = {
  explain: "Explain the following topic to a student in simple English, with short paragraphs and helpful bullet points where useful.",
  summarize: "Summarize the following content into concise, well-organized study notes.",
  quiz: "Create exactly 5 multiple-choice questions (options A-D) based on the following topic. After the questions, add an 'Answers' section with the correct letter and a one-line explanation for each.",
  notes: "Create structured study notes for the following topic, organized with clear headings and bullet points.",
};

const InputSchema = z.object({
  mode: z.enum(["explain", "summarize", "quiz", "notes"]),
  content: z.string().trim().min(2).max(6000),
});

export const generateStudyResponse = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const instruction = MODE_INSTRUCTIONS[data.mode];
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "google/gemini-3.6-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `${instruction}\n\n---\n${data.content}` },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
      if (res.status === 402) throw new Error("AI credits exhausted. Please add credits in workspace settings.");
      throw new Error(`AI request failed (${res.status}): ${body.slice(0, 200)}`);
    }

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const text = json.choices?.[0]?.message?.content ?? "";
    return { text };
  });