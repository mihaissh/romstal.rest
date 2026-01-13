import CalculatorForm from './components/CalculatorForm'
import ChangeDisplay from './components/ChangeDisplay'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const {
    billAmount,
    amountPaid,
    errors,
    totalChange,
    changeBreakdown,
    suggestion,
    isSuggestionApplied,
    setBillAmount,
    setAmountPaid,
    validateInputs,
    handleCalculate,
    handleReset,
    handleApplySuggestion,
    handleRevertSuggestion,
  } = useCalculator()

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-indigo-950/30 via-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative h-full container mx-auto px-4 py-4 max-w-[1920px] flex flex-col">
        {/* Top: Form with Inputs and Buttons - Small, compact */}
        <div className="mb-3 flex justify-center">
          <CalculatorForm
            billAmount={billAmount}
            amountPaid={amountPaid}
            errors={errors}
            onBillAmountChange={setBillAmount}
            onAmountPaidChange={setAmountPaid}
            onValidate={validateInputs}
            onCalculate={handleCalculate}
            onReset={handleReset}
          />
        </div>

        {/* Bottom: Change Display with Banknotes - Takes second half */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <ChangeDisplay
            totalChange={totalChange}
            changeBreakdown={changeBreakdown}
            suggestion={suggestion}
            isSuggestionApplied={isSuggestionApplied}
            onApplySuggestion={handleApplySuggestion}
            onRevertSuggestion={handleRevertSuggestion}
          />
        </div>
      </div>
    </div>
  )
}

export default App
