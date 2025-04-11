let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");
let resetScoreElement= document.getElementById("reset-score");

let homeScore = 0; 


function homePlusOne () {
    homeScore += 1; 
    homeScoreElement.innerText = homeScore;
}

function homePlusTwo () {
    homeScore += 2; 
    homeScoreElement.innerText = homeScore;
}

function homePlusThree () {
    homeScore += 3; 
    homeScoreElement.innerText = homeScore;
}

let guestScore = 0;

function guestPlusOne () {
    guestScore += 1; 
    guestScoreElement.innerText = guestScore;
}

function guestPlusTwo () {
    guestScore += 2; 
    guestScoreElement.innerText = guestScore;
}

function guestPlusThree () {
    guestScore += 3; 
    guestScoreElement.innerText = guestScore;
}

function resetScore () {
    homeScore = 0; 
    guestScore = 0; 
    homeScoreElement.innerText = 0;
    guestScoreElement.innerText = 0;
}
