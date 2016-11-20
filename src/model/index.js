
var topicName = "value"

var ws = new WebSocket("ws://" + "172.26.3.42:80/value");
alert(ws)
// we get notified once connected to the server
ws.onopen = function(event) {
    alert("We are connected.");
    ws.send("value");
};



// listen to messages comming from the server. When it happens, create a new <li> and append it to the DOM.
var messages = document.querySelector('#messages');
var line;
ws.onmessage = function(event) {
    line = document.createElement('li');
    line.textContent = event.data;
    messages.appendChild(line);
};
