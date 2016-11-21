
var topicName = "value"

var ws = new WebSocket("ws://" + "localhost:80/");
// we get notified once connected to the server
ws.onopen = function(event) {
    ws.send("presence");
};



// listen to messages comming from the server. When it happens, create a new <li> and append it to the DOM.
var messages = document.querySelector('#messages');
var line;
ws.onmessage = function(event) {
    alert("Presence");
    line = document.createElement('li');
    line.textContent = event.data;
    messages.appendChild(line);
};
