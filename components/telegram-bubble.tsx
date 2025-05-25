"use client"
import { useState, useRef, useEffect } from "react"

export function TelegramBubble() {
  const [open, setOpen] = useState(false)
  const botRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (botRef.current && !botRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }} ref={botRef}>
      {!open ? (
        <button
          aria-label="Abrir Chatbot Telegram"
          onClick={() => setOpen(true)}
          style={{
            background: '#229ED9',
            border: 'none',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            cursor: 'pointer',
          }}
        >
          {/* Telegram SVG */}
          <svg width="36" height="36" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="120" fill="#229ED9"/>
            <path d="M180.5 72.5L157.5 180.5C155.5 188.5 150.5 190.5 143.5 186.5L110.5 161.5L94.5 176.5C92.5 178.5 90.5 180.5 87.5 180.5L90.5 145.5L157.5 85.5C160.5 82.5 157.5 81.5 153.5 84.5L77.5 134.5L43.5 123.5C36.5 121.5 36.5 116.5 45.5 113.5L170.5 69.5C177.5 67.5 182.5 71.5 180.5 72.5Z" fill="#fff"/>
          </svg>
        </button>
      ) : (
        <div style={{ position: 'relative', width: 350, height: 500 }}>
          <iframe
            src="https://niurkateam.app.n8n.cloud/webhook/c7f168fc-7798-468a-8807-3773b81bd03a/webhook"
            title="Chatbot Telegram"
            width="350"
            height="500"
            style={{ border: 'none', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
            allow="clipboard-write"
          />
          <button
            aria-label="Cerrar Chatbot Telegram"
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 20, color: '#229ED9', fontWeight: 'bold' }}>×</span>
          </button>
        </div>
      )}
    </div>
  )
}
