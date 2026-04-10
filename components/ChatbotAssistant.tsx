'use client';

import { useMemo, useState } from 'react';

type Message = { role: 'user' | 'assistant'; text: string };

function generateSuggestion(input: string): string {
  const mood = input.toLowerCase();

  if (mood.includes('relax') || mood.includes('calm')) {
    return 'Try a calm morning at Playa Porto Mari, lunch in Pietermaai, and a sunset harbor walk in Willemstad.';
  }
  if (mood.includes('adventure') || mood.includes('active')) {
    return 'Great choice—start with jet ski rentals at Blue Bay, then visit Shete Boka National Park, and end with local seafood.';
  }
  if (mood.includes('family') || mood.includes('easy')) {
    return 'Plan a simple day: beach time at Mambo Beach, aquarium visit, and early dinner near the promenade.';
  }

  return 'Tell me your mood (relaxed, adventurous, or easy-going) and I will suggest a one-day Curaçao itinerary.';
}

export function ChatbotAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hi! I can help you pick activities and create a simple Curaçao itinerary. How are you feeling today?'
    }
  ]);

  const placeholder = useMemo(() => 'Ask for ideas by mood, e.g. “relaxed afternoon”.', []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input.trim() };
    const assistantReply: Message = { role: 'assistant', text: generateSuggestion(input.trim()) };

    setMessages((prev) => [...prev, userMessage, assistantReply]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-curacao-blue px-5 py-4 text-lg font-bold text-white shadow-xl hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        aria-label="Open chatbot assistant"
      >
        💬 Trip Helper
      </button>

      {open && (
        <section className="fixed bottom-24 right-5 z-50 flex h-[420px] w-[min(92vw,380px)] flex-col rounded-2xl border border-slate-300 bg-white shadow-2xl">
          <header className="rounded-t-2xl bg-curacao-blue px-4 py-3 text-lg font-semibold text-white">
            Curaçao Assistant
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-base ${
                  message.role === 'assistant' ? 'bg-slate-100 text-slate-900' : 'ml-auto bg-cyan-600 text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleSend()}
              placeholder={placeholder}
              className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-base focus:border-curacao-blue focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="rounded-xl bg-curacao-blue px-4 py-2 text-base font-semibold text-white hover:bg-cyan-700"
            >
              Send
            </button>
          </div>
        </section>
      )}
    </>
  );
}
