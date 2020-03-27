function handleOrientation(event) {
    let val = event.alpha;


    val = Math.floor(val);
    betaval = Math.floor(val);
    document.getElementById("data").innerHTML = val;

    //document.body.style.background = onePixelDo(true,val,100,50);
    return val;
    }
    console.log(val);


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

     

    