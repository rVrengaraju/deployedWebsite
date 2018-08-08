

$(document).ready(function() {                              // picture 1

    var x = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music1').click(function() {
      if(x === false){
        audioElement.play();
        x = true;
      }
      else{
        audioElement.pause();
        x = false;
      }
    });
});

$(document).ready(function() {                              // picture 2

    var y = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music2').click(function() {
      if(y === false){
        audioElement.play();
        y = true;
      }
      else{
        audioElement.pause();
        y = false;
      }
    });
});

$(document).ready(function() {                              // picture 3

    var q = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music3').click(function() {
      if(q === false){
        audioElement.play();
        q = true;
      }
      else{
        audioElement.pause();
        q = false;
      }
    });
});

$(document).ready(function() {                              // picture 4

    var t = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music4').click(function() {
      if(t === false){
        audioElement.play();
        t = true;
      }
      else{
        audioElement.pause();
        t = false;
      }
    });
});

$(document).ready(function() {                              // picture 5

    var r = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music5').click(function() {
      if(r === false){
        audioElement.play();
        r = true;
      }
      else{
        audioElement.pause();
        r = false;
      }
    });
});

$(document).ready(function() {                              // picture 6

    var v = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'butterfly.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#music6').click(function() {
      if(v === false){
        audioElement.play();
        v = true;
      }
      else{
        audioElement.pause();
        v = false;
      }
    });
});

