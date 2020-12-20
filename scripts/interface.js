document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    botao_x = document.getElementById("button_x");
    botao_x.addEventListener('click', controlPlaytime);

    botao_o = document.getElementById("button_o");
    botao_o.addEventListener('click', controlPlaytime);

    function handleClick(object){
        let pos = object.target.id[7];
        playMove(pos, object.target);
    }
})