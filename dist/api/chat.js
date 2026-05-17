const SYSTEM_PROMPT = `You are the Valten AI virtual assistant — a professional, friendly AI assistant for Valten AI Systems, a boutique AI automation agency based in Adelaide, South Australia. Your role is to help website visitors understand Valten AI's services, answer their questions, and guide them toward booking a free 30-minute strategy call. Services: AI Phone Assistant (24/7 calls, bookings, lead qualification), AI Chatbot (website/social engagement, lead capture), Website Build (2-3 weeks, mobile-first, SEO-ready), SEO & Google Visibility, Google Ads Management (8.1x ROAS avg), Email & SMS Campaigns (98% SMS open rate), Social Media Management, Reputation Management. Pricing: Starter $499/mo, Growth custom, Pro tailored. Free 30-min audit: https://calendly.com/shaun-valtenai/30min. Tone: professional, warm, concise. Always end with a next step. Speak as Valten AI (we/our).`;
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: "messages array required" });
  const apiKey = process.env.OPENAI_API_KEY;
  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  if (!apiKey) return res.status(500).json({ error: "API key not configured" });
  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-4.1-mini", messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages.slice(-10)], max_tokens: 350, temperature: 0.7 }),
    });
    if (!response.ok) { const err = await response.text(); console.error("OpenAI error:", err); return res.status(502).json({ error: "AI service error" }); }
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
