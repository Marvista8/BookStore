//this fot the topnaviation.
function myFunction() {
    let x = document.getElementById("Topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function store() {

  let fname = document.getElementById('fname') ;
  let lname = document.getElementById('lname') ;
  let email = document.getElementById('email') ;
  let pswd = document.getElementById('pswd') ;

  if(fname.value.length == 0) {
    alert('Please fill in first name');
  } else if (lname.value.length == 0) {
    alert('Please fill out last name') ;
  } else if (fname.value.length == 0 && lname.value.length == 0) {
    alert('please fill out first and last name') ;
  } else if(email.value.length == 0) {
    alert('please fill out your email') ;
  } else if(pswd.value.length == 0) {
    alert('please fill out you password') ;
  } else {
    localStorage.setItem('fname', fname.value) ;
    localStorage.setItem('lname', lname.value) ;
    localStorage.setItem('email', email.value) ;
    localStorage.setItem('pswd', pswd.value) ;
    alert('Your account has been created') ;
  }
}

function check() {
  let storedName = localStorage.getItem('fname', 'lname') ;
  let storedEmail = localStorage.getItem('email') ;

  let userName = localStorage.getItem('email') ;
  let userPswd = localStorage.getItem('pswd') ;

  if (fname.value, lname.value == storedName && email.value == storedEmail && userName.value == email.value && userPswd.value == pwsd) {
    alert('Your account has been created') ;
  }else if(storedEmail.value == userPswd.value ) {
    window.open('/profile.html') ;
  }else {
    alert('Error on login') ;
  }
}


  
