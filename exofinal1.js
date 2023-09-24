"use strict"

//Exo 1 : le tueur en série

class Personnage {

    constructor(nom, probabiliteAttaque, probabiliteMourir, probabiliteMourirAttaque) {
      this.nom = nom;
      this.pointsDeVie = 100
      this.probabiliteAttaque = probabiliteAttaque;
      this.probabiliteMourir = probabiliteMourir;
      this.probabiliteMourirAttaque = probabiliteMourirAttaque; // caractéristiques des joueurs
    }
  
    
    riposter(cible, index) { // que pour les survivants
      let prob = Math.floor(Math.random() * 2); // formule pour l'aléatoire , prob entre 0 et 1

      switch(prob){ // permet de définir les différents cadres de figures
        case 0:
            cible.pointsDeVie -= 10 // -10 points de vie
            console.log(`${this.nom} attaque ${cible.nom} et inflige 10 points de dégâts.`);
            break; // permet de couper 
        case 1:
          cible.pointsDeVie -= 15;

          console.log(`${this.nom} inflige 15 points de dégâts et meurt.`);
          this.pointsDeVie = 0
          survivants.splice(index, 1) // pour supp un perso de la liste
          break; 
      }
      }
    
    attaquer(cible) {
      cible.pointsDeVie -= 10 // -10 points de vie

      console.log(`${this.nom} attaque ${cible.nom} et inflige 10 points de dégâts.`);
    }
}

// on définit tous les noms possibles
let list_name =  ["Lilian", "Thomas", "Hugo", "Marcel", "Chloé", "Camille", "Mathilde", "Nathalie", "Didier"];

// on définit le nombre de joueurs
let max_player = 5;

// on crée une liste pour stocker les joueurs
let survivants = [];

// on fait une boucle qui tourne jusqu'à ce que la liste soit égale au nombre de joueurs (choisi avec max_player)
while (survivants.length < max_player) {
    // on génére un nombre entre 0 et la taille de la liste donc
    let random_number = Math.floor(Math.random() * list_name.length);
    // on récupére le nom du joueur associé au nombre
    let playerName  = list_name[random_number];

    let prob = 100
    let ProbAttaque = Math.floor(Math.random() * 33)
    prob -= ProbAttaque
    let ProbAttaqueMourir = Math.floor(Math.random() * prob)
    prob -= ProbAttaqueMourir
    let ProbMourir = prob
    


    let personnage = new Personnage(
        playerName,
        ProbAttaque/100, // on divise par 100 pour créer une probabilité entre 0 et 1
        ProbMourir/100,
        ProbAttaqueMourir/100
    );
    
    // on supprime le joueur pour qu'il ne soit plus utilisé (pour qu'il y a toujours 5 joueurs différents)
    list_name.splice(random_number, 1);
    // on ajoute le joueur à notre tableau
    survivants.push(personnage);

}

// résultat
console.log(survivants)

let Jason = new Personnage("Jason", 100, 0.3, 0, 0.2); // Caractéristiques de Jason

let tour = 1;
while (Jason.pointsDeVie > 0 || survivants.length > 0) { // Tant que jason a encore des points de vie ou qu'il reste encore des survivants, alors on continue
    console.log(`Tour ${tour}:`); // on affiche le tour

    let randomIndex = Math.floor(Math.random() * survivants.length); // aléatoire
    let playerSurvivant = survivants[randomIndex] // pour chercher dans le tableau un survivant aléatoire
    Jason.attaquer(playerSurvivant); // Jason attaque le joueur généré aléatoirement

    if (playerSurvivant.pointsDeVie <= 0) {
        console.log(`${Jason.nom} a vaincu le survivant !`); 
    } else {
      playerSurvivant.riposter(Jason, randomIndex)

      if (Jason.pointsDeVie <= 0) { // les différentes finalités possibles
        console.log(`${playerSurvivant.nom} a vaincu Jason !`);
        break;
      } else if (playerSurvivant <= 0){
        console.log(`${playerSurvivant.nom} a riposté et est mort.`)
      } else if (playerSurvivant.pointsDeVie <= 0 && Jason.pointsDeVie <= 0){
        console.log(`${playerSurvivant.nom} et ${Jason.nom} se sont entretués`)
      } else if (survivants.length == 0) {
        break;
      }
    }


    console.log(`${Jason.nom} : ${Jason.pointsDeVie} points de vie`); // pour afficher les points de vies des joueurs
    console.log(`${playerSurvivant.nom} : ${playerSurvivant.pointsDeVie} points de vie`);
    

    tour++; // pour ajouter des tours
}


if (Jason.pointsDeVie <= 0) {
console.log("Jason a été vaincu par les survivants. Les survivants gagnent !");
} else if (survivants.length <= 0) {
console.log("Les survivants ont été vaincus par Jason ! Jason gagne !");
} else {
console.log("Le combat se termine en match nul. Jason et les survivants sont épuisés !");
}