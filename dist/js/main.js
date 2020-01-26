function move() {
   let elem= document.getElementById("ml10"),
       speed = 1,
       currentPos = 0;
    // Reset the element
    elem.style.left = 0+"px";
    elem.style.right = "auto";
    var motionInterval = setInterval(function() {
        currentPos += speed;
        if (currentPos >= 800 && speed > 0) {
            currentPos = 800;
            speed = -2 * speed;
            elem.style.width = parseInt(elem.style.width)*2+"px";
            elem.style.height = parseInt(elem.style.height)*2+"px";
        }
        if (currentPos <= 0 && speed < 0) {
            clearInterval(motionInterval);
        }
        elem.style.left = currentPos+"px";
    },20);

}
