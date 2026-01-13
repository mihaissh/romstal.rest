import { calculateChangeBreakdown } from './changeCalculator'

/**
 * Counts the total number of bills and coins needed for a change amount
 * @param {number} changeAmount - The change amount
 * @returns {number} - Total count of bills and coins
 */
function countTotalPieces(changeAmount) {
  const breakdown = calculateChangeBreakdown(changeAmount)
  return Object.values(breakdown).reduce((sum, count) => sum + count, 0)
}

/**
 * Finds an optimal change amount that uses fewer banknotes/coins
 * Checks amounts from currentChange to currentChange + maxExtra
 * @param {number} currentChange - Current change amount
 * @param {number} maxExtra - Maximum extra amount to check (default 20)
 * @returns {Object|null} - { optimalChange, extraNeeded, piecesSaved } or null if no better option
 */
export function findOptimalChange(currentChange, maxExtra = 20) {
  const currentPieces = countTotalPieces(currentChange)
  
  let bestChange = currentChange
  let bestPieces = currentPieces
  let bestExtra = 0

  // Check amounts from +1 to +maxExtra
  for (let extra = 1; extra <= maxExtra; extra++) {
    const testChange = currentChange + extra
    const testPieces = countTotalPieces(testChange)
    
    // If this uses fewer pieces, it's better
    if (testPieces < bestPieces) {
      bestChange = testChange
      bestPieces = testPieces
      bestExtra = extra
    }
  }

  // Only suggest if it saves at least 2 pieces (worth the extra money)
  if (bestExtra > 0 && (currentPieces - bestPieces) >= 2) {
    return {
      optimalChange: bestChange,
      extraNeeded: bestExtra,
      piecesSaved: currentPieces - bestPieces,
      currentPieces,
      optimalPieces: bestPieces,
    }
  }

  return null
}
