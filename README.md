# Marsya Command Center 🏠

A personal Life OS dashboard built with React + Vite. Manage thesis, tax & litigation, agency work, self-care habits, and a master calendar — all in one place.

## Features

- **Dashboard** — Unified goal progress, today's priorities, quick actions
- **Thesis Room** — Task management, file tracking, AI contextual assistant
- **Tax & Litigation Room** — Compliance tasks, case files, deadline tracking
- **Agency Room** — Content calendar, Meta Ads tracking, automation logs
- **Self-Care Room** — Habit tracker, wellness notes, savings goal
- **Master Calendar** — April 2025 calendar with all rooms consolidated
- **Quick Note Modal** — Capture notes from anywhere in the app
- **Collapsible Sidebar** — Clean navigation with room color indicators

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-username/marsya-command-center.git
cd marsya-command-center
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
marsya-command-center/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CalendarView.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── QuickNoteModal.jsx
│   │   ├── RoomView.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── palette.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy

The vercel.json config handles SPA routing automatically.

## Tech Stack
- React 18
- Vite 5
- lucide-react
- Google Fonts (Inter)

## License
MIT
