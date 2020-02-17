function removeDuplicateWords(s) {
  let wordArr = []

  for (word of s.split(' ')) {
    if (wordArr.includes(word)) {
      null
    } else {
      wordArr.push(word)
    }
  }
  console.log(wordArr.join(" "))
  return wordArr.join(" ")
}

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')