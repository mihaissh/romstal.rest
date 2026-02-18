import { formatCurrency } from '../utils/formatters'

function ChangeResult({ totalChange }) {
  return (
    <div className="relative text-center py-3" role="status" aria-label={`Rest de dat: ${totalChange} lei`}>
      {/* Subtle glow behind the number */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-20 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(240,160,48,0.08), transparent 70%)' }}
      />
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
        style={{ color: 'var(--text-3)' }}
      >
        Rest de dat
      </p>
      <p
        className="relative text-5xl sm:text-6xl font-extrabold tracking-tight"
        style={{
          background: 'linear-gradient(135deg, #ffc760, #f0a030, #e08820)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {formatCurrency(totalChange)}
      </p>
    </div>
  )
}

export default ChangeResult
