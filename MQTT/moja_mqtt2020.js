// SETUP MQTT ------------------------------------------

const broker  = "influx.itu.dk";
const port   =   9002;
const secured   =   true;
const topic   =   "ituF2020/EXPD/dit_emne_her";
const myID = "id" + parseInt(Math.random() * 100000, 10);




// CONNECT ----------------------------------------------

let mqttClient = new Paho.MQTT.Client( broker, port, myID);

mqttClient.connect({onSuccess: onConnect, useSSL:secured});
mqttClient.onConnectionLost = conLost;
mqttClient.onMessageArrived = receiveMessage;

// MQTT Handler functions--------------------------------

function onConnect() 
{
	mqttClient.subscribe(topic); 
	sendMQTT("someone connected");

};



function sendMQTT(message) 
{
	console.log("sending");
	let  mOBJ = {deviceID:myID, content:message};
	let mSend = new Paho.MQTT.Message(JSON.stringify(mOBJ));
	mSend.destinationName = topic;
	mqttClient.send(mSend);
};

function receiveMessage(message) 
{
	let mUnpack = JSON.parse(message.payloadString);
	let senderID = mUnpack.deviceID; 
	let receivedMessage  = mUnpack.content;
	console.log("message received:" + receivedMessage);
  
    //do stuff with the message
	console.log(receivedMessage);
	//document.bgColor = receivedMessage;
	onePixelDo(true,receivedMessage,100,50);


}

function conLost() 
{
	console.log("Lost connection");
}

function handleOrientation(event) {
   
	let val = event.alpha;

    val = Math.floor(val);
    //betaval = Math.floor(val);
    //document.getElementById("data").innerHTML = val;

	sendMQTT(val);	
    //document.body.style.background = onePixelDo(true,val,100,50);
    //return val;
}
    //console.log(val);


function start()  
{
	//Start-button pressed - so lets hide the button
	document.getElementById("startbutton").style.display = "none";
	console.log("yo");

// check if it is IOS13 device   
	if (typeof DeviceOrientationEvent.requestPermission === 'function') 
	{
		DeviceOrientationEvent.requestPermission()
		.then(permissionState => {
			if (permissionState === 'granted') 
			{
			window.addEventListener("deviceorientation", handleOrientation, false);
			}
		})
		.catch(console.error);
	} 
	else //NON IOS device - just add the eventlistner
	{
	window.addEventListener("deviceorientation", handleOrientation, false);
	}
}




