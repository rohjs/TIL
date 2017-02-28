/* jiseung.roh (c) 2017.2 */
/* Module pattern
   Make one global variable that gets returned value from IIFE.
   All the variables used within the scope of IIFE function is encapsulated.
   It does has problem that the public/private functions cannot interact each other, because
   the returned value only holds the reference.
*/
var chatApp = (function(){
  var _lead_self = 'Me: ',
      _lead_computer = 'PC: ',
      _a_said = [],
      _msg_yes = "Yes, that's a good idea",
      _msg_no = "No, i don't think that's a good idea",
      _sassy_stuffs = [
        'You want to find your tribe – the types of people like you that you can imagine working with for the rest of your career.',
        'You should probably be willing to move.',
        'Help others for no reason at all.'
      ];
  function _echo(msg) {
    _a_said.push('<p>' + msg + '</p>');
    var _a_said_length = _a_said.length,
        _start = Math.max(_a_said_length - 6, 0),
        _output = '';

    for ( i=_start; i<_a_said_length; i++ ) {
      _output += _a_said[i];
    }
    var _chat_echo = document.querySelector('.chat-echo');
    _chat_echo.innerHTML = _output;
  }

  // return functions that needs to be public.
  return {
    talk: function(msg) {
      _echo(_lead_self + msg);
    },
    replyYesNo: function() {
      var msg = Math.random()>.5 ? _msg_yes : _msg_no;
      _echo(_lead_computer + msg);
    },
    replySassyStuffs: function() {
      var _sassy_stuffs_length = _sassy_stuffs.length;
      var msg = _sassy_stuffs[Math.floor(Math.random()*_sassy_stuffs_length)];
      _echo(_lead_computer + msg);
    }
  };
})();
