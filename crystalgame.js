$(document).ready(function() {
    let Random = Math.floor(Math.random() * 100 + 1)

    $("#targetNumber").text(Random);

    let crystal1 = Math.floor(Math.random() * 12 + 1)
    let crystal2 = Math.floor(Math.random() * 12 + 1)
    let crystal3 = Math.floor(Math.random() * 12 + 1)
    let crystal4 = Math.floor(Math.random() * 12 + 1)

    console.log("Pink: " + crystal1, "Blue: " + crystal2, "Purple: " + crystal3, "Green: " + crystal4);

    let playerScore = 0;
    let wins = 0;
    let losses = 0;

    // wins and losses counter //
    function winner() { 
        wins++;
        alert("Winner!"); 
        reset();
    }

    function loser() {
        losses++;
        alert("Loser");
        reset();
    }

    // click commands for each gem //

    $("#pink").on("click", function() {
        playerScore = playerScore + crystal1;
        $("totalScore").text(playerScore); 
    
        if (playerScore == Random) {
            alert("You Win!")
        }

        else if (playerScore > Random) { 
            alert("Nope, you lose!");
        }
    })

    $(".blue").on("click", function() {
        playerScore = playerScore + crystal2;
        $("totalScore").text(playerScore); 
    
        if (playerScore == Random) {
            alert("You Win!")
        }

        else if (playerScore > Random) { 
            alert("Nope, you lose!");
        }
    })
    
    $(".purple").on("click", function() {
        playerScore = playerScore + crystal3;
        $("totalScore").text(playerScore); 
    
        if (playerScore == Random) {
            alert("You Win!")
        }

        else if (playerScore > Random) { 
            alert("Nope, you lose!");
        }
    })

    $(".green").on("click", function() {
        playerScore = playerScore + crystal4;
        $("totalScore").text(playerScore); 
    
        if (playerScore == Random) {
            alert("You Win!")
        }

        else if (playerScore > Random) { 
            alert("Nope, you lose!");
        }
    })


});