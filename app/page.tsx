"use client"

import { useState } from "react"
import { Chat } from "@/components/chat"
import { Settings } from "@/components/settings"

export default function ChatPage() {
  const [apiKey, setApiKey] = useState({
    perplexityApiKey: "",
  })

  return (
    <main className="relative min-h-screen">
      <Settings 
        onSettingsChange={setApiKey}
      />
      <Chat 
        apiKey={apiKey}
      />
    </main>
  )
}