/**
 * AIDemoWidget — Valten AI Systems
 * Fully functional AI chatbot widget powered by OpenAI via /api/chat.
 * Maintains conversation history, shows typing indicator, handles errors.
 */

import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "What services do you offer?",
  "How does the AI phone assistant work?",
  "How much does it cost?",
  "How quickly can you get me set up?",
];

const WELCOME = "Hi! I'm the Valten AI assistant. Ask me anything about our services, pricing, or how AI automation can help your business — I'm here to help.";

export default function AIDemoWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setHasOpened(true);
      setPulse(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;

    const userMessage: Message = { role: "user", text: msg };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError(null);
    // Keep cursor in the input bar
    setTimeout(() => inputRef.current?.focus(), 0);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || "Sorry, I couldn't get a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setTimeout(() => inputRef.current?.focus(), 0);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Something went wrong. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I'm having trouble connecting right now. You can reach us directly at calendly.com/shaun-valtenai/30min to book a free call.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Valten AI chat assistant"
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #c9a84c, #e2c87a)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(201,168,76,0.45)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          animation: pulse ? "widgetPulse 2.5s ease-in-out infinite" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 32px rgba(201,168,76,0.6)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(201,168,76,0.45)";
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}

        {/* Notification dot */}
        {!hasOpened && (
          <div
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#4ade80",
              border: "2px solid #0a0f1e",
              boxShadow: "0 0 6px rgba(74,222,128,0.8)",
            }}
          />
        )}
      </button>

      {/* Chat window */}
      <div
        style={{
          position: "fixed",
          bottom: "5.5rem",
          right: "1.75rem",
          zIndex: 9998,
          width: "min(400px, calc(100vw - 2rem))",
          maxHeight: "540px",
          background: "#0d1525",
          border: "1px solid rgba(201,168,76,0.25)",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transformOrigin: "bottom right",
          transform: open ? "scale(1) translateY(0)" : "scale(0.85) translateY(16px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.25rem",
            background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #e2c87a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              flexShrink: 0,
              fontWeight: 700,
              color: "#0a0f1e",
            }}
          >
            ✦
          </div>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#f8f8f8" }}>
              Valten AI Assistant
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.8)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", color: "rgba(248,248,248,0.5)" }}>
                {loading ? "Thinking…" : "Online — ask me anything"}
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "rgba(248,248,248,0.4)",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(201,168,76,0.2) transparent",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                animation: "msgEnter 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
              }}
            >
              <div
                style={{
                  maxWidth: "84%",
                  padding: "0.65rem 0.9rem",
                  borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background:
                    msg.role === "user"
                      ? "linear-gradient(135deg, #c9a84c, #e2c87a)"
                      : "rgba(255,255,255,0.06)",
                  border: msg.role === "assistant" ? "1px solid rgba(201,168,76,0.12)" : "none",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: msg.role === "user" ? "#0a0f1e" : "rgba(248,248,248,0.88)",
                  fontWeight: msg.role === "user" ? 600 : 400,
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start", animation: "msgEnter 0.3s ease both" }}>
              <div
                style={{
                  padding: "0.65rem 0.9rem",
                  borderRadius: "12px 12px 12px 2px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#c9a84c",
                      animation: `typingDot 1.2s ease-in-out ${d * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions — shown only on first message */}
        {messages.length === 1 && !loading && (
          <div
            style={{
              padding: "0 1rem 0.75rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
            }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.72rem",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "100px",
                  border: "1px solid rgba(201,168,76,0.25)",
                  background: "rgba(201,168,76,0.06)",
                  color: "rgba(248,248,248,0.7)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#f8f8f8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.06)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(248,248,248,0.7)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          style={{
            padding: "0.75rem 1rem",
            borderTop: "1px solid rgba(201,168,76,0.12)",
            display: "flex",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask anything about Valten AI…"
            disabled={loading}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "8px",
              padding: "0.6rem 0.9rem",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              color: "#f8f8f8",
              outline: "none",
              transition: "border-color 0.2s ease",
              opacity: loading ? 0.6 : 1,
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              background: input.trim() && !loading ? "linear-gradient(135deg, #c9a84c, #e2c87a)" : "rgba(201,168,76,0.15)",
              border: "none",
              cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !loading ? "#0a0f1e" : "rgba(201,168,76,0.4)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
