//this for the topnavigation. Uses the icon and responsive menu for all devices.
function myFunction() {                          
    let top = document.getElementById("Topnav");
    if (top.className === "topnav") {
      top.className += " responsive";
    } else {
      top.className = "topnav";
    }
  };

//Logo onclick goes to home page.
const  myHome  = () => {
  const homeBtn = document.querySelector('svg');
  homeBtn.addEventListener('click', function(e) {
    e.target = window.location.href='index.html';
  })
};

let photoDivs = () => {
  const bookList = document.getElementsByClassName('fboxitem');
  const bookPhotos = document.getElementById('nPhotos');
  console.log('bookPhotos: ', bookPhotos);
  console.log('bookList: ', bookList);
};

const bookSearch = () => {
  let input = document.getElementById('search-bar');
  let filter = input.value.toLowerCase();
  let bookContainer = document.getElementById
  console.log('input: ', input);
  console.log('filter: ', filter);
}

bookSearch();


//Adds filter array

//Adds Books to the list

//Adds permission prompt for deletion

//Adds delete books with permission

//Adds hide books from list

//This JavaScript is specifice to the book search query.