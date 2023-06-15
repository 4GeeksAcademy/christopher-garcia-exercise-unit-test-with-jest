// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueToEuro = valueInDollar/1.26
    let valueToYen = valueToEuro*127.9;
    return valueToYen;
}

const fromYenToPound = function(valueInYen){
    let valueToPound = valueInYen * 0.0062548866301798 ;
    return valueToPound;

}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }