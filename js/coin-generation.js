AFRAME.registerComponent("coins", {
    schema: {
        numOfCoins: {type: "number", default: 5}
    },
    init: function(){
        for(var i=0; i<this.data.numOfCoins; i++){
            var coin = document.createElement("a-entity");
            coin.setAttribute("id", `coin-${i}`);
            coin.setAttribute("class", "coin");
            coin.setAttribute("geometry",{
                primitive: "sphere",
                radius: 0.5
            });
            coin.setAttribute("material", "color", "yellow");

            var posX = this.setCoinXPosition()
            coin.setAttribute("position", {x: posX, y:1, z: (30-(15*i))});

            coin.setAttribute("static-body", {});

            coin.setAttribute("player-collide", {})

            document.querySelector("#scene").appendChild(coin);

        }
    },
    setCoinXPosition: function(){
        var rand = (Math.floor(Math.random() * 3)+1);
        var posX
        if(rand === 1){
            posX = -3
        }else if(rand === 2){
            posX = 0
        }else{
            posX = 3
        }
        return posX;
    },
})