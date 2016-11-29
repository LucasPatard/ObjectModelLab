


var client = new Paho.MQTT.Client("localhost", Number(80), "/ws", "clientId");
//var ws = new WebSocket("ws://" + "localhost:80/");
// we get notified once connected to the server
var messages = document.querySelector('#messages');
var line;
var sensors = [];
client.onMessageArrived = function (message) {

    // construction de l'objet l'objet Sensor que l'on stock
    var obj = JSON.parse(message.payloadString);
    var newSensor = true;
    sensors.forEach(function(sensor){
        if(sensor.name === message.destinationName.substring(6)){
            sensor.data.values.push(obj.value);
            sensor.data.labels.push(new Date().toString());
            newSensor = false;
        }
    });
    if(newSensor){
        sensors.push(new Sensor(
            {id : message.destinationName.substring(6),
                name : message.destinationName.substring(6),
                type : obj.type,
                data : {
                    values : [obj.value],
                    labels :[new Date().toString()],
                }
            }))
    }

    //trace des messages reçus
    line = document.createElement('li');
    messages.appendChild(line);
    line.textContent = "ID :"+message.destinationName.substring(6)+" type :" +obj.type+" value :" +obj.value;

};
function onConnect(){
    client.subscribe('value/#');
}

// Connect the client, providing an onConnect callback
client.connect({
    onSuccess: onConnect
});







