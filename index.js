const log4js = require('log4js');

const logger = log4js.getLogger();
/* logger.level = "debug"; */
logger.level = "info";

logger.debug("Iniciando la app en modo de pruebas.");
logger.info("Usuario ha iniciado sesion.");
logger.warn("Falta el archivo config de la app.");
logger.error("No se pudo ejecutar la accion.");
logger.fatal("No se pudo iniciar la aplicacion.");

function sumar(x, y)
{
    return x + y;
}

let variable_mal_escrita = 0;

// Para exportarla de index.js a indexTest.js
// Expone el metodo para que cualquiera en el proyecto pueda utilizarlo.
module.exports = sumar;