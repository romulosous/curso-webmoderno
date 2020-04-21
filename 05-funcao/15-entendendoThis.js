var firstName = 'Peter',
    lastName  = 'Ally';
​
function showFullName () {
    // "this" dentro dessa função terá o valor do objeto "window" porque a função "showFullName"
    // é definida no escopo global, assim como "firstName" and "lastName​".
    console.log( this.firstName + ' ' + this.lastName );
}
​
var person = {
    firstName    : "Penelope",
    lastName     : "Barrymore",
    showFullName : function() {
        // "this" se refere ao objeto "person", já que a função "showFullName" será invocada 
        // pelo objeto "person".
        console.log( this.firstName + ' ' + this.lastName );
    }
}
​
showFullName(); // Peter Ally​
​
// "window" é o objeto em que todas as variáveis globais e funções são definidas, portanto:
window.showFullName(); // Peter Ally​
​
// "this" dentro do método "showFullName", que é definido dentro do objeto "person", ainda se refere 
// ao objeto "person", então:
person.showFullName(); // Penelope Barrymore