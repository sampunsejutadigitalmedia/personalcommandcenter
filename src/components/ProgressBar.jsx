export default function ProgressBar({ value, color, height = 8 }) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div
      style={{
        background: '#f1f5f9',
        borderRadius: 100,
        height,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${clamped}%`,
          height: '100%',
          background: color,
          borderRadius: 100,
          transition: 'width 0.5s ease',
        }}
      />
    </div>
  )
}
