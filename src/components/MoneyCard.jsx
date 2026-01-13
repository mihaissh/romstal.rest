import { formatCurrency } from '../utils/formatters'

function MoneyCard({ denomination, count }) {
  if (count === 0) return null

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    const fallback = e.target.nextElementSibling
    if (fallback) fallback.style.display = 'flex'
  }

  // Color coding based on denomination value
  const getCardColor = () => {
    if (denomination.value >= 200) {
      return 'from-amber-900/40 to-amber-800/30 border-amber-600/40 hover:border-amber-500/60'
    } else if (denomination.value >= 50) {
      return 'from-blue-900/40 to-blue-800/30 border-blue-600/40 hover:border-blue-500/60'
    } else if (denomination.value >= 10) {
      return 'from-purple-900/40 to-purple-800/30 border-purple-600/40 hover:border-purple-500/60'
    } else if (denomination.value >= 1) {
      return 'from-emerald-900/40 to-emerald-800/30 border-emerald-600/40 hover:border-emerald-500/60'
    } else {
      return 'from-cyan-900/40 to-cyan-800/30 border-cyan-600/40 hover:border-cyan-500/60'
    }
  }

  const totalValue = count * denomination.value

  return (
    <div className={`group bg-gradient-to-br ${getCardColor()} backdrop-blur-sm border-2 rounded-xl p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
      {/* First half: Large banknote image */}
      <div className="flex-1 flex items-center justify-center min-h-0 pb-1">
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          <img
            src={denomination.image}
            alt={denomination.symbol}
            className="w-full h-full object-contain"
            onError={handleImageError}
            loading="lazy"
          />
          <div
            className="w-full h-full items-center justify-center text-2xl sm:text-3xl"
            style={{ display: 'none' }}
          >
            {denomination.type === 'bill' ? '💵' : '🪙'}
          </div>
        </div>
      </div>

      {/* Second half: Count and total value */}
      <div className="flex flex-col items-center space-y-1 pt-1">
        <span className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-lg">
          × {count}
        </span>
        <span className="text-sm sm:text-base font-bold text-slate-300">
          {formatCurrency(totalValue)}
        </span>
      </div>
    </div>
  )
}

export default MoneyCard
