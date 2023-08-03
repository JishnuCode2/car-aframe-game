AFRAME.registerComponent("speed-display", {
    tick: function(){
        var speed = document.querySelector("#car-speed");

        var playerVelZ = document.querySelector("#player").getAttribute("velocity").z;

        var carVel = (playerVelZ * 5)
        if(carVel < 0){
            carVel = -(carVel)
        }
        speed.setAttribute("text", "value", `${carVel} km/hr`)
    }
})