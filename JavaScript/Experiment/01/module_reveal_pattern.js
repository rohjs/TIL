/* jiseung.roh (c) 2017.2 */
/* Module Reveal pattern
   Module Reveal pattern solves the problem of Module pattern; which it disables public and private functions
   to interact each other.
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
  function talk(msg) {
    _echo(_lead_self + msg);
  }
  function replyYesNo() {
    var msg = Math.random()>.5 ? _msg_yes : _msg_no;
    _echo(_lead_computer + msg);
  }
  function replySassyStuffs() {
    var _sassy_stuffs_length = _sassy_stuffs.length;
    var msg = _sassy_stuffs[Math.floor(Math.random()*_sassy_stuffs_length)];
    _echo(_lead_computer + msg);
  }
  
  return {
    talk: talk,
    replyYesNo: replyYesNo,
    replySassyStuffs: replySassyStuffs
  };
})();
