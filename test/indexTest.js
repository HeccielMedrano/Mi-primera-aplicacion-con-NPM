// Se puede usar import o require, ambas sirven.
// Edit: Si importa a fin de cuentas, usa require, aunque este por el tipo de caso que es
/* import suma from '../index'; */
const sumar = require('../index');
const assert = require('assert');

// Hay varias metodologias para hacer pruebas.
// En este caso se usara el 50%.
// 1 prueba que este ok, y otra prueba que falle.
// La idea es demostrar tanto que funciona, como que falle correctamente.

// describe = Agrupa los asos de prueba.
describe("Probar la suma de dos numeros", () => {
    // Afirmar que 5 + 5 = 10
    it("Cinco mas cinco es 10", () => {
        // El valor de la izquierad es el valor esperado, y el de la derecha el evaluado
        assert.equal(10, sumar(5, 5));
    });

    // Afirmar que 5 + 5 != 55
    it("Cinco mas cinco es no es 55", () => {
        assert.notEqual(55, sumar(5, 5));
    });
});