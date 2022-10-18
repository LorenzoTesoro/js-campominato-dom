/* function cellGenerator () */
function cellGenerator (cellNumber, domEl){
    for(i = 1; i <= cellNumber; i++){
        domEl.innerHTML += `<div class="cell">${i}</div>`;
    }
}

/* Generate grid */

const btnEl = document.querySelector("button"); // button selector

btnEl.addEventListener("click", function (){

    const containerEl = document.querySelector('.container'); 
    const cellNumber = 100;
    cellGenerator(cellNumber,containerEl);

    const cellList = document.querySelectorAll(".cell")

    for(let i = 0; i < cellList.length; i++){
       const thisCell = cellList[i];
        // change cells color
       thisCell.addEventListener("click", function(){
            thisCell.classList.add("light_blue");
            console.log(i);
       })

    }
})

/* Consegna

1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
1.1. Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
2. L'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
3. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
4. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/

/* Strumenti

    1. function MathrandomNumbers () - genera un array che contiene i numeri casuali
    1.1. Evitare doppioni: uso if() per fare la verifica che una bomba non sia presente due volte nella stessa cella.
    2. addEventListener("click", function){
        if numero è presente, allora colora la cella di rosso e termina la partita, else colora la cella di azzurro e continua la partita.
    }
    3. Termine partita: Condizione da indicare nel loop
    4. Inserisco nella dom il punteggio = n. di click su caselle senza bombe
*/