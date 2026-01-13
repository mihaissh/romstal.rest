import { formatCurrency } from '../utils/formatters'
import MoneyCard from './MoneyCard'
import ChangeSuggestion from './ChangeSuggestion'
import { denominations } from '../constants/denominations'

function ChangeDisplay({ totalChange, changeBreakdown, suggestion, isSuggestionApplied, onApplySuggestion, onRevertSuggestion }) {
  return (
    <div className="h-full flex flex-col">
      {totalChange !== null ? (
        <>
          <div className="space-y-3 mb-3">
            {!isSuggestionApplied && (
              <ChangeSuggestion suggestion={suggestion} onApplySuggestion={onApplySuggestion} />
            )}
            
            {isSuggestionApplied && (
              <div className="mx-auto max-w-md bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border-2 border-amber-500/40 rounded-xl p-3 backdrop-blur-sm shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border border-amber-400/40 flex-shrink-0">
                      <span className="text-sm">⚠️</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Sugestie aplicată
                    </p>
                  </div>
                  <button
                    onClick={onRevertSuggestion}
                    className="group relative px-3 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg text-xs font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap overflow-hidden border border-amber-400/30 flex-shrink-0"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Revino
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-orange-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                  </button>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-center gap-4 py-3">
              <span className="text-base font-bold text-slate-300">
                Rest Total:
              </span>
              <div className="px-6 py-3 bg-gradient-to-r from-emerald-500/25 via-primary-500/25 to-emerald-600/25 backdrop-blur-sm text-emerald-300 border-2 border-emerald-500/40 rounded-xl text-xl font-extrabold shadow-2xl shadow-emerald-500/20">
                {formatCurrency(totalChange)}
              </div>
            </div>
          </div>

          {changeBreakdown && (
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-slate-700"></div>
                <h2 className="text-lg font-bold text-slate-200 px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/20 rounded-lg">
                  Detalii Rest
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-700 via-slate-700 to-transparent"></div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center place-content-center">
                {denominations.map((denomination) => (
                  <MoneyCard
                    key={denomination.value}
                    denomination={denomination}
                    count={changeBreakdown[denomination.value] || 0}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm font-medium">Introduceți sumele pentru a calcula restul</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChangeDisplay
