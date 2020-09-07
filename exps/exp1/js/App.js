/**
 * para início, cada bloco é 100 x 100
 */

const mapCanvas = document.querySelector(`.map`);

const width = Number(mapCanvas.getAttribute(`width`));
const height = Number(mapCanvas.getAttribute(`height`));
const amount = 6;

const direction = {
    up: `↑`,
    down: `↓`,
    left: `←`,
    right: `→`,
    empty: `Ø`,
}

const roomType = [
    `notSolution`,
    `leftRight`,
    `leftRightBottom`,
    `leftRightTop`
]


function GenerateMap () {
    if (mapCanvas.getContext) {
        const ctx = mapCanvas.getContext(`2d`);

        const roomW = width/amount;
        const roomH = height/amount;

        const tileToStart = getRandom(1, 4);

        console.log(`starting at: [1, ${ tileToStart }]`);
        console.log(`roomType: ${ roomType[1] }`);
        setDirection();
        // desenhando o grid do mapa
        for (iterY = 0; iterY < amount; iterY++) {
            for (iterX = 0; iterX < amount; iterX++) {
                const panel = (iterX == 0 || iterY == 0) ||
                (iterX == amount - 1 || iterY == amount - 1)
                ? direction.empty : setDirection();
                // console.log(`${iterX},${iterY}`);
                
                ctx.strokeRect(iterX * roomW, iterY * roomH, roomH, roomW);
                
                ctx.font = `bold 24px sans`;
                ctx.textAlign = `center`;
                ctx.textBaseline = `middle`;
                ctx.strokeText(panel, (iterX * roomW)+50, (iterY * roomH)+50, roomW);
                ctx.fillText(panel, (iterX * roomW)+50, (iterY * roomH)+50, roomW);
            }
        }
        
    }
    
    console.log(`Generating the ${width} x ${height} Map`);
}

function getRandom (min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function setDirection (){
    switch (getRandom(1, 5)) {
        case 1:
        case 2:
            return direction.left;
            break;
        case 3:
        case 4:
            return direction.right;
            break;
        default:
            return direction.down;
            break;
    }
}
function ClearMap (event) {
    if (mapCanvas.getContext) {
        const ctx = mapCanvas.getContext(`2d`);

        ctx.clearRect(0, 0, width, height);
    }
    
    console.log(`Clearing the ${width} x ${height} Map`);
}

const generator = document.querySelector(`.generate`);

// verificação de tipo aguardando a renderização do objeto
// para prosseguir para esse trecho
// holy fcuk
if (typeof generator !== 'undefined') {
    // Agora que sabemos que foo está definida, podemos prosseguir
    generator.addEventListener(`click`, GenerateMap);
}
const clear = document.querySelector(`.clear`);

if (typeof clear !== 'undefined') {
    clear.addEventListener(`click`, ClearMap);
}



