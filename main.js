const irc = require("node-irc");

var client = new irc('chat.freenode.net', 8000, 'CedSharp', 'Cedrik Dubois' );

client.on("ready", function() {
    client.verbosity = 1;
    client.join("#NewGML_Live");
    client.say("#NewGML_Live", "Hi!");
});

client.on("JOIN", function(data) {
    console.log( data.sender + " joined." );
});

client.on("INVITE", function(data) {
    console.log( data.sender + " invited you to join " + data.message );
});

client.on('CHANMSG', function (data) {
  /** 
      The data object contains
      data.receiver : The channel the message was written in prefixed with hash (#) 
      data.sender   : The nick of the person who sent the message
      data.message  : The message the person sent
  **/
  console.log( data.sender + " said: " + data.message );
});

client.on('PRIVMSG', function(data) {
    console.log( data.sender + " is telling you: "+ data.message );
});

client.on("QUIT", function(data) {
    console.log( data.sender + " has left." );
});

client.on("PART", function(data) {
    console.log( data.sender + " has parted." );
});

client.on('NICK', function( data ){
    console.log( data.sender + " has changed their nick to "+ data.receiver );
});

client.on('KICK', function( data ) {
    console.log( data.sender + " kicked " + data.message[0] + " out of "+ data.receiver + " because: " + data.message[1] );
});

client.connect();