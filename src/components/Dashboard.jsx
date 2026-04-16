import { getRoom } from '../palette.js'
import ProgressBar from './ProgressBar.jsx'

const ROOM_IDS = ['thesis', 'tax', 'agency', 'selfcare']

const TODAY_PRIORITIES = [
  { room: 'thesis', task: 'Complete literature review', urgent: true },
  { room: 'tax', task: 'Review client case documents', urgent: true },
  { room: 'agency', task: 'Review Meta Ads performance', urgent: false },
  { room: 'selfcare', task: 'Morning exercise', urgent: false },
]

function getRoomProgress(roomId, roomData) {
  if (roomId === 'selfcare') {
    const done = roomData?.habits?.filter((h) => h.done).length ?? 0
    const total = roomData?.habits?.length ?? 1
    return Math.round((done / total) * 100)
  }
  const done = roomData?.tasks?.filter((t) => t.done).length ?? 0
  const total = roomData?.tasks?.length ?? 1
  return Math.round((done / total) * 100)
}

export default function Dashboard({ data, setActiveRoom }) {
  const overallProgress = Math.round(
    ROOM_IDS.reduce((sum, id) => sum + getRoomProgress(id, data[id]), 0) / ROOM_IDS.length
  )

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b' }}>
          Selamat datang, Marsya 👋
        </h1>
        <p style={{ color: '#64748b', marginTop: 4, fontSize: 14 }}>
          Ini ringkasan semua room kamu hari ini.
        </p>
      </div>

      {/* Overall Progress */}
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: '18px 20px',
          marginBottom: 20,
          border: '1px solid #e2e8f0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: '#1e293b' }}>Overall Progress</span>
          <span style={{ fontWeight: 700, color: '#6366f1', fontSize: 18 }}>{overallProgress}%</span>
        </div>
        <ProgressBar value={overallProgress} color="#6366f1" height={10} />
      </div>

      {/* Room Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 14,
          marginBottom: 24,
        }}
      >
        {ROOM_IDS.map((roomId) => {
          const room = getRoom(roomId)
          const progress = getRoomProgress(roomId, data[roomId])
          const pendingCount =
            roomId === 'selfcare'
              ? data[roomId]?.habits?.filter((h) => !h.done).length ?? 0
              : data[roomId]?.tasks?.filter((t) => !t.done).length ?? 0

          return (
            <button
              key={roomId}
              onClick={() => setActiveRoom(roomId)}
              style={{
                background: 'white',
                border: `1px solid ${room.color}33`,
                borderLeft: `4px solid ${room.color}`,
                borderRadius: 12,
                padding: 16,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'box-shadow 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}
              >
                <span style={{ fontWeight: 600, fontSize: 13, color: '#1e293b' }}>
                  {room.label}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: room.color,
                    background: room.lightBg,
                    padding: '2px 8px',
                    borderRadius: 20,
                  }}
                >
                  {progress}%
                </span>
              </div>
              <ProgressBar value={progress} color={room.color} />
              <div style={{ marginTop: 8, fontSize: 12, color: '#64748b' }}>
                {pendingCount} item tersisa
              </div>
            </button>
          )
        })}
      </div>

      {/* Today's Priorities */}
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 20,
          border: '1px solid #e2e8f0',
        }}
      >
        <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, color: '#1e293b' }}>
          Prioritas Hari Ini
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {TODAY_PRIORITIES.map((item, i) => {
            const room = getRoom(item.room)
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 8,
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div
                  style={{
                    width: 3,
                    height: 32,
                    borderRadius: 2,
                    background: room.color,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#1e293b', fontWeight: 500 }}>
                    {item.task}
                  </div>
                  <div style={{ fontSize: 11, color: room.color, marginTop: 2 }}>
                    {room.label}
                  </div>
                </div>
                {item.urgent && (
                  <span
                    style={{
                      fontSize: 11,
                      color: '#ef4444',
                      background: '#fef2f2',
                      padding: '2px 8px',
                      borderRadius: 20,
                      fontWeight: 500,
                    }}
                  >
                    Urgent
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
