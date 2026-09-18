"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

enum ConversationState {
  INITIAL,
  WAITING_FOR_NAME_EMAIL,
  WAITING_FOR_QUERY,
  WAITING_FOR_BITCOIN_PRICE,
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>(
    ConversationState.INITIAL,
  );

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages((prev) => [...prev, { user: userMessage, bot: "..." }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userMessage,
          symbol: "TSLA", // Change as needed
          period: "6mo", // Change as needed
        }),
      });

      if (!res.ok)
        throw new Error(`Failed to fetch response: ${res.statusText}`);

      const data = await res.json();
      console.log("API Response:", data);

      const botReply = data.response || "Sorry, I couldn't understand that.";

      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1 ? { ...msg, bot: botReply } : msg,
        ),
      );
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, bot: "Error fetching response." }
            : msg,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Open AI Chatbot"
        title="Open AI Chatbot"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full border-2 border-[#00FF00] bg-black text-[#00FF00] shadow-lg shadow-[#00FF00]/30 hover:bg-[#00FF00] hover:text-black"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 bg-black border border-[#00FF00]/30">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-[#00FF00]">AI Chatbot</CardTitle>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close AI Chatbot"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 text-[#00FF00] hover:bg-[#00FF00]/10 hover:text-[#00FF00]"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="flex-1 overflow-y-auto max-h-64 space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="space-y-1">
              <div className="text-white">User: {msg.user}</div>
              <div className="text-[#00FF00]">Bot: {msg.bot}</div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-black border-[#00FF00]/30 text-white"
          />
          <Button
            onClick={handleSend}
            className="bg-[#00FF00] text-black"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
