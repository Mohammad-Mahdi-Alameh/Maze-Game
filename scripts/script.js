window.addEventListener("load", function(){

    /////Declaring Variables


    let lose_div = document.getElementsByClassName("boundary");

    let start_div = document.getElementById("start");

    let end_div = document.getElementById("end");

    let cheating_detector_div = document.getElementById("game");

    let status = document.getElementById("status");

    let i;

    var score = 0;  //global variables


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



    }

    function win() {

        manageScore(5);

        displayStatus("You Won ! You gained 5 points bravo !");

        deactivateWalls();

        deactivateEndDiv();

        deactivateCheatDetector();

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

        endGame();

    }


});