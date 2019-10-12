$(document).ready(function() {
    let Random = Math.floor(Math.random() * 120 + 19)

    $("#targetScore").text(Random);

    let crystal1 = Math.floor(Math.random() * 12 + 1)
    let crystal2 = Math.floor(Math.random() * 12 + 1)
    let crystal3 = Math.floor(Math.random() * 12 + 1)
    let crystal4 = Math.floor(Math.random() * 12 + 1)
    console.log("Pink: " + crystal1, "Blue: " + crystal2, "Purple: " + crystal3, "Green: " + crystal4);

    let playerScore = 0;
    let wins = 0;
    let losses = 0;

    function winner() { 
        wins++;
        alert(Winner!); 
        reset();
    }

    function loser() {
        losses++;
        alert(Loser);
        reset();
    }
    
}