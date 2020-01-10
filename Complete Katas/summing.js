// Summing a number's digits

sumDigits = (number) => {
  const arr = Math.abs(number).toString().split('')
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i])
  }
  let sum = newArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  return sum
}

sumDigits(-45)