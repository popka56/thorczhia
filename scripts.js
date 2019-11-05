//To Top Button 
var topButton = document.getElementById("topAnchor");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(screen.width > 850){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("topAnchor").style.visibility = "visible";
    } else {
      document.getElementById("topAnchor").style.visibility = "hidden";
    }
  }
  }

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Search exempel jag kan göra själv med lite jobb
formElementName = document.getElementById('form-submit');

function search(){
    var words = document.getElementById('searchbar').value;
    if(words == 'world'){
        window.location.href='pageName.html';
    }
    else{
        window.location.href='errorPageName.html';
    }
}

formElementName.addEventListener('submit', search);
