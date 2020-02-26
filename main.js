function openNav() {
    document.getElementById("myNav").style.width = "100%";
    setTimeout(function(){document.getElementsByClassName("overlay-content")[0].style.display = "block";}, 300);
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  setTimeout(function(){document.getElementsByClassName("overlay-content")[0].style.display = "none";}, 0);
}



function mySearch(){
  var input, filter, div, i, h2;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("overlay-elements");
  // console.log(div);
  // h2 = div.getElementsByTagName("h2");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    h2 = div[i].getElementsByTagName("h2")[0];
    // console.log(h2);
    if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    }
    else {
      div[i].style.display = "none";
    }
  }
}

function openGithub(){
  window.open("https://github.com/sgkul2000");
}