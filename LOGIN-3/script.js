var usernames = [
    {username: 'john', password: '123'},
    {username: 'albert', password: '234'},
    {username: 'tesla', password: '345'},
  ];

function reee() {
  var user = document.getElementById("uname").value;
  var pass = document.getElementById("pass").value;
  
  for (var i = 0; i < usernames.length; i++){
    if(user != usernames[i].username || pass != usernames[i].password) {
      document.getElementById("status").innerHTML = "The password or username is incorrect"; 
    } else {
      document.getElementById("status").innerHTML = "Welcome " + user;
	  window.location.href = "https://nairaland.com"; // Go to the appropriate page
      break;
    }
    // console.log(usernames[i].password);
  }
}
