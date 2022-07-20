var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// undefine, ya que aunque hay una variable global con el mismo nombre
// al hacer el hoisting en el contexto de ejecución de la función detecta 
// otra variable de igual nombre y le asigna undefine. Como nunca entra al if nunca le asigna valor. 
// Por eso el undefine