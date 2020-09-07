const app = document.querySelector(".app");

const restart = document.querySelector(`.restart`);

restart.addEventListener(`click`, function(e){
    YouWin(false);

    app.querySelectorAll(`input`).forEach(element => {
        element.checked = false;
    });
});

app.addEventListener(`click`, function(e){
    const hit = e.target; // onde atingiu

    SwapBlocks(hit);
});

function YouWin(status){
    const dialog = document.querySelector(`dialog`);

    dialog.open = status;
}

function SwapBlocks(hit){
    const restaUm = app.querySelectorAll(`input`);
    let n = 0;
    const blockMap = [
        [restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++]],
        [restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++]],
        [restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++]],
        [restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++]],
        [restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n++], restaUm[n]]
    ]; // UMA PUTA DUMA GAMBIARRA BICHO
    for (let Y = 0; Y < blockMap.length; Y++) {
        for (let X = 0; X < blockMap[Y].length; X++) {
            if(hit == blockMap[Y][X]){
                if(!(X-1 < 0)) {
                    CheckUncheckBlock(blockMap[Y][X-1]);
                }
                if(!(X+1 >= blockMap[Y].length)) {
                    CheckUncheckBlock(blockMap[Y][X+1]);
                }
                if(!(Y-1 < 0)) {
                    CheckUncheckBlock(blockMap[Y-1][X]);
                }
                if(!(Y+1 >= blockMap.length)) {
                    CheckUncheckBlock(blockMap[Y+1][X]);
                }
            }
        }
    }
    let status = true;
    restaUm.forEach(element => {
        if(!element.checked){
            status = false;
        }
    });

    if(status)
        YouWin(status);

}

function CheckUncheckBlock(block){
    if(block.checked) {
        block.checked = false;
    } else {
        block.checked = true;
    }
}
