import { formatCurrency } from '../utils/formatters'

function SuggestionBar({ suggestion, isSuggestionApplied, onApply, onRevert }) {
  if (isSuggestionApplied) {
    return (
      <div
        className="flex items-center gap-3 px-4 py-2.5 rounded-[12px]"
        style={{
          background: 'rgba(74, 222, 128, 0.06)',
          border: '1px solid rgba(74, 222, 128, 0.15)',
        }}
      >
        <svg className="w-4 h-4 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="flex-1 text-[12px]" style={{ color: 'var(--text-2)' }}>
          Sugestie aplicată
        </span>
        <button
          onClick={onRevert}
          aria-label="Anulează sugestia aplicată"
          className="text-[12px] font-semibold px-2.5 py-1 rounded-md transition-colors duration-150"
          style={{ color: 'var(--gold)' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          Anulează
        </button>
      </div>
    )
  }

  if (!suggestion) return null

  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-[12px]"
      style={{
        background: 'var(--gold-dim)',
        border: '1px solid rgba(240, 160, 48, 0.15)',
      }}
    >
      <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <p className="flex-1 text-[12px]" style={{ color: 'var(--text-2)' }}>
        Cu{' '}
        <span className="font-bold" style={{ color: 'var(--gold)' }}>
          +{formatCurrency(suggestion.extraNeeded)}
        </span>{' '}
        restul devine{' '}
        <span className="font-bold" style={{ color: 'var(--text-1)' }}>
          {formatCurrency(suggestion.optimalChange)}
        </span>
        <span style={{ color: 'var(--text-3)' }}>
          {' '}· {suggestion.piecesSaved} bancnote mai puține
        </span>
      </p>
      <button
        onClick={onApply}
        aria-label="Aplică sugestia de rest optimizat"
        className="text-[12px] font-semibold px-3 py-1.5 rounded-md transition-all duration-150 active:scale-95"
        style={{
          background: 'var(--gold)',
          color: '#0a0a0a',
        }}
      >
        Aplică
      </button>
    </div>
  )
}

export default SuggestionBar
