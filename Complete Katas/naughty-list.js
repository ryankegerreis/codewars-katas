list = ["Jason", "Jackson", "Jordan", "Johnny"]
kiddos = ["Jason", "Jordan", "Jennifer"]

function findChildren(santasList, children) {
  let naughty = []

  for (let i = 0; i < santasList.length; i++) {
    if (children.includes(santasList[i])) {
      naughty.push(children[i])
    } else {
      return null
    }
  }
  console.log(naughty)
  return naughty
}

findChildren(list, kiddos)