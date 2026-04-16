import {
  LayoutDashboard,
  BookOpen,
  Scale,
  Megaphone,
  Heart,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Command,
} from 'lucide-react'
import { ROOMS } from '../palette.js'

const ICONS = {
  dashboard: LayoutDashboard,
  thesis: BookOpen,
  tax: Scale,
  agency: Megaphone,
  selfcare: Heart,
  calendar: Calendar,
}

export default function Sidebar({ activeRoom, setActiveRoom, isOpen, toggle }) {
  return (
    <div
      style={{
        width: isOpen ? 240 : 64,
        background: '#1e293b',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '18px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          borderBottom: '1px solid #334155',
          minHeight: 56,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: '#6366f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Command size={16} color="white" />
        </div>
        {isOpen && (
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              Command Center
            </div>
            <div style={{ color: '#64748b', fontSize: 11, whiteSpace: 'nowrap' }}>
              Marsya's Life OS
            </div>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav
        style={{
          flex: 1,
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
        }}
      >
        {ROOMS.map((room) => {
          const Icon = ICONS[room.id]
          const isActive = activeRoom === room.id
          return (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              title={!isOpen ? room.label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 10px',
                borderRadius: 8,
                background: isActive ? room.color + '22' : 'transparent',
                color: isActive ? room.color : '#94a3b8',
                border: isActive ? `1px solid ${room.color}44` : '1px solid transparent',
                transition: 'all 0.15s',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={17} />
              </div>
              {isOpen && (
                <span style={{ fontSize: 13, fontWeight: isActive ? 600 : 400 }}>
                  {room.label}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Toggle Button */}
      <div style={{ padding: '10px 8px', borderTop: '1px solid #334155' }}>
        <button
          onClick={toggle}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: 8,
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isOpen ? 'flex-end' : 'center',
          }}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
    </div>
  )
}
