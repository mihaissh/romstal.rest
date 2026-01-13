import { formatCurrency } from '../utils/formatters'

function ChangeSuggestion({ suggestion, onApplySuggestion }) {
  if (!suggestion) return null

  return (
    <div className="mx-auto max-w-md bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-blue-500/15 border-2 border-blue-500/40 rounded-xl p-3 backdrop-blur-sm shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center border border-blue-400/40 flex-shrink-0 mt-0.5">
            <span className="text-sm">💡</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-300 leading-relaxed">
              Dacă clientul dă încă <span className="font-bold text-blue-400">{formatCurrency(suggestion.extraNeeded)}</span>, vei returna <span className="font-bold text-indigo-400">{formatCurrency(suggestion.optimalChange)}</span> folosind <span className="font-bold text-emerald-400">{suggestion.piecesSaved} bancnote mai puține</span>.
            </p>
          </div>
        </div>
        <button
          onClick={onApplySuggestion}
          className="group relative px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-xs font-bold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap overflow-hidden border border-blue-400/30 flex-shrink-0 self-center sm:self-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Aplică
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
        </button>
      </div>
    </div>
  )
}

export default ChangeSuggestion
