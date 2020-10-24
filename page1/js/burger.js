let button = document.getElementById("menu");
button.addEventListener('click', event => myFunction());




function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementsByClassName("ul-menu")[0];
  if (x.style.display === "flex") {
  	y.style.display = "flex";
    x.style.display = "none";
  } 
  else {
    x.style.display = 'flex';
    y.style.display = "none";
  }

}

var x = document.getElementById("myLinks");
var y = document.getElementsByClassName("ul-menu")[0];

if (window.innerWidth > 480)
  {
  	x.style.display = 'none';
  	y.style.display = "flex";
  }



  let weight = document.documentElement.getBoundingClientRect().bottom;
  window.addEventListener('scroll', function() {
  let scroll = pageYOffset;
  let precent = scroll / (weight / 100);
  console.log(precent);

  if (precent >= 25)
  {
  	document.getElementsByClassName('block-info')[0].style.display = 'inline-block';
  }
  if (precent >= 66)
  {
  	document.getElementsByClassName('block-info-1')[0].style.display = 'inline-block';
  }
});