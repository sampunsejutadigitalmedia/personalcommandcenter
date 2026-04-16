import { getRoom } from '../palette.js'

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]
const DAY_NAMES = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

const CALENDAR_EVENTS = [
  { day: 15, room: 'tax', label: 'VAT Report Due' },
  { day: 17, room: 'agency', label: 'Meta Ads Review' },
  { day: 18, room: 'tax', label: 'Client Docs Review' },
  { day: 19, room: 'agency', label: 'Batch Scheduling' },
  { day: 20, room: 'thesis', label: 'Lit Review Deadline' },
  { day: 20, room: 'agency', label: 'Client Proposal' },
  { day: 25, room: 'tax', label: 'Court Submission' },
  { day: 30, room: 'tax', label: 'Annual Filing' },
]

export default function CalendarView() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const todayDate = now.getDate()

  const firstDayOfWeek = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Build grid cells: nulls for empty leading slots, then day numbers
  const cells = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>
          {MONTH_NAMES[month]} {year}
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>
          Semua event dari seluruh room
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {['thesis', 'tax', 'agency', 'selfcare'].map((id) => {
          const r = getRoom(id)
          return (
            <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{ width: 10, height: 10, borderRadius: 3, background: r.color }}
              />
              <span style={{ fontSize: 12, color: '#64748b' }}>{r.label}</span>
            </div>
          )
        })}
      </div>

      {/* Calendar */}
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 16,
          border: '1px solid #e2e8f0',
        }}
      >
        {/* Day-of-week headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            marginBottom: 8,
          }}
        >
          {DAY_NAMES.map((d) => (
            <div
              key={d}
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 600,
                color: '#94a3b8',
                padding: '6px 0',
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 4,
          }}
        >
          {cells.map((day, i) => {
            if (day === null) return <div key={`e-${i}`} />

            const dayEvents = CALENDAR_EVENTS.filter((e) => e.day === day)
            const isToday = day === todayDate

            return (
              <div
                key={day}
                style={{
                  minHeight: 72,
                  border: isToday ? `2px solid #6366f1` : '1px solid #f1f5f9',
                  borderRadius: 8,
                  padding: '6px',
                  background: isToday ? '#eef2ff' : 'white',
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: isToday ? 700 : 400,
                    color: isToday ? '#6366f1' : '#1e293b',
                    marginBottom: 4,
                  }}
                >
                  {day}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {dayEvents.map((ev, j) => {
                    const r = getRoom(ev.room)
                    return (
                      <div
                        key={j}
                        title={ev.label}
                        style={{
                          fontSize: 10,
                          padding: '2px 4px',
                          background: r.color + '22',
                          color: r.color,
                          borderRadius: 3,
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          fontWeight: 500,
                        }}
                      >
                        {ev.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
