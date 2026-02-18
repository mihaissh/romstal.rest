import { useRef, useEffect } from 'react'

function CalculatorInput({
  billAmount,
  amountPaid,
  errors,
  onBillAmountChange,
  onAmountPaidChange,
  onCalculate,
  onReset,
}) {
  const billRef = useRef(null)

  useEffect(() => {
    billRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    onCalculate()
  }

  const handleInput = (setter) => (e) => {
    const val = e.target.value
    if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
      setter(val)
    }
  }

  const inputClasses = (hasError) =>
    `w-full h-11 px-3 text-[15px] font-medium rounded-[10px] outline-none transition-all duration-150 ` +
    `[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ` +
    (hasError
      ? 'text-red-300 placeholder-red-400/40'
      : 'text-[var(--text-1)] placeholder-[var(--text-3)]')

  const inputStyle = (hasError) => ({
    background: hasError ? 'rgba(239,68,68,0.08)' : 'var(--card)',
    border: hasError ? '1px solid rgba(239,68,68,0.3)' : '1px solid var(--border)',
    boxShadow: 'none',
  })

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-7" noValidate>
      <fieldset className="space-y-4" style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend className="sr-only">Calculator rest</legend>

        <div>
          <label
            htmlFor="bill-amount"
            className="block text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5"
            style={{ color: 'var(--text-2)' }}
          >
            Suma factură (lei)
          </label>
          <input
            ref={billRef}
            id="bill-amount"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={billAmount}
            onChange={handleInput(onBillAmountChange)}
            placeholder="0.00"
            aria-invalid={!!errors.billAmount}
            aria-describedby={errors.billAmount ? 'bill-error' : undefined}
            className={inputClasses(errors.billAmount)}
            style={inputStyle(errors.billAmount)}
          />
          {errors.billAmount && (
            <p id="bill-error" role="alert" className="mt-1.5 text-[11px] text-red-400">
              {errors.billAmount}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="amount-paid"
            className="block text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5"
            style={{ color: 'var(--text-2)' }}
          >
            Suma plătită (lei)
          </label>
          <input
            id="amount-paid"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={amountPaid}
            onChange={handleInput(onAmountPaidChange)}
            placeholder="0.00"
            aria-invalid={!!errors.amountPaid}
            aria-describedby={errors.amountPaid ? 'paid-error' : undefined}
            className={inputClasses(errors.amountPaid)}
            style={inputStyle(errors.amountPaid)}
          />
          {errors.amountPaid && (
            <p id="paid-error" role="alert" className="mt-1.5 text-[11px] text-red-400">
              {errors.amountPaid}
            </p>
          )}
        </div>
      </fieldset>

      <div className="flex gap-2 mt-8">
        <button
          type="submit"
          className="flex-1 h-11 font-semibold text-[13px] rounded-[10px] transition-all duration-150 active:scale-[0.97] disabled:opacity-25 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
          style={{ background: 'var(--gold)', color: '#0a0a0a' }}
        >
          Calculează
        </button>
        <button
          type="button"
          onClick={onReset}
          className="h-11 px-4 font-medium text-[13px] rounded-[10px] transition-all duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
          style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
        >
          Reset
        </button>
      </div>

      <p className="text-[10px] text-center" style={{ color: 'var(--text-3)' }}>
        Completează ambele câmpuri și apasă Enter
      </p>
    </form>
  )
}

export default CalculatorInput
