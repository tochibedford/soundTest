window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const letters = ["q", "w", "e", "r", "t", "y"];
    // console.log(letters);


    //sounds
    document.addEventListener('keydown', function(key){
        // for (let index = 0; index < letters.length; index++) {
        //     if(letters[index] == key.key){
        //         sounds[index].play();
        //     };
        // };
        if(key.key == "q"){
            sounds[0].currentTime = 0;
            sounds[0].play();
            pads[0].style.opacity = 0.4;
        }else{
            pads[0].style.opacity = 1;
        }
        if(key.key == "w"){
            sounds[1].currentTime = 0;
            sounds[1].play();
            pads[1].style.opacity = 0.4;
        }else{
            pads[1].style.opacity = 1;
        }
        if(key.key == "e"){
            sounds[2].currentTime = 0;
            sounds[2].play();
            pads[2].style.opacity = 0.4;
        }else{
            pads[2].style.opacity = 1;
        }
        if(key.key == "r"){
            sounds[3].currentTime = 0;
            sounds[3].play();
            pads[3].style.opacity = 0.4;
        }else{
            pads[3].style.opacity = 1;
        }
        if(key.key == "t"){
            sounds[4].currentTime = 0;
            sounds[4].play();
            pads[4].style.opacity = 0.4;
        }else{
            pads[4].style.opacity = 1;
        }
        if(key.key == "y"){
            sounds[5].currentTime = 0;
            sounds[5].play();
            pads[5].style.opacity = 0.4;
        }else{
            pads[5].style.opacity = 1;
        }
        
    });
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});