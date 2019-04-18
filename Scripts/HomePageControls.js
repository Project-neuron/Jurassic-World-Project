const carousel1 = $("#carousel1")
const playButton1 = document.querySelector("#playButtonForCarOne")
const pauseButton1 = document.querySelector("#pauseButtonForCarOne")
const card1 = document.querySelector("#card1")
const status1 = document.querySelector(".status1")

playButton1.addEventListener("click", (e) => {
    e.preventDefault();
    carousel1.carousel('cycle')
    card1.classList.remove("danger")
    status1.innerHTML = "Running";
    status1.classList.remove("statusDanger")
    status1.classList.add("statusGood")
    playButton1.classList.remove("startButton")
    playButton1.classList.add("startDisabled")
    pauseButton1.classList.remove("endDisabled")
    pauseButton1.classList.add("endButton")
    
    
    

});

pauseButton1.addEventListener("click", (e)=>{
    e.preventDefault();
    carousel1.carousel('pause')
    card1.classList.add("danger")
    status1.innerHTML = "Stopped";
    status1.classList.remove("statusGood")
    status1.classList.add("statusDanger")
    playButton1.classList.remove("startDisabled")
    playButton1.classList.add("startButton")
    pauseButton1.classList.remove("endButton")
    pauseButton1.classList.add("endDisabled")

})

carousel1.carousel({    
    interval:2000,
    pause: "false"
});

const carousel2 = $("#carousel2")
const playButton2 = document.querySelector("#playButtonForCarTwo")
const pauseButton2 = document.querySelector("#pauseButtonForCarTwo")
const card2 = document.querySelector("#card2")
const status2 = document.querySelector(".status2")

playButton2.addEventListener("click", (e) => {
    e.preventDefault();
    carousel2.carousel('cycle')
    card2.classList.remove("danger")
    status2.innerHTML = "Running";
    status2.classList.remove("statusDanger")
    status2.classList.add("statusGood")
    playButton2.classList.remove("startButton")
    playButton2.classList.add("startDisabled")
    pauseButton2.classList.remove("endDisabled")
    pauseButton2.classList.add("endButton")
    
    

});

pauseButton2.addEventListener("click", (e)=>{
    e.preventDefault();
    carousel2.carousel('pause')
    card2.classList.add("danger")
    status2.innerHTML = "Stopped";
    status2.classList.remove("statusGood")
    status2.classList.add("statusDanger")
    playButton2.classList.remove("startDisabled")
    playButton2.classList.add("startButton")
    pauseButton2.classList.remove("endButton")
    pauseButton2.classList.add("endDisabled")

})

carousel2.carousel({    
    interval:2100,
    pause: "false"
});

const carousel3 = $("#carousel3")
const playButton3 = document.querySelector("#playButtonForCarThree")
const pauseButton3 = document.querySelector("#pauseButtonForCarThree")
const card3 = document.querySelector("#card3")
const status3 = document.querySelector(".status3")

playButton3.addEventListener("click", (e) => {
    e.preventDefault();
    carousel3.carousel('cycle')
    card3.classList.remove("danger")

    //status
    status3.innerHTML = "Running";
    status3.classList.remove("statusDanger")
    status3.classList.add("statusGood")
   
    //Button
    playButton3.classList.remove("startButton")
    playButton3.classList.add("startDisabled")
    pauseButton3.classList.remove("endDisabled")
    pauseButton3.classList.add("endButton")
    
    

});

pauseButton3.addEventListener("click", (e)=>{
    e.preventDefault();
    carousel3.carousel('pause')
    card3.classList.add("danger")
    status3.innerHTML = "Stopped";
    status3.classList.remove("statusGood")
    status3.classList.add("statusDanger")
    playButton3.classList.remove("startDisabled")
    playButton3.classList.add("startButton")
    pauseButton3.classList.remove("endButton")
    pauseButton3.classList.add("endDisabled")
    

})

carousel3.carousel({    
    interval:2200,
    pause: "false"
});

const carousel4 = $("#carousel4")
const playButton4 = document.querySelector("#playButtonForCarFour")
const pauseButton4 = document.querySelector("#pauseButtonForCarFour")
const card4 = document.querySelector("#card4")
const status4 = document.querySelector(".status4")

playButton4.addEventListener("click", (e) => {
    e.preventDefault();
    carousel4.carousel('cycle')
    card4.classList.remove("danger")
    status4.innerHTML = "Running";
    status4.classList.remove("statusDanger")
    status4.classList.add("statusGood")
    playButton4.classList.remove("startButton")
    playButton4.classList.add("startDisabled")
    pauseButton4.classList.remove("endDisabled")
    pauseButton4.classList.add("endButton")
    
    

});

pauseButton4.addEventListener("click", (e)=>{
    e.preventDefault();
    carousel4.carousel('pause')
    card4.classList.add("danger")
    status4.innerHTML = "Stopped";
    status4.classList.remove("statusGood")
    status4.classList.add("statusDanger")
    playButton4.classList.remove("startDisabled")
    playButton4.classList.add("startButton")
    pauseButton4.classList.remove("endButton")
    pauseButton4.classList.add("endDisabled")

})

carousel4.carousel({    
    interval:2200,
    pause: "false"
});



