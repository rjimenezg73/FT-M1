console.log(bar);  //undefined
console.log(baz);  // Error. Ya que las variables globales no se almacenan en el hoisting
foo();   // Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;