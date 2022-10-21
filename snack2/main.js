/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


const parole = ["pippo", "PLUTO","Paperino"];


const secondoArrayConLettereInizialiMaiuscole = parole.map(element => {
  let newWord = element.toLowerCase();
return  newWord.charAt(0).toUpperCase()+newWord.slice(1);

});

console.log(secondoArrayConLettereInizialiMaiuscole);
