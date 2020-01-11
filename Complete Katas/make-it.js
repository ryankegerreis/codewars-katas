// Will you make it ?
zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const potential = mpg * fuelLeft
  const answer = potential >= distanceToPump ? true : false
  return answer
}

zeroFuel(50, 25, 2)