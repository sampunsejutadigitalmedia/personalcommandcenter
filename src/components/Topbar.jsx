import { Plus } from 'lucide-react'
import { getRoom } from '../palette.js'

export default function Topbar({ activeRoom, onNoteClick }) {
  const room = getRoom(activeRoom)
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      style={{
        height: 56,
        background: 'white',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{ width: 4, height: 20, borderRadius: 2, background: room.color, flexShrink: 0 }}
        />
        <span style={{ fontWeight: 600, fontSize: 15, color: '#1e293b' }}>{room.label}</span>
        <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 4 }}>{today}</span>
      </div>
      <button
        onClick={onNoteClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '7px 14px',
          borderRadius: 8,
          background: '#6366f1',
          color: 'white',
          fontSize: 13,
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        <Plus size={15} />
        Quick Note
      </button>
    </div>
  )
}
