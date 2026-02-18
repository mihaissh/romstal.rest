import { useState, useCallback } from 'react'
import { calculateChangeBreakdown, roundChange } from '../utils/changeCalculator'
import { findOptimalChange } from '../utils/changeOptimizer'

export function useCalculator() {
  const [billAmount, setBillAmount] = useState('')
  const [amountPaid, setAmountPaid] = useState('')
  const [changeBreakdown, setChangeBreakdown] = useState(null)
  const [totalChange, setTotalChange] = useState(null)
  const [suggestion, setSuggestion] = useState(null)
  const [originalChange, setOriginalChange] = useState(null)
  const [originalBreakdown, setOriginalBreakdown] = useState(null)
  const [originalAmountPaid, setOriginalAmountPaid] = useState(null)
  const [isSuggestionApplied, setIsSuggestionApplied] = useState(false)
  const [errors, setErrors] = useState({})

  const handleCalculate = useCallback(() => {
    const newErrors = {}
    const bill = parseFloat(billAmount)
    const paid = parseFloat(amountPaid)

    if (!billAmount || isNaN(bill) || bill <= 0) {
      newErrors.billAmount = 'Introdu o sumă validă'
    }
    if (!amountPaid || isNaN(paid) || paid <= 0) {
      newErrors.amountPaid = 'Introdu o sumă validă'
    }
    if (!newErrors.billAmount && !newErrors.amountPaid && paid < bill) {
      newErrors.amountPaid = 'Suma plătită e mai mică decât factura'
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const change = paid - bill
    if (change === 0) {
      setTotalChange(0)
      setChangeBreakdown({})
      setSuggestion(null)
      setOriginalChange(0)
      setOriginalBreakdown({})
      setOriginalAmountPaid(paid.toString())
      setIsSuggestionApplied(false)
      return
    }

    const roundedChange = roundChange(change)
    const breakdown = calculateChangeBreakdown(roundedChange)

    setOriginalChange(roundedChange)
    setOriginalBreakdown(breakdown)
    setOriginalAmountPaid(paid.toString())
    setIsSuggestionApplied(false)

    setTotalChange(roundedChange)
    setChangeBreakdown(breakdown)

    if (roundedChange > 50) {
      setSuggestion(findOptimalChange(roundedChange, 20))
    } else {
      setSuggestion(null)
    }
  }, [billAmount, amountPaid])

  const handleApplySuggestion = useCallback(() => {
    if (!suggestion) return

    const bill = parseFloat(billAmount)
    const newPaid = bill + suggestion.optimalChange
    setAmountPaid(newPaid.toString())

    const newChange = suggestion.optimalChange
    const breakdown = calculateChangeBreakdown(newChange)

    setTotalChange(newChange)
    setChangeBreakdown(breakdown)
    setIsSuggestionApplied(true)
    setSuggestion(null)
  }, [suggestion, billAmount])

  const handleRevertSuggestion = useCallback(() => {
    if (originalChange == null || !originalBreakdown) return

    setTotalChange(originalChange)
    setChangeBreakdown(originalBreakdown)
    setAmountPaid(originalAmountPaid)
    setIsSuggestionApplied(false)

    if (originalChange > 50) {
      setSuggestion(findOptimalChange(originalChange, 20))
    } else {
      setSuggestion(null)
    }
  }, [originalChange, originalBreakdown, originalAmountPaid])

  const handleReset = useCallback(() => {
    setBillAmount('')
    setAmountPaid('')
    setChangeBreakdown(null)
    setTotalChange(null)
    setSuggestion(null)
    setOriginalChange(null)
    setOriginalBreakdown(null)
    setOriginalAmountPaid(null)
    setIsSuggestionApplied(false)
    setErrors({})
  }, [])

  return {
    billAmount,
    amountPaid,
    errors,
    totalChange,
    changeBreakdown,
    suggestion,
    isSuggestionApplied,
    setBillAmount,
    setAmountPaid,
    handleCalculate,
    handleReset,
    handleApplySuggestion,
    handleRevertSuggestion,
  }
}
