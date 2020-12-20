let grid = [null, null, null,
    null, null, null,
    null, null, null];

let jogadasvencedoras = [];

let lastPlay = null;
let currentPlay = null;

function controlPlaytime(object){
    currentPlay = object.target.id[7];
    if (lastPlay != null){
        if(lastPlay == 'x' && currentPlay == 'x'){
            alert("Esta peca ja foi usada");
            currentPlay = null;
        }else if (lastPlay == 'o' && currentPlay == 'o'){
            alert("Esta peca ja foi usada");
            currentPlay = null;
        }
    }
}

function playMove(pos, id){
    if(currentPlay != null){
        if(grid[pos] == null){
            grid[pos] = currentPlay;
            lastPlay = currentPlay;
            if(currentPlay == 'x'){
                id.style.backgroundImage = "url('../assets/icns/X.png')";
            }else if(currentPlay == 'o'){
                id.style.backgroundImage = "url('../assets/icns/O.png')";
            }
        }else{
            alert("Este espaco esta preenchido!");
        }
        currentPlay = null;
    }else{
        alert("Selecione uma peca!");
    }
}

function checkWinner(){
     
}