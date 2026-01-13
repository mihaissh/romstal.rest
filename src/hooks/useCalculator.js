import { useState } from 'react'
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

  const validateInputs = () => {
    const newErrors = {}

    if (!billAmount) {
      newErrors.billAmount = 'Suma facturii este obligatorie'
    } else {
      const num = parseFloat(billAmount)
      if (isNaN(num) || num <= 0) {
        newErrors.billAmount = 'Suma facturii trebuie să fie un număr pozitiv'
      }
    }

    if (!amountPaid) {
      newErrors.amountPaid = 'Suma plătită este obligatorie'
    } else {
      const num = parseFloat(amountPaid)
      if (isNaN(num) || num <= 0) {
        newErrors.amountPaid = 'Suma plătită trebuie să fie un număr pozitiv'
      }
    }

    if (billAmount && amountPaid) {
      const bill = parseFloat(billAmount)
      const paid = parseFloat(amountPaid)
      if (paid < bill) {
        newErrors.amountPaid =
          'Suma plătită trebuie să fie mai mare sau egală cu suma facturii'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = () => {
    if (!validateInputs()) return

    const bill = parseFloat(billAmount)
    const paid = parseFloat(amountPaid)
    const change = paid - bill

    // Round the change according to the rule (145.43 -> 145, 145.67 -> 146)
    const roundedChange = roundChange(change)
    // Calculate breakdown using the rounded amount
    const breakdown = calculateChangeBreakdown(roundedChange)

    // Store original values (reset if this is a new calculation)
    setOriginalChange(roundedChange)
    setOriginalBreakdown(breakdown)
    setOriginalAmountPaid(paid.toString())
    setIsSuggestionApplied(false)

    setTotalChange(roundedChange)
    setChangeBreakdown(breakdown)

    // Find optimal change suggestion (only if change is significant, > 50 lei)
    if (roundedChange > 50) {
      const optimal = findOptimalChange(roundedChange, 20)
      setSuggestion(optimal)
    } else {
      setSuggestion(null)
    }
  }

  const handleApplySuggestion = () => {
    if (!suggestion) return

    const bill = parseFloat(billAmount)
    const newPaid = bill + suggestion.optimalChange
    setAmountPaid(newPaid.toString())

    // Recalculate with new amount
    const newChange = suggestion.optimalChange
    const breakdown = calculateChangeBreakdown(newChange)

    setTotalChange(newChange)
    setChangeBreakdown(breakdown)
    setIsSuggestionApplied(true)
    setSuggestion(null)
  }

  const handleRevertSuggestion = () => {
    if (!originalChange || !originalBreakdown) return

    // Restore original values
    setTotalChange(originalChange)
    setChangeBreakdown(originalBreakdown)
    setAmountPaid(originalAmountPaid)
    setIsSuggestionApplied(false)

    // Recalculate suggestion for original amount
    if (originalChange > 50) {
      const optimal = findOptimalChange(originalChange, 20)
      setSuggestion(optimal)
    } else {
      setSuggestion(null)
    }
  }

  const handleReset = () => {
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
  }

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
    validateInputs,
    handleCalculate,
    handleReset,
    handleApplySuggestion,
    handleRevertSuggestion,
  }
}
