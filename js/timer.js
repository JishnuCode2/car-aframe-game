AFRAME.registerComponent("timer", {
    init: function(){
        var timer = document.querySelector("#timer");

        var time = 182;

        setInterval(()=>{
            var minutes, seconds;

            var fadeEl = document.querySelector("#fade")

            if(time > 0){
                minutes = Math.floor(time/60);
                if(minutes < 10){
                    minutes = "0" + minutes;
                }
                seconds = time % 60;
                if(seconds <10){
                    seconds = "0" + seconds;
                }                
            }else{
                minutes = "00";
                seconds = "00";
            }


            var textTime = `${minutes} : ${seconds}`;

            timer.setAttribute("text", "value", textTime);

            if(fadeEl.getAttribute("visible") === false){
                time -= 1;
            }else{
                console.log('a')
            }

            if(time < 0){
                console.log("You Lose");
                document.querySelector("#player-keys").setAttribute("visible", false);
                
                var txt = document.querySelector("#end")
                txt.setAttribute("visible", true);
                txt.setAttribute("text", "value", "YOU LOSE")
    
                var player = document.querySelector("#player");
                player.setAttribute("velocity", "0 0 0")
                player.setAttribute("position", "0 0 0")
    
                document.querySelector(".road-model").setAttribute("visible", false);
                document.querySelector("#houses").setAttribute("visible", false);
                var coins = document.querySelectorAll(".coin")
                for(var i=0; i<coins.length; i++){
                    coins[i].setAttribute("visible", false);
                };
            }

        }, 1000)
    }
})