import { useState } from 'react'
import { X, StickyNote } from 'lucide-react'

export default function QuickNoteModal({ onClose, onSave, notes }) {
  const [text, setText] = useState('')

  const handleSave = () => {
    if (!text.trim()) return
    onSave(text.trim())
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) handleSave()
    if (e.key === 'Escape') onClose()
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: 16,
          width: '100%',
          maxWidth: 480,
          padding: 24,
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StickyNote size={18} color="#6366f1" />
            <span style={{ fontWeight: 600, fontSize: 16, color: '#1e293b' }}>Quick Note</span>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8', padding: 4, cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Input */}
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tulis catatan cepat di sini..."
          style={{
            width: '100%',
            minHeight: 100,
            padding: '10px 12px',
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            fontSize: 14,
            resize: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            lineHeight: 1.5,
            color: '#1e293b',
          }}
        />

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <span style={{ fontSize: 11, color: '#94a3b8' }}>Ctrl+Enter untuk simpan</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={onClose}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 13,
                color: '#64748b',
                background: '#f1f5f9',
                cursor: 'pointer',
              }}
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 13,
                background: '#6366f1',
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Previous notes */}
        {notes.length > 0 && (
          <div
            style={{
              marginTop: 16,
              borderTop: '1px solid #f1f5f9',
              paddingTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 10,
              }}
            >
              Catatan sebelumnya
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                maxHeight: 160,
                overflowY: 'auto',
              }}
            >
              {notes.slice(0, 5).map((note) => (
                <div
                  key={note.id}
                  style={{
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                  }}
                >
                  <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 2 }}>
                    {note.date}
                  </div>
                  <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.4 }}>
                    {note.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
