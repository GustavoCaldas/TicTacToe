document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    button_x = document.getElementById("button_x");
    button_x.addEventListener('click', controlPlaytime);

    button_o = document.getElementById("button_o");
    button_o.addEventListener('click', controlPlaytime);

    function handleClick(object){
        let pos = object.target.id[7];
        playMove(pos, object.target);
        setTimeout(checkWinner, 20);
    }
})