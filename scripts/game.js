let grid = [null, null, null,
    null, null, null,
    null, null, null];

let winnersPlay = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],                       
                    [2,4,6]];

let lastPlay = null;
let currentPlay = null;

function controlPlaytime(object){
    // Control the time of every player on the game.
    currentPlay = object.target.id[7];
    if (lastPlay != null){
        if(lastPlay == 'x' && currentPlay == 'x'){
            alert("This piece you have already used!");
            alert("Choose another one!");
            currentPlay = null;
        }else if (lastPlay == 'o' && currentPlay == 'o'){
            alert("This piece you have already used!");
            alert("Choose another one!");
            currentPlay = null;
        }
    }
}

function playMove(pos, object){
    // Check if the position that user choose is
    // blank, if it is we fill the square with a image.
    if(currentPlay != null){
        if(grid[pos] == null){
            grid[pos] = currentPlay;
            lastPlay = currentPlay;
            if(currentPlay == 'x'){
                object.style.backgroundImage = "url('../assets/icns/X.png')";
            }else if(currentPlay == 'o'){
                object.style.backgroundImage = "url('../assets/icns/O.png')";
            }
            currentPlay = null;
        }else{
            alert("This square is filled!");
            alert("Choose another one!");
        }
    }else{
        alert("Choose a piece!");
    }
}

function checkWinner(){
    // Verify if someone wins the game.
    winnersPlay.forEach((element) => {
        if(grid[element[0]] != null || grid[element[1]] != null
            || grid[element[2]] != null){
                if(grid[element[0]] === grid[element[1]] &&
                    grid[element[0]] === grid[element[2]]){
                        alert("Someone Win!");
                    }
            }
    })
}

function reset(){
    // Reset the game.
    for(let i=0; i<grid.length; i++){
        grid[i] = null;
    }
    console.log(grid)
    lastPlay = null;
    currentPlay = null;
}