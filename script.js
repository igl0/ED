
window.onload = function () {

    let thumb = slider.querySelector('.thumb');
    var xLight;

    thumb.onmousedown = function (event) {
        event.preventDefault(); // prevent selection start (browser action)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        // shiftY not needed, the thumb moves only horizontally

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

            xLight = newLeft;
            document.getElementById("light").style.backgroundColor = `hsl(${0},${0}%,${xLight}%,${xLight})`
            console.log(xLight);

            
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


