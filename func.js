let hasPlayed = false;
function handleFirstPlay(event) {
  if(hasPlayed === false) {
    hasPlayed = true;

    let vid = event.target;

    vid.onplay = null; 
  }
}


$(document).ready(function(){
    $("button").click(function(){
        var isPlaying=false
        var audio = $(this).next().attr("ambiance.wav");
        var music = new Audio(audio);
        if(isPlaying) {music.pause()} 
        else{music.play();$(this).text("Stop Me")}
    });
});