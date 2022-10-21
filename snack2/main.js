/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


const parole = ["pippo", "PLUTO", "Paperino"];


const secondoArrayConLettereInizialiMaiuscole = parole.map(element => {
    let newWord = element.toLowerCase();
    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
});

//oppure
const secondoArray = parole.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
});

//oppure
const secondoArrayDiParole = parole.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());

console.log(secondoArrayConLettereInizialiMaiuscole);
console.log(secondoArray);
console.log(secondoArrayDiParole);
