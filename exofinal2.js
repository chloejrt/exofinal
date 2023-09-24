// Exo 2 : taxi

 "use strict"

const musiques = ["Anissa de Wejdene","Papaoutai de Stromae","Pilote de plk","No love de ninho","C'est carre le s de Naps"] ;
let santeMentale = 10;
let feuxRouge = 0; 

function choisirMusique() {
  feuxRouge++; 
  
  let index = Math.floor(Math.random() * 5);
  console.log("index=" +index);
  let musique = musiques[index];
 
    
  if (musique == "Anissa de Wejdene") { 
    santeMentale = santeMentale -1;
  } 

  return musique; 
}

while (feuxRouge < 30) {
  let musique = choisirMusique();
  if(santeMentale ==0)
  {
    console.log("Explosion.");
    break;
  }
  console.log ('John a recontré le feu rouge ' + feuxRouge);
  console.log ('Musique jouée dans le taxi ' +musique);
  console.log ('La santé mentale actuelle ' + santeMentale);
  
}

if (santeMentale > 0) { 
  console.log("John est bien arrivé avec une santé mentale finale de : " + santeMentale);
}

console.log(`Nombre d'essais effectués : ${feuxRouge}`);
