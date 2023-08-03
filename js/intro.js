AFRAME.registerComponent("intro", {
    init: function(){
        var fadeEl = document.querySelector("#fade");
        if(fadeEl.getAttribute("visible")){
            document.querySelector("#player-keys").setAttribute("visible", false);
        }
    }
})