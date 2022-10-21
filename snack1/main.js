/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const auto = [
    {
        marca: 'BMW',
        modello: '74-e',
        Alimentazione: 'benzina',
    },
    {
        marca: 'audi',
        modello: 'tt',
        Alimentazione: 'diesel',
    },
    {
        marca: 'fiat',
        modello: 'panda',
        Alimentazione: 'benzina',
    },
    {
        marca: 'toyota',
        modello: 'yaris',
        Alimentazione: 'diesel',
    },
    {
        marca: 'renault',
        modello: '5 gt turbo',
        Alimentazione: 'gpl',
    },
    {
        marca: 'renault',
        modello: 'clio',
        Alimentazione: 'gpl',
    },
    {
        marca: 'alfa romeo',
        modello: '169',
        Alimentazione: 'elettrico',
    },
    {
        marca: 'mini',
        modello: 'couper s',
        Alimentazione: 'elettrico',
    },
    {
        marca: 'dacia',
        modello: 'duster',
        Alimentazione: 'metano',
    },
    {
        marca: 'peugeot',
        modello: '206',
        Alimentazione: 'metano',
    }


]

const autoBenzina = auto.filter(Element => {
    if (Element.Alimentazione === 'benzina') {
        return true;
    }
    return false;

});


const autoDiesel = auto.filter(Element => {
    if (Element.Alimentazione === 'diesel') {
        return true;
    }
    return false;

});

const tutteLeAltreAuto = auto.filter(Element => {
    if (Element.Alimentazione !== 'benzina' && Element.Alimentazione !== 'diesel') {
        return true;
    }
    return false;

});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(tutteLeAltreAuto);