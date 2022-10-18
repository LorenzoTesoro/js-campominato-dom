/* Consegna

1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. (ok)
1.1. Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. (ok)
2. L'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
3. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
4. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/

/* Passaggi:
    3: 
    - Seleziono elemento della dom in cui stampare il messaggio (queryselector)
    - Se l'utente clicca su una casella che nasconde una bomba, allora:
        -la casella si colora di rosso e termina la partita
    - Altrimenti: 
        - la casella si colora di azzurro finchè l'utente non ha raggiunto il numero massimo di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
    4: stampo a schermo il risultato = n di volte che l'utente ha cliccato su una cella
        non compresa tra quelle che hanno le bombe
/*


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

btnEl.addEventListener("click", function (){

    
    containerEl.innerHTML = '';

    const cellNumber = 100;
    cellGenerator(cellNumber,containerEl);

    const bombs = generateBombs(1,100);
    console.log(bombs);
    
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
