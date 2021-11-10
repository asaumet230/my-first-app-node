const fs2 = require('fs');

const crearArchivo2 = ( base = 5 ) => {

        console.log('======================');
        console.log('Tabla del ', base );
        console.log('======================');

        return new Promise((resolve, reject) => {

            let salida = '';

             for (let index = 1; index <= 10; index++) {
                const valor = base * index;
                salida += `${ base } * ${ index } = ${ valor } \n`;
            }

            if(salida !== '') {
                console.log( salida );
                fs2.writeFileSync(`tabla-${base}.txt`, salida);
                resolve( `tabla-${base}` );
            } else {
                reject('hubo un error al crear el archivo');
            }
    });
}

module.exports = {
    crearArchivo2
}