$(document).ready(function() {
    let Random = Math.floor((Math.random() * (120 - 19)) + 19)

    $("#targetNumber").text(Random);

    let crystal1 = Math.floor((Math.random() * 12) + 1)
    let crystal2 = Math.floor((Math.random() * 12) + 1)
    let crystal3 = Math.floor((Math.random() * 12) + 1)
    let crystal4 = Math.floor((Math.random() * 12) + 1)

    console.log("Pink: " + crystal1, "Blue: " + crystal2, "Purple: " + crystal3, "Green: " + crystal4);

    let playerScore = 0;
    let wins = 0;
    let losses = 0;

    // wins and losses counter //

    function winner() { 
        wins++;
        $("#wins").text(wins);
        alert("Winner!"); 
        reset();
    }

    function loser() {
        losses++;
        $("#losses").text(losses);
        alert("Loser");   
        reset();
    }  

    // click commands for each gem //

    $("#pink").on("click", function() {
        playerScore = playerScore + crystal1;
        $("#playerScore").text(playerScore); 
    
        if (playerScore == Random) {
            winner();
        }

        else if (playerScore > Random) { 
            loser();
        }
    })

    $("#blue").on("click", function() {
        playerScore = playerScore + crystal2;
        $("#playerScore").text(playerScore); 
    
        if (playerScore == Random) {
            winner();
        }

        else if (playerScore > Random) { 
            loser();
        }
    })

    $("#purple").on("click", function() {
        playerScore = playerScore + crystal3;
        $("#playerScore").text(playerScore); 
    
        if (playerScore == Random) {
            winner();
        }

        else if (playerScore > Random) { 
            loser();
        }
    })

    $("#green").on("click", function() {
        playerScore = playerScore + crystal4;
        $("#playerScore").text(playerScore); 
    
        if (playerScore == Random) {
            winner();
        }

        else if (playerScore > Random) { 
            loser();
        }
    });
    
    function reset() {
        Random = Math.floor((Math.random() * (120 - 19)) + 19);
        $("#targetNumber").text(Random);
        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);
        playerScore = 0;
        $("#playerScore").text("0");
     }
 
    $("#reset").on("click", function() {
        reset();
     })

    });
