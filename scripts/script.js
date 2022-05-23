window.addEventListener("load", function(){

    /////Declaring Variables


    let lose_div = document.getElementsByClassName("boundary");

    let start_div = document.getElementById("start");

    let end_div = document.getElementById("end");

    let cheating_detector_div = document.getElementById("game");

    let status = document.getElementById("status");

    let live = document.getElementById("live");

    let last = document.getElementById("last");

    let best = document.getElementById("best");

    var tens_span  = document.getElementById("tens");

    var seconds_span = document.getElementById("seconds");

    let reset_button = document.createElement("button");

    reset_button.innerHTML = "Reset Score";

    document.body.appendChild(reset_button);

    reset_button.style.position = "absolute";

    reset_button.style.left = "50%";

    reset_button.style.transform = "translateX(-50%)";

    reset_button.style.padding="10px";



    let i;

    var score = 0 , interval , best_time , last_time ,tens = 0 , seconds= 0 ;  //global variables


/////Main

    startGame();


/////Functions

    //activate start div

    function startGame() {

        start_div.addEventListener("mouseover", start);

    }
    //deactivate start div

    function endGame() {

        start_div.removeEventListener("mouseover", start);

    }

    function activateEndDiv() {

        end_div.addEventListener("mouseover", win);

    }

    function deactivateEndDiv() {

        end_div.removeEventListener("mouseover", win);

    }


    function start() {

        resetWalls();

        activateWalls();

        activateEndDiv();

        activateCheatDetector();

        activateResetButton();

        startStopWatch();
    }

    function win() {

        manageScore(5);

        displayStatus("You Won ! You gained 5 points bravo !");

        deactivateWalls();

        deactivateEndDiv();

        deactivateCheatDetector();

        resetStopWatch();

        changeLastTime();

        checkBestTime();

    }

    ///reset wall color back to normal


    function resetWalls() {

        for (i = 0; i < lose_div.length - 1; i++) {

            lose_div[i].style.backgroundColor = "#eeeeee";

        }

    }

    function colorWalls() {

        for (i = 0; i < lose_div.length - 1; i++) {

            lose_div[i].style.backgroundColor = "red";

        }

    }

    ////activate borders of walls

    function activateWalls() {

        for (i = 0; i < lose_div.length - 1; i++) {

            lose_div[i].addEventListener("mouseover", lose);

        }
    }

    function deactivateWalls() {

        for (i = 0; i < lose_div.length - 1; i++) {

            lose_div[i].removeEventListener("mouseover", lose);

        }

    }

    function lose() {

        colorWalls();

        manageScore(-10);

        displayStatus("You Lost ! 10 points were deducted !");

        deactivateWalls();

        deactivateEndDiv();

        deactivateCheatDetector();

        resetStopWatch();

    }

    function manageScore(value) {

        score = score + value;

    }

    function displayStatus(message) {


        status.innerHTML = message + " Your Score is : " + score;

    }

    function activateCheatDetector() {

        cheating_detector_div.addEventListener("mouseleave", CheatDetected);

    }

    function deactivateCheatDetector() {

        cheating_detector_div.removeEventListener("mouseleave", CheatDetected);

    }


    //if user leaves the "game" div (the main div)

    function CheatDetected() {

        status.innerHTML = "Very smart move but cheating isn't allowed in the bootcamp so unfortunately YOU ARE TERMINATED FROM THE BOOTCAMP AND YOU ARE NOT ALLOWED TO PLAY ANYMORE!!!! ";

        deactivateWalls();

        deactivateEndDiv();

        deactivateResetButton();

        endGame();

    }

    function activateResetButton() {

        reset_button.addEventListener("click", resetScore);

    }

    function deactivateResetButton() {

        reset_button.removeEventListener("click", resetScore);

    }

    function resetScore() {

        score = 0;

        status.innerHTML = "Your score is reset to 0 !";

    }


    function startStopWatch() {


        clearInterval(interval);
        interval = setInterval(launch, 10);

    }

    // function resetStopWatch() {
    //
    //     live.innerHTML="<strong>Live</strong><br> 00 : 000"
    //
    //
    // }


    function launch() {

        tens++;

        if(tens <= 9){
            tens_span.innerHTML = "0" + tens;
        }

        if (tens > 9){
            tens_span.innerHTML = tens;

        }

        if (tens > 99) {
            seconds++;
            seconds_span.innerHTML = "0" + seconds;
            tens = 0;
            tens_span.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            seconds_span.innerHTML =""+seconds;
        }

    }




    // function checkBestTime(){
    //   if(first_time ===1)
    //       best_time=last_time;
    //       best.innerHTML=best_time;
    //
    // }

    // function changeLastTime(){
    //
    // }

});