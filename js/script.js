//DICHIARAZIONE
//chiedere km da percorrere
//chiedere eta
const km = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(km, typeof(km));

const age = parseInt(prompt('Quanti anni hai?'));
console.log(age, typeof(age));

//ELABORAZIONE
//calcolare prezzo biglietto (0,21€ / km)

const normalPrice = 0.21 * km;
console.log(normalPrice);

//se la persona a meno di 18 anni sconto 20%
//se e over 65 sconto 40%

let finalPrice;
let sale20 = normalPrice * 20 / 100;
let sale40 = normalPrice * 40 / 100;

if (age < 18) {
    finalPrice = normalPrice - sale20;
} else if (age > 65) {
    finalPrice = normalPrice - sale40;
}else {
    finalPrice = normalPrice;
}


//OUTPUT
document.getElementById('ticketPrice').innerHTML = finalPrice.toFixed(2);
