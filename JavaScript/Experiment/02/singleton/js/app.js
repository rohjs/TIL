(function(global) {
  "use strict";
  var musicGenerator = (function() {
    var instance;
    function init() {
      function _createElem(node) {
        return document.createElement(node);
      }
      function _createLink(link, text) {
        var _link = _createElem('a');
        _link.setAttribute('href', link);
        console.log(link)
        text = text || link;
        text = document.createTextNode(text);
        _link.appendChild(text);
        return _link;
      }
      function _insertLink(node, target) {
        target.appendChild(node);
      }
      function audio(link) {
        var audio = _createElem('audio');
        audio.setAttribute('autoplay', '');
        audio.setAttribute('controls', '');
        audio.setAttribute('src', link);
        return audio;
      }
      function link(link, text, node) {
        var link = _createLink(link, text);
        _insertLink(link, node);
      }
      function stop(audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      function play(audio) {
        audio.play();
      }
      function pause(audio) {
        audio.pause();
      }
      function _currentTime() {
        return this.currentTime;
      }
      return {
        audio: audio,
        link: link,
        stop: stop,
        play: play,
        pause: pause
      };
    }
    return {
      generate: function() {
        if (!instance) instance = init();
        return instance;
      }
    };
  })();

  // Use
  var mg = musicGenerator.generate();
  var audio = mg.audio("media/001.  Ed Sheeran - Shape Of You.mp3");
  mg.link('media/001.  Ed Sheeran - Shape Of You.mp3', 'Ed Sheeran - Shape Of You', audio);
  audio.oncanplay = function() {
    this.play();
  }
  var stop = query('.stop');
  var play = query('.play');
  var pause = query('.pause');
  stop.addEventListener('click', function() {
    mg.stop(audio);
  });
  play.addEventListener('click', function() {
    mg.play(audio);
  });
  pause.addEventListener('click', function() {
    mg.pause(audio);
  });
  var body = document.body;
  body.appendChild(audio);
})(window);

