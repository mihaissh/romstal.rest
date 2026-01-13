// Image paths for Romanian money
// Images are in public/images/money/ directory
export const moneyImages = {
  500: '/images/money/500 lei.jpg',
  200: '/images/money/200_lei._Romania,_2006_a.jpg',
  100: '/images/money/100_lei._Romania.jpg',
  50: '/images/money/50_lei._Romania,_2005_a.jpg',
  10: '/images/money/10_lei.jpg',
  5: '/images/money/5_lei._Romania,_2005_a.jpg',
  1: '/images/money/1_leu._Romania,_2005_a.jpg',
  0.50: '/images/money/50-bani.png', // Placeholder - add coin image if available
  0.10: '/images/money/10-bani.png', // Placeholder - add coin image if available
  0.05: '/images/money/5-bani.png', // Placeholder - add coin image if available
  0.01: '/images/money/1-ban.png', // Placeholder - add coin image if available
}

export const denominations = [
  { name: 'Cinci sute', value: 500, symbol: '500 lei', type: 'bill', image: moneyImages[500] },
  { name: 'Două sute', value: 200, symbol: '200 lei', type: 'bill', image: moneyImages[200] },
  { name: 'O sută', value: 100, symbol: '100 lei', type: 'bill', image: moneyImages[100] },
  { name: 'Cincizeci', value: 50, symbol: '50 lei', type: 'bill', image: moneyImages[50] },
  { name: 'Zece', value: 10, symbol: '10 lei', type: 'bill', image: moneyImages[10] },
  { name: 'Cinci', value: 5, symbol: '5 lei', type: 'bill', image: moneyImages[5] },
  { name: 'Un leu', value: 1, symbol: '1 leu', type: 'bill', image: moneyImages[1] },
  { name: 'Cincizeci bani', value: 0.50, symbol: '50 bani', type: 'coin', image: moneyImages[0.50] },
  { name: 'Zece bani', value: 0.10, symbol: '10 bani', type: 'coin', image: moneyImages[0.10] },
  { name: 'Cinci bani', value: 0.05, symbol: '5 bani', type: 'coin', image: moneyImages[0.05] },
  { name: 'Un ban', value: 0.01, symbol: '1 ban', type: 'coin', image: moneyImages[0.01] },
]
