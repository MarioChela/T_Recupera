// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var Sensores=""
  ,dato1=""
  ,dato2="";



  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: false,
    userName: "mchela.fie@unach.edu.ec",
    password: "Djmarioo1905",
    onSuccess:onConnect,
    onFailure:doFail
  }
  
  // connect the client
  client.connect(options);
    
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("mchela.fie@unach.edu.ec/sensores");
  
  
  }

  function doFail(e){
    console.log(e);
	
  } 

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    Sensores=(message.payloadString).split(("%"));
    dato1=Sensores[0];
    dato2=Sensores[1]
  }


  function Sens1(){
    var Historial=document.getElementById("Datos");
    Historial.innerHTML=" ";
    Historial.innerHTML=dato1;
  }


  function Sens2(){
    var Historial=document.getElementById("Datos");
    Historial.innerHTML=" ";
    Historial.innerHTML=dato2;
  }
