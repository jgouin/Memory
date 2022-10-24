// gerer le bug du clic deux fois sur la même image 
// gerer le nombre de cartes à touver 
// gerer le mode aleatoire 
// gerer le debut et la fin de la partie
// pouvoir relancer une partie
// gerer le nombre de parties gargnées

/* Déclaration des variables */
let TableGame;

let cptclickCurrent = 0;
let cardClickedId;
//let dataImageShowed;
const cards = ["RoiCarreau", "RoiCoeur", "DameTrefle", "ValetTrefle", "DamePique", "ValetPique"];
const gameBoard = document.getElementById("gameBoard");




// Fonction qui gère ce qui se passe sur chaque clique de carte
function clickOnCardEvent (card){
    let allCards = document.querySelectorAll(".card");
    if (card.classList.contains("found")) {
        // Return signifie "tu ne fais pas cette fonction"
        return;
    }
    cptclickCurrent ++;
    if (cptclickCurrent == 1){
        // premier clique, je cache les images trouvées avant 
        allCards.forEach(card => {
            if (card.classList.contains("found")){
                // c'est une carte trouvée 
            }
            else {
                card.classList.add("hidden");
                // Pas trouvé, la carte doit être cachée
            }
            
        });
        // j'affiche la carte sur laquelle je viens de cliquer
        card.classList.remove("hidden");
        // je stocke la valeur de la carte
        cardClickedId = card.id;
    }
    else if(cptclickCurrent == 2){
        // deuxieme clique, je vérifie si l'image à été trouvée
        if (cardClickedId == card.id) {
            cptclickCurrent = 1;
        }
        else {
            card.classList.remove("hidden");
            let cardClickedBefore = document.getElementById(cardClickedId);
            if (cardClickedBefore.dataset.image == card.dataset.image) {
                allCards.forEach(card => {
                    if (card.classList.contains("hidden")){
                    // c'est une carte cachée 
                    }
                    else {
                       card.classList.add("found");
                    // c'est une carte trouvée
                    }   
                });
            }
            cptclickCurrent = 0;
            // Pour savoir si j'ai déjà découvert une ou deux cartes
            // remise à zéro car on est dans le esle if et on ne veut pas qu'il y ait plus de 2 cliques
            cardClickedId = "";
            // on reset aussi la valeur du cardClickedId pour pouvoir rejouer l'action
        }

    }
    let elementFound = document.getElementsByName('found')

    for(let elementFound of element){
      if (elementFound.hasAttribute('class')) {
        console.log(element.innerText)
      }
    }
}
// je crée une fonction "initGame" avec une variable qui équivaut au nombre de paires souhaitées
function initGame(nbPaires){
    gameBoard.innerHTML += "";
    // je crée mon tableau "gameCards" qui est vide pour le moment
    let gameCard = []; 
    // Tant que ma variable i est inférieur au nombre de paires souhaitées, tu ajoutes deux cartes similaires "cards[i]"
    for (let i = 0; i < nbPaires; i++){
        gameCard.push([cards[i], false]);
        gameCard.push([cards[i], false]);
    }
    console.log(gameCard);
    // Pour la longueur de mon paquet de cartes (tableau)
    for (let i = 0; i < gameCard.length; i ++){
        //Tant que le tableau de mon paquet de cartes n'est pas complet
        let cardPosition = false;
        while (!cardPosition){
            // Reprend un nombre aléatoire et rejoue le pour lui trouver une place
            let randomNumber = getRandomeArbitrairy (0, gameCard.length);
            if (gameCard[randomNumber][1] == false){
                cardPosition = true;
                gameCard[randomNumber][1] = true;
                // Génère code HTLM et l'ajoute 
                let htmlCard = getHtmlCodeCard (gameCard[randomNumber][0], i);
                gameBoard.innerHTML += htmlCard;
            }
        }
        
    }
    // Déclartion des évènements
    // J'ajoute l'évèneemnts clique sur chaque carte 
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(card => {
        card.addEventListener("click", function(){
            clickOnCardEvent(card);
        });
    });
}

function getRandomeArbitrairy(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function getHtmlCodeCard(cardName, id){
    return`<div class="card hidden" id="${id}" data-image="${cardName}">
            <img class="images" src="img/${cardName}.png" />
    </div>`;
}