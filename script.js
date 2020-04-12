document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    var audio = document.querySelector('audio[data-key="' + e.keyCode +'"]');
    var drumButton = document.querySelector('.drum-button[data-key="' + e.keyCode +'"]');
    if(!audio) return; //nic nie zwróci
    audio.currentTime = 0; //sprawia że dźwięki się nie blokują
    audio.play();
    drumButton.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

var drumButtons = document.querySelectorAll('.drum-button');
drumButtons.forEach(function (drumButton) {
    return drumButton.addEventListener('transitionend', removeTransition);
  });