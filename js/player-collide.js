var points = 0
AFRAME.registerComponent("player-collide", {
    init: function(){
        this.el.addEventListener("collide", (e)=>{
            if(this.el.getAttribute("visible")){
                console.log("collided", e); 
                points += 1               
            }
            this.el.setAttribute("visible", false);

            var pointEl = document.querySelector("#points");
            pointEl.setAttribute("text", "value", `Points: ${points}`)
        });

    },
    tick: function(){
        if(points >= 50){
            console.log("You Win");
            document.querySelector("#player-keys").setAttribute("visible", false);
            document.querySelector("#end").setAttribute("visible", true);

            var player = document.querySelector("#player");
            player.setAttribute("velocity", "0 0 0")
            player.setAttribute("position", "0 0 0")

            document.querySelector(".road-model").setAttribute("visible", false);
            document.querySelector("#houses").setAttribute("visible", false);
            var coins = document.querySelectorAll(".coin")
            for(var i=0; i<coins.length; i++){
                coins[i].setAttribute("visible", false);
            };
            points = 0
        }
    }
})