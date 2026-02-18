import { denominations } from '../constants/denominations'
import { formatCurrency } from '../utils/formatters'

const tierColor = (value) => {
  if (value >= 100) return '#f0a030'
  if (value >= 10) return '#6c8cff'
  if (value >= 1) return '#4ade80'
  return '#94a3b8'
}

function DenominationRow({ denomination, count, index }) {
  const color = tierColor(denomination.value)
  const isBill = denomination.type === 'bill'

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextElementSibling.style.display = 'flex'
  }

  return (
    <div
      className="flex items-center gap-4 px-4 py-3 rounded-[12px] transition-colors duration-150 group"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        animationDelay: `${index * 40}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--card-hover)'
        e.currentTarget.style.borderColor = 'var(--border-light)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--card)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      {/* Color indicator */}
      <div
        className="w-[3px] h-8 rounded-full flex-shrink-0"
        style={{ background: color }}
      />

      {/* Image */}
      <div
        className="flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg"
        style={{
          width: isBill ? '52px' : '36px',
          height: isBill ? '32px' : '36px',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        <img
          src={denomination.image}
          alt={denomination.symbol}
          className="max-w-full max-h-full object-contain"
          onError={handleImageError}
          loading="lazy"
        />
        <span className="text-base items-center justify-center" style={{ display: 'none' }}>
          {isBill ? '💵' : '🪙'}
        </span>
      </div>

      {/* Label */}
      <span className="text-[13px] font-semibold min-w-[60px]" style={{ color: 'var(--text-1)' }}>
        {denomination.symbol}
      </span>

      {/* Count */}
      <div
        className="flex items-center justify-center min-w-[32px] h-7 px-2.5 rounded-md text-[13px] font-bold"
        style={{
          background: `${color}15`,
          color: color,
          border: `1px solid ${color}25`,
        }}
      >
        ×{count}
      </div>

      {/* Subtotal */}
      <span
        className="ml-auto text-[13px] font-semibold tabular-nums"
        style={{ color: 'var(--text-2)' }}
      >
        {formatCurrency(count * denomination.value)}
      </span>
    </div>
  )
}

function DenominationList({ changeBreakdown }) {
  if (!changeBreakdown) return null

  const bills = denominations.filter(d => d.type === 'bill' && changeBreakdown[d.value] > 0)
  const coins = denominations.filter(d => d.type === 'coin' && changeBreakdown[d.value] > 0)

  if (bills.length === 0 && coins.length === 0) return null

  let globalIndex = 0

  return (
    <div className="space-y-5" aria-label="Detalii rest" role="region">
      {bills.length > 0 && (
        <section aria-label="Bancnote">
          <div className="flex items-center gap-3 mb-3 px-1">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: 'var(--text-3)' }}
            >
              Bancnote
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <div className="space-y-1.5">
            {bills.map((d) => (
              <DenominationRow
                key={d.value}
                denomination={d}
                count={changeBreakdown[d.value]}
                index={globalIndex++}
              />
            ))}
          </div>
        </section>
      )}

      {coins.length > 0 && (
        <section aria-label="Monede">
          <div className="flex items-center gap-3 mb-3 px-1">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: 'var(--text-3)' }}
            >
              Monede
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <div className="space-y-1.5">
            {coins.map((d) => (
              <DenominationRow
                key={d.value}
                denomination={d}
                count={changeBreakdown[d.value]}
                index={globalIndex++}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default DenominationList
