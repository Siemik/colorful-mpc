document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    var audio = document.querySelector('audio[data-key="' + e.keyCode +'"]');
    if(!audio) return; //nic nie zwróci
     audio.play();
});