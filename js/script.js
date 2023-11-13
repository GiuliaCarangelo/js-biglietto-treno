// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



// L'utente inserisce i due valori richiesti
const userLength = Number(parseFloat(prompt('Inserisci il numero di chilometri (km) che dovrai percorrere')));
const userAge = parseInt(prompt('Inserisci l\'età del passeggero'));
console.log(userLength);
console.log(userAge);

let ticketPrice = Number(parseFloat(userLength * 0.21));

if (userAge < 18) {
    let discount = (ticketPrice * 20) / 100;
    ticketPrice = ticketPrice - discount;
    
    console.log('Hai ottenuto lo sconto del 20%! -' + discount + '€.\n Ora il ticket costa: ' + ticketPrice + '€');
}else if (userAge >= 65) {
    let discount = (ticketPrice * 40) / 100;
    ticketPrice = ticketPrice - discount;

    console.log('Hai ottenuto lo sconto del 40%! -' + discount + '€.\n Ora il ticket costa: ' + ticketPrice + '€');
}

document.getElementById('finalprice').innerHTML = ticketPrice.toFixed(2) + " €";

