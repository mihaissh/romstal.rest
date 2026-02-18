import { useCalculator } from './hooks/useCalculator'
import CalculatorInput from './components/CalculatorInput'
import ChangeResult from './components/ChangeResult'
import DenominationList from './components/DenominationList'
import SuggestionBar from './components/SuggestionBar'

function App() {
  const calc = useCalculator()
  const hasResult = calc.totalChange !== null

  return (
    <div className="h-full flex justify-center overflow-hidden relative">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #f0a030, transparent 70%)' }}
      />

      <div className="relative z-10 flex h-full w-full max-w-4xl">
        {/* Left — inputs */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center px-6 py-6">
          <CalculatorInput
            billAmount={calc.billAmount}
            amountPaid={calc.amountPaid}
            errors={calc.errors}
            onBillAmountChange={calc.setBillAmount}
            onAmountPaidChange={calc.setAmountPaid}
            onCalculate={calc.handleCalculate}
            onReset={calc.handleReset}
          />
        </div>

        {/* Right — results */}
        <div className="w-1/2 h-full overflow-y-auto" role="region" aria-label="Rezultat rest" aria-live="polite">
          {hasResult ? (
            <div className="min-h-full flex items-center justify-center py-6 px-6">
              <div className="w-full space-y-5">
                <ChangeResult totalChange={calc.totalChange} />
                <SuggestionBar
                  suggestion={calc.suggestion}
                  isSuggestionApplied={calc.isSuggestionApplied}
                  onApply={calc.handleApplySuggestion}
                  onRevert={calc.handleRevertSuggestion}
                />
                <DenominationList changeBreakdown={calc.changeBreakdown} />
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>
                Introdu sumele pentru a calcula restul
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
