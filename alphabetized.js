function alphabetized(s) {
  newStr = s.replace(/[^A-Z]/ig, "").split("").map((a, i) => [a, i]).sort((a, b) => a[0].toLowerCase().charCodeAt(0) > b[0].toLowerCase().charCodeAt(0) ? 1 : a[0].toLowerCase().charCodeAt(0) < b[0].toLowerCase().charCodeAt(0) ? -1 : a[1] - b[1]);

  return newStr.map(a => a[0]).join("");
}

alphabetized('The Holy Bible')