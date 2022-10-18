
/* Generate cells */
function cellGenerator (cellNumber, domEl){
    for(i = 1; i <= cellNumber; i++){
        domEl.innerHTML += `<div class="cell">${i}</div>`;
    }
}

/* Generate random numbers between min/max */
function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* Generate bombs based on random numbers */
function generateBombs (min, max){

    const bombs = []; // empty array declaration
    
    // while loop to push random numbers into array (until i is different from 16)
    while(bombs.length !== 16){
        const bomb = generateRandomNumbers(1,100);
        // if statement: if bombs[] doesn't include bomb, push it to array
        if(!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    }
    return  bombs;
}

/* Generate grid */
const btnEl = document.querySelector("button"); // button selector
const containerEl = document.querySelector('.container'); // grid selector
const options = document.querySelectorAll("option"); // options selector

btnEl.addEventListener("click", function (){

    containerEl.innerHTML = '';

    let cellNumber = 0;

    if(options[1].selected){    // level 1
       cellNumber = 100;
       cellGenerator(cellNumber, containerEl);

       const cellList = document.querySelectorAll(".cell");

       for(let i = 0; i < cellList.length; i++){
           const thisCell = cellList[i];
           thisCell.classList.add("grid_10");
       } 
    } 
    else if (options[2].selected){        // level 2
       cellNumber = 81;
       cellGenerator(cellNumber, containerEl);

       const cellList = document.querySelectorAll(".cell");
       for(let i = 0; i < cellList.length; i++){
           const thisCell = cellList[i];
           thisCell.classList.add("grid_9");
       }
   } 
   else if(options[3].selected){             // level 3
       cellNumber = 49;
       cellGenerator(cellNumber,containerEl);
       const cellList = document.querySelectorAll(".cell");
       for(let i = 0; i < cellList.length; i++){
           const thisCell = cellList[i];
           thisCell.classList.add("grid_7");
       }
   }

    const bombs = generateBombs(1,100);
    
    const cellList = document.querySelectorAll(".cell")

    for(let i = 0; i < cellList.length; i++){
       const thisCell = cellList[i];

       thisCell.addEventListener("click", function(){

            const thisNumber = Number(thisCell.textContent);

            const result = document.querySelector("h2");

            const blueCells = document.querySelectorAll(".light_blue");
                // changing cell colors
                if(bombs.includes(thisNumber)){
                    thisCell.classList.add("red");
                    result.innerHTML = `Mi dispiace, hai perso. Il tuo punteggio è ${blueCells.length}`
                } else if(!bombs.includes(thisNumber)){
                    thisCell.classList.add("light_blue");
                    const maxBlueCells = cellNumber - bombs.length;

                    if(blueCells.length === (maxBlueCells - 1)){    // maxBlueCells selected
                        result.innerHTML = `Hai vinto!`;
                    }
                }
        })
    }
})
