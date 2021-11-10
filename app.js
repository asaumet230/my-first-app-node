const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


// const { crearArchivo2} = require('./helpers/multiplicar2');

/********** Este comando limpia la consola antes de que la APP se ejecute: *******************/
console.clear();

// const base = 10;
// const base2 = 11;

// crearArchivo2( base2 )
//     .then( nombreArchivo => console.log(nombreArchivo, 'Creado archivo 2'))
//     .catch( err => console.log(`Hubo un error ${ err }`));


/***********  FORMA DE TRABAJAR CON LAS VARIABLES DE ENTORNO O LAS VARIABLES QUE VENGAN DE LA CONSOLA **********/

// console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base ] = arg3.split('=');
// console.log( Number(base) );


/***********  PAQUETE YARGS PARA TRABAJAR CON ESTAS MISMAS VARIABLES **********/

const { base, listar, hasta } = argv;

console.log( argv );
// console.log( process.argv );

crearArchivo( Number(base), listar, hasta )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creada'))
    .catch( err => console.log(`Hubo un error ${ err }`));