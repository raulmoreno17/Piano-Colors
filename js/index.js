var keyQuantity = document.querySelectorAll(".key").length;

//Detecting button click
for (var i = 0; i < keyQuantity; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


//Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makesound(event.key);    //Send the key propety of the event
  buttonAnimation(event.key.toUpperCase());
});



//Make sound for each key
function makesound(key) {
  switch (key.toUpperCase()) {
    case "C":
      var sound = new Audio('sounds/do.mp3');
      sound.play();
      break;
    case "D":
      var sound = new Audio('sounds/re.mp3');
      sound.play();
      break;
    case "E":
      var sound = new Audio('sounds/mi.mp3');
      sound.play();
      break;
    case "F":
      var sound = new Audio('sounds/fa.mp3');
      sound.play();
      break;
    case "G":
      var sound = new Audio('sounds/sol.mp3');
      sound.play();
      break;
    case "A":
      var sound = new Audio('sounds/la.mp3');
      sound.play();
      break;
    case "B":
      var sound = new Audio('sounds/si.mp3');
      sound.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}
