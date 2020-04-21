// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()


// outro exemplo IIFE

var adder = (function () {
    var myPhrase = "";
    return function (x) {
        return myPhrase =
            !!myPhrase ? myPhrase.concat(" ", x) : myPhrase.concat(x);
    }
})();

console.log(adder("Olá")); // "Olá"
console.log(adder("Mundo!")); // "Olá Mundo!"

//myPhrase; // myPhrase is not defined