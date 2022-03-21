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

// let photoDivs = () => {
//   const bookList = document.getElementsByClassName('fboxitem');
//   const bookPhotos = document.getElementById('nPhotos');
//   console.log('bookPhotos: ', bookPhotos);
//   console.log('bookList: ', bookList);
// };

// photoDivs();

// const bookSearch = () => {
// let input, filter, div, books, labels, i, bookList, txtValue;
// input = document.getElementById('search-bar');
// filter = input.style.display.toLowerCase()
// div = document.getElementById('main-content');
// books = document.getElementsByClassName('fboxitem');
// labels = document.getElementsByTagName('label');
// console.log('input: ', input, 'filter: ',filter, 'div: ',div, 'books: ', books, 'labels: ', labels);

//   for (i = 0; i < books.length; i++) {
//     bookList = books[0];
//     txtValue = bookList.textContent || bookList.innerHTML;
//     console.log(txtValue);
//     if (txtValue.toLowerCase().indexOf(filter) > -1) {
//       books[i].style.display = " ";
//     } else {
//       books[i].style.display = "none";
//     }
//   }
// }

// bookSearch();

// const bookList = document.getElementsByClassName('names');
// console.log(bookList)

// const searchBar = document.forms['search'].querySelector('input');
// searchBar.addEventListener('keyup', function(e){
//   const text = e.target.value.toLowerCase();
//   const books = bookList.getElementsByTagName('label');
//   Array.from(books).forEach(function(book){
//     const title = book.label.textContent;
//     if(title.toLowerCase().indexOf(text) != -1) {
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
//   });
// });


// const searchBooks = document.querySelector('input');
// const books = document.getElementsByClassName('fboxitem');

// textValue = searchBooks.value.toLowerCase();
// console.log('searchBooks: ', searchBooks, 'books: ', books);



//Adds filter array

//Adds Books to the list

//Adds permission prompt for deletion

//Adds delete books with permission

//Adds hide books from list

//This JavaScript is specifice to the book search query