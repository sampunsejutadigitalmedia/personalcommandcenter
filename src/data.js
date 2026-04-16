export const initialState = {
  thesis: {
    progress: 45,
    tasks: [
      { id: 1, text: 'Complete literature review', done: false, due: '20 Apr' },
      { id: 2, text: 'Write methodology chapter', done: true, due: '15 Apr' },
      { id: 3, text: 'Data collection & analysis', done: false, due: '1 May' },
      { id: 4, text: 'Submit draft to supervisor', done: false, due: '15 May' },
    ],
    files: [
      { name: 'Literature Review Draft.docx', updated: '10 Apr' },
      { name: 'Research Data.xlsx', updated: '12 Apr' },
      { name: 'Thesis Outline.pdf', updated: '8 Apr' },
    ],
    aiContext: 'Topik riset: Dampak Digital Marketing terhadap Pertumbuhan UKM di Indonesia',
  },
  tax: {
    progress: 60,
    tasks: [
      { id: 1, text: 'File quarterly VAT report', done: true, due: '15 Apr' },
      { id: 2, text: 'Review client case documents', done: false, due: '18 Apr' },
      { id: 3, text: 'Prepare court submission', done: false, due: '25 Apr' },
      { id: 4, text: 'Annual tax filing', done: false, due: '30 Apr' },
    ],
    cases: [
      { name: 'PT ABC – Tax Dispute 2024', status: 'In Progress', deadline: '25 Apr' },
      { name: 'CV XYZ – VAT Appeal', status: 'Pending', deadline: '10 May' },
      { name: 'Client D – Annual Filing', status: 'Completed', deadline: '15 Apr' },
    ],
  },
  agency: {
    progress: 70,
    tasks: [
      { id: 1, text: 'April content calendar', done: true, due: '1 Apr' },
      { id: 2, text: 'Review Meta Ads performance', done: false, due: '17 Apr' },
      { id: 3, text: 'Client proposal – Brand X', done: false, due: '20 Apr' },
      { id: 4, text: 'Social media batch scheduling', done: false, due: '19 Apr' },
    ],
    campaigns: [
      { name: 'Brand A – Ramadan Campaign', budget: 'Rp 5.000.000', roas: '3.2x', status: 'Active' },
      { name: 'Brand B – Product Launch', budget: 'Rp 3.000.000', roas: '2.8x', status: 'Active' },
      { name: 'Brand C – Brand Awareness', budget: 'Rp 2.000.000', roas: '1.9x', status: 'Paused' },
    ],
    logs: [
      { action: 'Scheduled 5 posts for Brand A', time: '08:00' },
      { action: 'Performance report generated for Brand B', time: '09:30' },
      { action: 'Ad budget alert triggered', time: '14:00' },
    ],
  },
  selfcare: {
    progress: 55,
    habits: [
      { id: 1, name: 'Morning exercise', streak: 5, done: false },
      { id: 2, name: 'Meditation 10 min', streak: 3, done: true },
      { id: 3, name: 'Read 20 pages', streak: 7, done: false },
      { id: 4, name: 'Sleep before 23:00', streak: 2, done: true },
      { id: 5, name: 'Drink 2L water', streak: 4, done: false },
    ],
    savings: { current: 3500000, target: 10000000, label: 'Dana Darurat' },
    notes: [
      { date: '15 Apr', text: 'Produktif hari ini. Berhasil selesaikan 3 task.' },
      { date: '14 Apr', text: 'Sedikit lelah tapi tetap konsisten dengan habits.' },
    ],
  },
  quickNotes: [],
}
