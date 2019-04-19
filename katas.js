//Wolf in Sheeps Clothing

// function warnTheSheep(queue) {

//   let reverse = queue.reverse()

//   console.log(reverse)

//   if (reverse[0] === 'wolf'){
//     return ("Pls go away and stop eating my sheep");
//   }

//     for (i=0;i<reverse.length;i++) {
//       if (reverse[i]=='wolf') {
//         return "Oi! Sheep number " + (i) + "! You are about to be eaten by a wolf!"
//         // console.log("Pls go away and stop eating my sheep");
//   //     } else if {

//       }
//     }
//   }

//Sum Arrays

// function sum (numbers) {
//   let counter=0;
//   for (i=0;i<numbers.length;i++){
//   counter += numbers[i];
//     }

//     return counter;
//   };

//Take a Ten Minute Walk (Finish and turn in)

// var distance = 0;
// function walking() {
//   for (i = 0; TreeWalker.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         distance++;
//         break;
//       case "e":
//         distance++;
//         break;
//       case "s":
//         distance--;
//         break;
//       case "w":
//         distance--;
//         break;
//     }
//     if (distance == 0 && walk.length == 10) {
//       return true;
//     }
//   }
// }

// What's Up Next?

function nextItem(xs, item) {
  for (i=0;i<xs.length;i++) {
   return xs.find(item,[i]-1);
  }
}