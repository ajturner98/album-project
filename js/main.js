let covers = document.querySelectorAll(".cover");
let audio = document.querySelectorAll(".audio");

//hide all players
function hideAll() {
audio.forEach(function(el){
  el.style.display = 'none';
});
}

hideAll();

//click function
covers.forEach(function(el) {
  el.onclick = (e) => {
    hideAll(); //auto hide upon click
//start switch statement
    switch (e.target.getAttribute('id')) {
      case 'dookie':
        document.querySelector('#basket')
        	.style.display = 'block';
        break;
      case 'nimrod':
        document.querySelector('#riddance')
        	.style.display = 'block';
        break;
      case 'amIdiot':
        document.querySelector('#idiot')
        .style.display = 'block';
        break;
      case '21st':
        document.querySelector('#guns')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this
    let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
  } // end of function for clicking

}); // end of forEach()
