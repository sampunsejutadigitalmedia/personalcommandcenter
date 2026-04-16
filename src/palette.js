export const ROOMS = [
  { id: 'dashboard', label: 'Dashboard', color: '#6366f1', lightBg: '#eef2ff' },
  { id: 'thesis', label: 'Thesis Room', color: '#8b5cf6', lightBg: '#f5f3ff' },
  { id: 'tax', label: 'Tax & Litigation', color: '#f59e0b', lightBg: '#fffbeb' },
  { id: 'agency', label: 'Agency Room', color: '#10b981', lightBg: '#ecfdf5' },
  { id: 'selfcare', label: 'Self-Care Room', color: '#ec4899', lightBg: '#fdf2f8' },
  { id: 'calendar', label: 'Master Calendar', color: '#3b82f6', lightBg: '#eff6ff' },
]

export const getRoom = (id) => ROOMS.find((r) => r.id === id) ?? ROOMS[0]
