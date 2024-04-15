 
    var sound6 = new Audio();



let main = document.querySelectorAll(".box-container > ul > li");
let divi = document.querySelector(".box-container");

let container = document.querySelector(".Container");
let target = document.querySelector(".Container > .cover-background");



function Sound(sound){
    sound6.currentTime = 0;
    sound6.pause();
    sound6.src = "Audio/"+sound;
    sound6.play();
}

for(let i = 0 ; i < main.length; i++){
    main[i].addEventListener("click",function(){
        if(i == 0){
            container.style.backgroundColor = "#EDD0C0";
            target.style.backgroundImage  = 'url("./Images/symposium.jpg")';
            Sound("The Symposium - The Physical Attractions.mp3");
            divi.querySelector(".active").classList.remove("active");
            main[i].classList.add("active");
        }
        else if(i == 1){
            container.style.backgroundColor = "#202A2A";
            target.style.backgroundImage  = 'url("./Images/Sleeping_Sirens.jpg")';
            Sound("SleepingSirens.mp3");
            divi.querySelector(".active").classList.remove("active");
            main[i].classList.add("active");
        }
        else if(i == 2){
            container.style.backgroundColor = "#030605";
            target.style.backgroundImage  = 'url("./Images/deftones-around.jpg")';
            Sound("defttone.mp3");
            divi.querySelector(".active").classList.remove("active");
            main[i].classList.add("active");
        }
        else if(i == 3){
            container.style.backgroundColor = "#030605";
            target.style.backgroundImage  = 'url("./Images/Lamp.jpg")';
            Sound("lamp_train.mp3");
            divi.querySelector(".active").classList.remove("active");
            main[i].classList.add("active");
        }
        
    });
}