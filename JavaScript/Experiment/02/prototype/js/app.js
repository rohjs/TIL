(function(Audio) { 
  "use strict";
  Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
  };
  Audio.prototype.pause = function () {
    this.pause();
  };
  Audio.prototype.play = function () {
    this.play();
  };
  Audio.prototype.volumnUp = function (scale) {
    this.volume += scale;
  };
  Audio.prototype.volumnDown = function (scale) {
    this.volume -= scale;
  };
})(HTMLAudioElement);
  
(function(global){
  "use strict";
  // Use
  var stop  = query('.stop');
  var play  = query('.play');
  var pause = query('.pause');
  var time  = query('.time');

  var audio = document.createElement('audio');
  audio.setAttribute('src', 'media/001.  Ed Sheeran - Shape Of You.mp3');
  audio.setAttribute('controls', '');
  console.log(audio);
  stop.addEventListener('click', function() {
    audio.stop()
  });
  play.addEventListener('click', function() {
    audio.play();
  });
  pause.addEventListener('click', function() {
    audio.pause();
  });

  audio.ontimeupdate = function() {
    var cur = this.currentTime,
        dur = this.duration,
        progress = cur/dur*100;
    var seekbar = query('.seek');
    seekbar.style.width = progress + '%';
  };

  var body = document.body;
  body.appendChild(audio);
})(window);

