
window.onload = function () {

    lightControle = 50;
    darkSize = 50;
    lightSize = 50;


    document.getElementById("lighter").onclick = function () {
        console.log("clicked");
        console.log(lightSize);

        lightControle += 20;
        lightSize += 16;
        darkSize -= 16;
        if (lightControle > 100) {
            lightControle = 100;
        }
        if (lightSize > 90){
            lightSize = 90;
            darkSize = 10;

        }

        document.getElementById("light").style.backgroundColor = `hsl(${0},${0}%,${lightControle}%,${100})`
        document.getElementById("lighter").style.width = lightSize + '%';
        document.getElementById("darker").style.width = darkSize + '%';
    }



    document.getElementById("darker").onclick = function () {
        console.log("clicked darker");
        document.getElementById("darker").onclick = function () {
            console.log("clicked" + lightControle);
            //console.log(lightControle);

            lightControle -= 20;
            lightSize -= 16;
            darkSize += 16;
            if (lightControle < 0) {
                lightControle = 0;
            }
            if (darkSize > 90){
                darkSize = 90;
                lightSize = 10;
    
            }
            document.getElementById("light").style.backgroundColor = `hsl(${0},${0}%,${lightControle}%,${100})`
            document.getElementById("lighter").style.width = lightSize + '%';
            document.getElementById("darker").style.width = darkSize + '%';
        }
    }






};