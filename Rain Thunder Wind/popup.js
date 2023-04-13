document.addEventListener('DOMContentLoaded', function() {
    var rainButton = document.getElementById("rain");
    var thunderButton = document.getElementById("thunder");
    var windButton = document.getElementById("wind");
    var rainSound = new Audio('rain.mp3');
    var thunderSound = new Audio('thunder.mp3');
    var windSound = new Audio('wind.mp3');
  
    if (rainButton) {
      rainButton.addEventListener("click", function() {
        if (rainButton.classList.contains("active")) {
          rainButton.classList.remove("active");
          stopSound(rainSound);
        } else {
          rainButton.classList.add("active");
          playSound(rainSound);
        }
      });
    }
  
    if (thunderButton) {
      thunderButton.addEventListener("click", function() {
        if (thunderButton.classList.contains("active")) {
          thunderButton.classList.remove("active");
          stopSound(thunderSound);
        } else {
          thunderButton.classList.add("active");
          playSound(thunderSound);
        }
      });
    }
  
    if (windButton) {
      windButton.addEventListener("click", function() {
        if (windButton.classList.contains("active")) {
          windButton.classList.remove("active");
          stopSound(windSound);
        } else {
          windButton.classList.add("active");
          playSound(windSound);
        }
      });
    }
  
    function playSound(sound) {
      sound.currentTime = 0;
      sound.play();
    }
  
    function stopSound(sound) {
      sound.pause();
    }
  });
  