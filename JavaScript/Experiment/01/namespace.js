/* jiseung.roh (c) 2017.2 */
/* Namespace pattern
   Make a long path of objects to prevent the object being overwritten.
   Complicated, and it still leaves possibility to be accessed.
*/

var com = com || {};
com.jiseung = com.jiseung || {};
com.jiseung.jsdp = { 
  lead_self: 'Me: ',
  lead_computer: 'PC: ',
  a_said: [],
  msg_yes: "Yes, that's a good idea",
  msg_no: "No, i don't think that's a good idea",
  sassy_stuffs: [
    'You want to find your tribe – the types of people like you that you can imagine working with for the rest of your career.',
    'You should probably be willing to move.',
    'Help others for no reason at all.'
  ],
  echo: function(msg) {
    this.a_said.push('<p>' + msg + '</p>');
    var a_said_length = this.a_said.length,
        start = Math.max(a_said_length-6, 0),
        output= '';
    for ( var i=start; i<a_said_length; i++) {
      output += this.a_said[i];
    }
    var chat_echo = document.querySelector('.chat-echo');
    chat_echo.innerHTML = output;
  },
  talk: function(msg) {
    this.echo(this.lead_self + msg);
  },
  replyYesNo: function() {
    var msg = Math.random()>.5 ? this.msg_yes : this.mgs_no;
    this.echo(this.lead_computer + msg);
  },
  replySassyStuffs: function() {
    var msg = sassy_stuffs[Math.floor( Math.random()*sassy_stuffs.length )];
    this.echo(this.lead_computer + msg);
  }
};