import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import RoomView from './components/RoomView.jsx'
import CalendarView from './components/CalendarView.jsx'
import QuickNoteModal from './components/QuickNoteModal.jsx'
import { initialState } from './data.js'

export default function App() {
  const [activeRoom, setActiveRoom] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [data, setData] = useState(initialState)

  const updateRoomData = (room, updates) => {
    setData((prev) => ({ ...prev, [room]: { ...prev[room], ...updates } }))
  }

  const addNote = (text) => {
    const date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
    setData((prev) => ({
      ...prev,
      quickNotes: [{ id: Date.now(), text, date }, ...prev.quickNotes],
    }))
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        activeRoom={activeRoom}
        setActiveRoom={setActiveRoom}
        isOpen={sidebarOpen}
        toggle={() => setSidebarOpen((v) => !v)}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          activeRoom={activeRoom}
          onNoteClick={() => setShowNoteModal(true)}
        />
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {activeRoom === 'dashboard' && (
            <Dashboard data={data} setActiveRoom={setActiveRoom} />
          )}
          {activeRoom === 'calendar' && <CalendarView data={data} />}
          {['thesis', 'tax', 'agency', 'selfcare'].includes(activeRoom) && (
            <RoomView
              room={activeRoom}
              data={data[activeRoom]}
              updateData={(updates) => updateRoomData(activeRoom, updates)}
            />
          )}
        </main>
      </div>
      {showNoteModal && (
        <QuickNoteModal
          onClose={() => setShowNoteModal(false)}
          onSave={addNote}
          notes={data.quickNotes}
        />
      )}
    </div>
  )
}
