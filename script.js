function play(id) {
    document.getElementById(id).play();
}

document.addEventListener("keydown", condition);

function condition(event){
    console.log("Key pressed");
    if(event.code === "KeyA"){
        play('clap');
    } else if(event.code === "KeyS"){
        play('hihat');
    } else if(event.code === "KeyD"){
        play('kick');
    }else if(event.code === "KeyF"){
        play('openhat');
    }else if(event.code === "KeyG"){
        play('boom');
    }else if(event.code === "KeyH"){
        play('ride');
    }else if(event.code === "KeyJ"){
        play('snare');
    }else if(event.code === "KeyK"){
        play('tom');
    }else if(event.code === "KeyL"){
        play('tink');
    }
};

