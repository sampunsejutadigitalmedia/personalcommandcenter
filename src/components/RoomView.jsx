import { useState } from 'react'
import {
  CheckCircle2,
  Circle,
  FileText,
  Brain,
  Flame,
  TrendingUp,
  Edit3,
} from 'lucide-react'
import { getRoom } from '../palette.js'
import ProgressBar from './ProgressBar.jsx'

/* ── Shared ── */

function Card({ title, icon: Icon, color, children }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 12,
        padding: 20,
        border: '1px solid #e2e8f0',
        marginBottom: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        {Icon && <Icon size={16} color={color} />}
        <span style={{ fontWeight: 600, fontSize: 14, color: '#1e293b' }}>{title}</span>
      </div>
      {children}
    </div>
  )
}

function TaskList({ tasks, color, onToggle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => onToggle(task.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '9px 10px',
            borderRadius: 8,
            background: task.done ? '#f8fafc' : 'white',
            border: '1px solid #f1f5f9',
            cursor: 'pointer',
          }}
        >
          {task.done ? (
            <CheckCircle2 size={18} color={color} />
          ) : (
            <Circle size={18} color="#cbd5e1" />
          )}
          <span
            style={{
              flex: 1,
              fontSize: 13,
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#94a3b8' : '#1e293b',
            }}
          >
            {task.text}
          </span>
          <span style={{ fontSize: 11, color: '#94a3b8' }}>{task.due}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Thesis Room ── */

function ThesisRoom({ data, updateData, room }) {
  const toggleTask = (id) =>
    updateData({ tasks: data.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })

  return (
    <>
      <Card title="Task List" icon={CheckCircle2} color={room.color}>
        <TaskList tasks={data.tasks} color={room.color} onToggle={toggleTask} />
      </Card>

      <Card title="File Tracker" icon={FileText} color={room.color}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.files.map((f, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 10px',
                borderRadius: 8,
                background: '#f8fafc',
                border: '1px solid #f1f5f9',
              }}
            >
              <FileText size={15} color={room.color} />
              <span style={{ flex: 1, fontSize: 13, color: '#1e293b' }}>{f.name}</span>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Updated {f.updated}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="AI Context" icon={Brain} color={room.color}>
        <div
          style={{
            padding: 12,
            borderRadius: 8,
            background: room.lightBg,
            border: `1px solid ${room.color}33`,
            fontSize: 13,
            color: '#1e293b',
            lineHeight: 1.6,
          }}
        >
          {data.aiContext}
        </div>
      </Card>
    </>
  )
}

/* ── Tax Room ── */

const STATUS_COLOR = {
  'In Progress': '#3b82f6',
  Pending: '#f59e0b',
  Completed: '#10b981',
  Active: '#10b981',
  Paused: '#f59e0b',
}

function TaxRoom({ data, updateData, room }) {
  const toggleTask = (id) =>
    updateData({ tasks: data.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })

  return (
    <>
      <Card title="Compliance Tasks" icon={CheckCircle2} color={room.color}>
        <TaskList tasks={data.tasks} color={room.color} onToggle={toggleTask} />
      </Card>

      <Card title="Case Files" icon={FileText} color={room.color}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.cases.map((c, i) => {
            const sc = STATUS_COLOR[c.status] || '#64748b'
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
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#1e293b', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
                    Deadline: {c.deadline}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: sc,
                    background: sc + '22',
                    padding: '3px 10px',
                    borderRadius: 20,
                  }}
                >
                  {c.status}
                </span>
              </div>
            )
          })}
        </div>
      </Card>
    </>
  )
}

/* ── Agency Room ── */

function AgencyRoom({ data, updateData, room }) {
  const toggleTask = (id) =>
    updateData({ tasks: data.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })

  return (
    <>
      <Card title="Task List" icon={CheckCircle2} color={room.color}>
        <TaskList tasks={data.tasks} color={room.color} onToggle={toggleTask} />
      </Card>

      <Card title="Meta Ads Campaigns" icon={TrendingUp} color={room.color}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.campaigns.map((c, i) => {
            const sc = STATUS_COLOR[c.status] || '#64748b'
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
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#1e293b', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
                    Budget: {c.budget} &middot; ROAS: {c.roas}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: sc,
                    background: sc + '22',
                    padding: '3px 10px',
                    borderRadius: 20,
                  }}
                >
                  {c.status}
                </span>
              </div>
            )
          })}
        </div>
      </Card>

      <Card title="Automation Logs" color={room.color}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {data.logs.map((l, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 10,
                padding: '6px 0',
                borderBottom: i < data.logs.length - 1 ? '1px solid #f1f5f9' : 'none',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: '#94a3b8',
                  flexShrink: 0,
                  fontFamily: 'monospace',
                  marginTop: 1,
                }}
              >
                {l.time}
              </span>
              <span style={{ fontSize: 12, color: '#475569' }}>{l.action}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

/* ── Self-Care Room ── */

function SelfCareRoom({ data, updateData, room }) {
  const [newNote, setNewNote] = useState('')

  const toggleHabit = (id) =>
    updateData({
      habits: data.habits.map((h) =>
        h.id === id
          ? { ...h, done: !h.done, streak: !h.done ? h.streak + 1 : Math.max(0, h.streak - 1) }
          : h
      ),
    })

  const savePct = Math.round((data.savings.current / data.savings.target) * 100)
  const fmtRp = (n) => 'Rp ' + n.toLocaleString('id-ID')

  const handleSaveNote = () => {
    if (!newNote.trim()) return
    const date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
    updateData({ notes: [{ date, text: newNote.trim() }, ...data.notes] })
    setNewNote('')
  }

  return (
    <>
      <Card title="Habit Tracker" icon={Flame} color={room.color}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.habits.map((h) => (
            <div
              key={h.id}
              onClick={() => toggleHabit(h.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 10px',
                borderRadius: 8,
                background: h.done ? room.lightBg : 'white',
                border: `1px solid ${h.done ? room.color + '44' : '#f1f5f9'}`,
                cursor: 'pointer',
              }}
            >
              {h.done ? (
                <CheckCircle2 size={18} color={room.color} />
              ) : (
                <Circle size={18} color="#cbd5e1" />
              )}
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  color: h.done ? room.color : '#1e293b',
                  fontWeight: h.done ? 500 : 400,
                }}
              >
                {h.name}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Flame size={13} color="#f59e0b" />
                <span style={{ fontSize: 12, color: '#64748b' }}>{h.streak}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Savings Goal" icon={TrendingUp} color={room.color}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: '#64748b' }}>{data.savings.label}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: room.color }}>{savePct}%</span>
          </div>
          <ProgressBar value={savePct} color={room.color} height={10} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 12, color: '#64748b' }}>{fmtRp(data.savings.current)}</span>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>
              Target: {fmtRp(data.savings.target)}
            </span>
          </div>
        </div>
      </Card>

      <Card title="Wellness Notes" icon={Edit3} color={room.color}>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Tulis catatan wellness hari ini..."
          style={{
            width: '100%',
            minHeight: 72,
            padding: '10px 12px',
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            fontSize: 13,
            resize: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            lineHeight: 1.5,
            marginBottom: 8,
          }}
        />
        <button
          onClick={handleSaveNote}
          style={{
            padding: '7px 16px',
            borderRadius: 8,
            background: room.color,
            color: 'white',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: 14,
          }}
        >
          Simpan Catatan
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.notes.map((n, i) => (
            <div
              key={i}
              style={{
                padding: '10px 12px',
                borderRadius: 8,
                background: '#f8fafc',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>{n.date}</div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>{n.text}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

/* ── RoomView (main export) ── */

export default function RoomView({ room, data, updateData }) {
  const roomConfig = getRoom(room)

  let progress
  if (room === 'selfcare') {
    const done = data.habits?.filter((h) => h.done).length ?? 0
    const total = data.habits?.length ?? 1
    progress = Math.round((done / total) * 100)
  } else {
    const done = data.tasks?.filter((t) => t.done).length ?? 0
    const total = data.tasks?.length ?? 1
    progress = Math.round((done / total) * 100)
  }

  const completedLabel =
    room === 'selfcare'
      ? `${data.habits?.filter((h) => h.done).length ?? 0} dari ${data.habits?.length ?? 0} habit selesai hari ini`
      : `${data.tasks?.filter((t) => t.done).length ?? 0} dari ${data.tasks?.length ?? 0} task selesai`

  return (
    <div>
      {/* Room Header */}
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: '18px 20px',
          marginBottom: 20,
          border: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>{roomConfig.label}</h1>
          <span style={{ fontWeight: 700, fontSize: 22, color: roomConfig.color }}>{progress}%</span>
        </div>
        <ProgressBar value={progress} color={roomConfig.color} height={8} />
        <p style={{ marginTop: 8, fontSize: 12, color: '#64748b' }}>{completedLabel}</p>
      </div>

      {room === 'thesis' && (
        <ThesisRoom data={data} updateData={updateData} room={roomConfig} />
      )}
      {room === 'tax' && <TaxRoom data={data} updateData={updateData} room={roomConfig} />}
      {room === 'agency' && (
        <AgencyRoom data={data} updateData={updateData} room={roomConfig} />
      )}
      {room === 'selfcare' && (
        <SelfCareRoom data={data} updateData={updateData} room={roomConfig} />
      )}
    </div>
  )
}
