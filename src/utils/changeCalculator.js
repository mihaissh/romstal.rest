/**
 * Rounds the change amount: if decimal < 0.5 round down, if >= 0.5 round up
 * @param {number} amount - The amount to round
 * @returns {number} - Rounded amount
 */
export function roundChange(amount) {
  const decimal = amount % 1
  if (decimal < 0.5) {
    return Math.floor(amount)
  } else {
    return Math.ceil(amount)
  }
}

/**
 * Calculates the breakdown of change into denominations
 * @param {number} changeAmount - The total change amount in Romanian Lei (should already be rounded)
 * @returns {Object} - Object with denomination values as keys and counts as values
 */
export function calculateChangeBreakdown(changeAmount) {
  // Round to 2 decimal places to avoid floating point errors
  let remaining = Math.round(changeAmount * 100) / 100
  
  const breakdown = {}
  
  // Bill denominations (in lei)
  const bills = [500, 200, 100, 50, 10, 5, 1]
  
  // Coin denominations (in lei) - 50 bani, 10 bani, 5 bani, 1 ban
  const coins = [0.50, 0.10, 0.05, 0.01]
  
  // Calculate bills
  for (const bill of bills) {
    const count = Math.floor(remaining / bill)
    if (count > 0) {
      breakdown[bill] = count
      remaining = Math.round((remaining - count * bill) * 100) / 100
    }
  }
  
  // Calculate coins
  for (const coin of coins) {
    const count = Math.floor(remaining / coin)
    if (count > 0) {
      breakdown[coin] = count
      remaining = Math.round((remaining - count * coin) * 100) / 100
    }
  }
  
  // Handle any remaining amount due to rounding (add to bani)
  if (remaining > 0.001) {
    breakdown[0.01] = (breakdown[0.01] || 0) + Math.round(remaining * 100)
  }
  
  return breakdown
}
