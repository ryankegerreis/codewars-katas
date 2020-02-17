function digitize(n) {
  console.log(n.toString().split('').reverse().map((x) => Number(x)))
}

digitize(35231)