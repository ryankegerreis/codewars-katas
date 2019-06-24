// Complete the solution so that it reverses all of the words within the string passed in.

let str = "This is a string."

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}