window.addEventListener("load", function(){

    /////Declaring Variables


    let lose_div = document.getElementsByClassName("boundary");

    let start_div = document.getElementById("start");

    let end_div = document.getElementById("end");

    let cheating_detector_div = document.getElementById("game");

    let status = document.getElementById("status");

    let reset_button = document.createElement("button");

    reset_button.innerHTML = "Reset Score";

    document.body.appendChild(reset_button);

    reset_button.style.position = "absolute";

    reset_button.style.left = "50%";

    reset_button.style.transform = "translateX(-50%)";


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



    function win() {

        manageScore(5);

        displayStatus("You Won ! You gained 5 points bravo !");

        deactivateWalls();

        deactivateEndDiv();



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



    function manageScore(value) {

        score = score + value;

    }

    function displayStatus(message) {


        status.innerHTML = message + " Your Score is : " + score;

    }



});