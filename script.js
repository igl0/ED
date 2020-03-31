
window.onload = function () {

    let thumb = slider.querySelector('.thumb');
    var xLight;

    thumb.onmousedown = function (event) {
        event.preventDefault(); // prevent selection start (browser action)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // the pointer is out of slider => lock the thumb within the bounaries
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            //newLeft er det som ænder slider værdi fra 0 - 300
            thumb.style.left = newLeft + 'px';

            //xLight er en midlertidig variabel, som bruges til at regne sliderens værdi om til noget vi kan bruge i HSL
            xLight = newLeft;


            //Herunder scalere vi værdier så det passer med at de går fra 0 - 100
            const scale = (num, in_min, in_max, out_min, out_max) => {
                return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }
            var scaled = scale(xLight, 0, 300, 0, 100);

            //her "vender" vi den scaleret værdi om, så det passer med at slideren kan kører fra venstre mod højre og blive mørkere. værdien kan ikke komme under 1
            var inv = 100 - scaled; 
            if (inv < 1){
                inv = 1;
            }

            //giv div boksen den ønskede farve med HSL
            document.getElementById("light").style.backgroundColor = `hsl(${0},${0}%,${inv}%,${inv})`



        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    thumb.ondragstart = function () {
        return false;
    };
};


