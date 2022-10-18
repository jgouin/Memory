// gerer le bug du clic deux fois sur la même image 
// gerer le nombre de cartes à touver 
// gerer le mode aleatoire 
// gerer le debut et la fin de la partie
// pouvoir relancer une partie
// gerer le nombre de parties gargnées

/* Déclaration des variables */
let TableGame;
let allCards = document.querySelectorAll(".card");
let cptclickCurrent = 0;
let dataImageShowed;


// Déclartion des évènements
// J'ajoute l'évèneemnts clique sur chaque carte 
allCards.forEach(card => {
    card.addEventListener("click", function(){
        clickOnCardEvent(card);
    });
});

// Fonction qui gère ce qui se passe sur chaque clique de carte
function clickOnCardEvent (card){
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

    for(let elementFound of elements) {
      if (elementFound.hasAttribute('class')) {
        console.log(element.innerText)
      }
    }
}