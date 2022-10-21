/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const auto = [
    {
        marca: 'BMW',
        modello: '74-e',
        alimentazione: 'benzina',
    },
    {
        marca: 'audi',
        modello: 'tt',
        alimentazione: 'diesel',
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'toyota',
        modello: 'yaris',
        alimentazione: 'diesel',
    },
    {
        marca: 'renault',
        modello: '5 gt turbo',
        alimentazione: 'gpl',
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'gpl',
    },
    {
        marca: 'alfa romeo',
        modello: '169',
        alimentazione: 'elettrico',
    },
    {
        marca: 'mini',
        modello: 'couper s',
        alimentazione: 'elettrico',
    },
    {
        marca: 'dacia',
        modello: 'duster',
        alimentazione: 'metano',
    },
    {
        marca: 'peugeot',
        modello: '206',
        alimentazione: 'metano',
    }


]

const autoBenzina = auto.filter(element => {
    if (element.alimentazione === 'benzina') {
        return true;
    }
    return false;

});


const autoDiesel = auto.filter(element => {
    if (element.alimentazione === 'diesel') {
        return true;
    }
    return false;

});

const tutteLeAltreAuto = auto.filter(element => {
    if (element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel') {
        return true;
    }
    return false;

});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(tutteLeAltreAuto);