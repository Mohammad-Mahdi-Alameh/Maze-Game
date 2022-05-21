window.addEventListener("load", function(){

    /////Declaring Variables


    let lose_div = document.getElementsByClassName("boundary");

    let start_div = document.getElementById("start");

    let end_div = document.getElementById("end");




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

    });