//Wolf in Sheeps Clothing

function warnTheSheep(queue) {

  let reverse = queue.reverse()
  
  console.log(reverse)
  
  if (reverse[0] === 'wolf'){
    return ("Pls go away and stop eating my sheep");
  }
  
    for (i=0;i<reverse.length;i++) {
      if (reverse[i]=='wolf') {
        return "Oi! Sheep number " + (i) + "! You are about to be eaten by a wolf!"
        // console.log("Pls go away and stop eating my sheep");
  //     } else if {
      
      }
    }
  }

