var changeCoinPos = false

AFRAME.registerComponent("player-movement", {
    schema: {
        isBreakPressed: {type: "boolean", default: false}
    },
    init: function(){
        window.addEventListener("keydown", (e) =>{
            var player = document.querySelector("#player");
            var fadeEl = document.querySelector("#fade");

            if(!fadeEl.getAttribute("visible")){
                if(e.key === "v"){
                    var horn = document.querySelector("#horn-sound");
                    horn.components.sound.playSound()
                }
                var playerVel = player.getAttribute("velocity");

                if(e.key === "ArrowUp" || e.key === "w"){

                    document.querySelector("#rvr").setAttribute("visible", false);

                    if(playerVel.z > -20){
                    playerVel.z -= 2 
                    document.querySelector("#speed-warning").setAttribute("visible", false);
                    }else{
                        playerVel.z = -20
                    document.querySelector("#speed-warning").setAttribute("visible", true);
                    }

                    if(playerVel.z > 0){
                        document.querySelector("#rvr").setAttribute("visible", true);
                    }

                    document.querySelector("#acc").setAttribute("src", "./assets/images/accelarator-pressed.jpg")
                    document.querySelector("#brk").setAttribute("src", "./assets/images/brake-pedal.jpeg");

                    this.data.isBreakPressed = false

                
                    player.setAttribute("velocity", playerVel)
                }
                if(e.key === "ArrowDown" || e.key === "d"){
                    if(playerVel.z < 5){
                        playerVel.z += 1
                    }else{
                        playerVel.z = 5
                    }

                    if(playerVel.z < 0){
                        document.querySelector("#acc").setAttribute("src", "./assets/images/accelarator-pressed.jpg");
                    }else{
                        document.querySelector("#acc").setAttribute("src", "./assets/images/accelarator.jpg");                
                    }

                    this.data.isBreakPressed = false

                    document.querySelector("#rvr").setAttribute("visible", true);


                    document.querySelector("#speed-warning").setAttribute("visible", false);
                    document.querySelector("#brk").setAttribute("src", "./assets/images/brake-pedal.jpeg");


                    player.setAttribute("velocity", playerVel)
                }

                if(e.key === "Backspace"){
                    player.setAttribute("velocity", "0 0 0");
                    document.querySelector("#acc").setAttribute("src", "./assets/images/accelarator.jpg");
                    document.querySelector("#brk").setAttribute("src", "./assets/images/brake-pedal-pressed.jpg");
                    document.querySelector("#rvr").setAttribute("visible", false);

                    this.data.isBreakPressed = true;
                }

                if(e.key === "ArrowLeft" ){
                var pos = player.getAttribute("position");
                var velZ = player.getAttribute("velocity").z;

                if(!this.data.isBreakPressed && pos.x > -3 && velZ!=0){
                        pos.x -=3;
                        
                        if(playerVel.z > 0){
                            document.querySelector("#rvr").setAttribute("visible", true);
                        }else{
                            document.querySelector("#rvr").setAttribute("visible", false);
                        }
                }
            
                player.setAttribute("position", pos);
                }
                if(e.key === "ArrowRight" ){
                    var pos = player.getAttribute("position");
                    var velZ = player.getAttribute("velocity").z;

                    if(!this.data.isBreakPressed && pos.x < 3 && velZ!= 0){
                        pos.x +=3;
                        if(playerVel.z > 0){
                            document.querySelector("#rvr").setAttribute("visible", true);
                        }else{
                            document.querySelector("#rvr").setAttribute("visible", false);
                        }   
                    }
                    
                    player.setAttribute("position", pos);
                }                
            }


            console.log(e)
            if(e.key === "Enter" && fadeEl.getAttribute("visible")){
                fadeEl.setAttribute("visible", false);
                document.querySelector("#player-keys").setAttribute("visible", true);
                document.querySelector("#intro").setAttribute("visible", false);
            }

            if(playerVel.z === 0){
                document.querySelector("#rvr").setAttribute("visible", false); 
            }
            
        })
    },
    tick: function(){
        var player = document.querySelector("#player")
        var pos = player.getAttribute("position");

        if(pos.z <= -38){
            player.setAttribute("position", {x:pos.x, y:1, z: 37});
            changeCoinPos = true
        }
        else if(pos.z >= 38){
            player.setAttribute("position", {x:pos.x, y:1, z: -37});
            changeCoinPos = true
        }else{
            changeCoinPos = false
        }
        if(changeCoinPos){
            var coins = document.querySelectorAll(".coin");
            for(var coin of coins){
                console.log(coin);
                var coinPos = coin.getAttribute("position");
                if(coinPos.x === -3){
                    coinPos.x = 0
                }else if(coinPos.x === 3){
                    coinPos.x = -3
                }else{coinPos.x = 3}
                coin.setAttribute("position", coinPos);
                coin.setAttribute("visible", true);
            }
        }
    }
})