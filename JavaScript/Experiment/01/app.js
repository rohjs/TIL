/* jiseung.roh (c) 2017.2 */

var lead_self = 'Me: ',
    lead_computer = 'PC: ',
    a_said = [],
    msg_yes = "Yes, that's a good idea",
    msg_no = "No, i don't think that's a good idea",
    sassy_stuffs = [
      'You want to find your tribe – the types of people like you that you can imagine working with for the rest of your career.',
      'You should probably be willing to move.',
      'Help others for no reason at all.'
    ];

// 3 public functions: talk, replyYesNo, replaySassyStuffs
function talk(msg) {
  echo(lead_self + msg);
}

function replyYesNo() {
  var msg = Math.random()>.5 ? msg_yes : msg_no;
  echo(lead_computer + msg);
}

function replySassyStuffs() {
  var sassy_stuffs_length = sassy_stuffs.length;
  var msg = sassy_stuffs[Math.floor(Math.random()*sassy_stuffs_length)];
  echo(lead_computer + msg);
}

// 'echo' should be a private function.
function echo(msg) {
  // log msg to the history
  a_said.push('<p>' + msg + '</p>');
  // print in the chat-bot
  // want to log only six dialogues...
  var a_said_length = a_said.length,
      start = Math.max(a_said_length - 6, 0),
      output = '';
  // add dialogues to output
  for ( i=start; i<a_said_length; i++ ) {
    output += a_said[i];
  }
  $('.chat-echo').html(output);
  $('.chat-preview').text(msg);
}




function talk(msg) {
  echo(lead_self + msg);
}

function replyYesNo() {
  var msg = Math.random()>.5 ? msg_yes : msg_no;
  echo(lead_computer + msg);
}

function replySassy() {
  var msg = sassy_stuffs[Math.floor(Math.random()*sassy_stuffs.length)];
  echo(lead_computer + msg);
}

function echo(msg) {
  a_said.push(msg);
  var a_said_length = a_said.length;
      chat_echo = document.querySelector('.chat-echo'),
      chat_echo_num = chat_echo.children.length,
      elm = document.createElement('p'),
      text = document.createTextNode(a_said[a_said_length - 1]);
  elm.appendChild(text);
  console.log(chat_echo, elm);
  if ( chat_echo_num > 6 ) {
    chat_echo.removeChild(chat_echo.firstElementChild);
  }
  chat_echo.appendChild(elm);
}