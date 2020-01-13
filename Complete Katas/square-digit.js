
let squareDigit = (num) => {
  let arr = num.toString().split('')
  const square = arr.map(numbers => numbers * numbers)
  const total = square.join('')

  return +total
}

squareDigit(9119)