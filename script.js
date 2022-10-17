// gerer le bug du clic deux fois sur la même image 
// gerer le nombre de cartes à touver 
// gerer le mode aleatoire 
// gerer le debut et la fin de la partie
// pouvoir relancer une partie
// gerer le nombre de parties gargnées


let TableGame;
let allCards = document.querySelectorAll(".card");
let cptclickCurrent = 0;
let dataImageShowed;


// Permet de masquer ou de démasquer les élements 
allCards.forEach(card => {
    card.addEventListener("click", function(){
        playGame(card);
    });
});

function playGame (card){
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
        dataImageShowed = card.dataset.image;
    }
    else if(cptclickCurrent == 2){
        // deuxieme clique, je vérifie si l'image à été trouvée
        card.classList.remove("hidden");
         if (dataImageShowed == card.dataset.image) {
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
        dataImageShowed = "";
        // on reset aussi la valeur du dataImageShowed pour pouvoir rejouer l'action

    }
    let elementFound = document.getElementsByName('found')

    for(let elementFound of elements) {
      if (elementFound.hasAttribute('class')) {
        console.log(element.innerText)
      }
    }
}