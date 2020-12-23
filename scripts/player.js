player1 = document.getElementById("player1")
player2 = document.getElementById("player2")

name_player1 = document.getElementById("name_player1");
name_player2 = document.getElementById("name_player2");

save_nameplayer1 = document.getElementById("save_player1");
save_nameplayer2 = document.getElementById("save_player2");

save_nameplayer1.addEventListener('click', savePlayer);
save_nameplayer2.addEventListener('click', savePlayer);

function savePlayer(object){
    if(object.target.id[11] == '1' && name_player1.value != ''){
        player1.innerText = name_player1.value;
    }
    else if(object.target.id[11] == '2' && name_player2.value != ''){
        player2.innerText = name_player2.value;
    }else{
        alert("The name can not be blank!");
    }
}