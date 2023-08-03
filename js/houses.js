AFRAME.registerComponent("houses", {
    init: function(){
        const houses = document.querySelector("#houses")

        this.createHouses("left", houses);
        this.createHouses("right", houses)
    },

    createHouses: function(side, parentNode){
        var posX, posY, posZ;
        var rotation;
        
        if(side === "left"){ 
            posX = -8.2 ;
            rotation = {x: 0 ,y: 0 ,z: 0};
            posZ = 45;
        }
        else if(side === "right"){
            posX = 8.2;
            rotation = {x: 0, y: 180, z: 0};
            posZ = 35
        }

        posY = 6;

        for(var i=0; i<8; i++){
            var house = document.createElement("a-entity");
            house.setAttribute("id", `house-${i}`);
            house.setAttribute("class", "house");
            house.setAttribute("gltf-model", "./assets/models/low_poly_sweet_home/scene.gltf");

            posZ -= 12;

            var position = {x: posX, y: posY, z: posZ};
            house.setAttribute("position", position);

            house.setAttribute("rotation", rotation)

            parentNode.appendChild(house)
        }
    }
})