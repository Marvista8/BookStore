//this for the topnavigation. Uses the icon and responsive menu for all devices.

function myFunction() {
    let x = document.getElementById("Topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//This is for the Book Genres

let bookGenres = () => {
  for( i=0; i < array.length; i++)
    if(array[i] == 0) {
        array[i] = newValue;
        break;
    }
}   

//Example array sort

const numbers = [75, 8, 34, 26, 4, 0, 52] ;

numbers.sort(compareNumbers) ;

console.log(numbers) ;

function compareNumbers (a, b) {
  return a - b; 
}


//Adds filter array

//Adds Books to the list

//Adds permission prompt for deletion

//Adds delete books with permission

//Adds hide books from list

//This JavaScript is specifice to the book search query.