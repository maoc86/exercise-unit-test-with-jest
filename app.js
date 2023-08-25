// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
//module.exports = { sum };

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEurosToDollar = (euros) => {
    return euros * 1.2
};

let fromDollarToEuro = (dollars) => {
    return  dollars / 1.2
};

let fromDollarToYen = (dollars) => {
    let euroToYen = fromDollarToEuro(dollars) * 127.9;
    let result = Math.floor(euroToYen)
    return result
};

let fromYenToPound = (yen) => {
    let yenToEuro = yen / 127.9
    let yentoPound = yenToEuro * 0.8
    return Math.floor(yentoPound)
};

console.log(fromYenToPound(1000));
module.exports = {sum, fromEurosToDollar, fromDollarToYen, fromYenToPound};