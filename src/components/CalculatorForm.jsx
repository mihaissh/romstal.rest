import InputField from './InputField'

function CalculatorForm({
  billAmount,
  amountPaid,
  errors,
  onBillAmountChange,
  onAmountPaidChange,
  onValidate,
  onCalculate,
  onReset,
}) {
  const isDisabled = !billAmount || !amountPaid || Object.keys(errors).length > 0

  return (
    <div className="bg-gradient-to-br from-slate-800/70 via-indigo-900/20 to-slate-800/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-indigo-500/20 p-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <InputField
            label="Suma factură (lei)"
            value={billAmount}
            onChange={(e) => onBillAmountChange(e.target.value)}
            onBlur={onValidate}
            placeholder="201.45"
            error={errors.billAmount}
            step="0.01"
            min="0"
          />

          <InputField
            label="Suma plătită (lei)"
            value={amountPaid}
            onChange={(e) => onAmountPaidChange(e.target.value)}
            onBlur={onValidate}
            placeholder="500.00"
            error={errors.amountPaid}
            step="0.01"
            min="0"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            onClick={onCalculate}
            disabled={isDisabled}
            className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 text-white rounded-xl font-bold text-sm shadow-2xl shadow-primary-500/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-primary-500/60 hover:scale-[1.03] active:scale-[0.97] disabled:hover:scale-100 overflow-hidden border-2 border-primary-400/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculează
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button
            onClick={onReset}
            className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 text-slate-100 rounded-xl font-bold text-sm border-2 border-slate-500/50 transition-all duration-300 hover:from-slate-500 hover:via-slate-600 hover:to-slate-500 hover:border-slate-400 hover:scale-[1.03] active:scale-[0.97] shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Resetează
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorForm
