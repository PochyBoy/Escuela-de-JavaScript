

function personavspc (mano1,mano2){
    var papel = 1
    var tijera = 2
    var piedra = 3
    if(mano1 === 1 && mano2 === 3){
        console.log("La persona le ha ganado al bot");
    }else if(mano1  === 2 && mano2 === 1) {
        console.log("La persona le ha ganado al bot");
    }else if(mano1 === 3 && mano2 === 2) {
        console.log("La persona le ha ganado al bot");
    }else if(mano1 === mano2) {
        console.log("Empate, te igualaste a la inteligencia artificial");
    }else {
        console.log("Perdiste papu gaaaaaaaaaaaaaaaaaaaa");
    }
    


}