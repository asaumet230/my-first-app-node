const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => {

    try {

       

        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
        
            const valor = base * index;
            salida += `${ base } '*' ${ index } '=' ${ valor } \n`;
            consola += `${ base } ${ '*'.red } ${ index } ${ '='.red } ${ valor } \n`; //PORQUE DE ESTA FORMA? si imprimimos los colores el archivo de texto sale con los carcteres especiales que representan los colores
            
        }

        // El paqete file system graba archivos tambien los guarda donde este funcionando la aplicación de NODE.
        // fs.writeFile(`tabla-${base}.txt`, salida, ( err )=> {
        //     if(err)throw err;
        //     console.log(`Tabla del ${base} creada`);
        // });

        //Otra forma de crear el archivo:
        fs.writeFileSync(`./docs/tabla-${base}.txt`, salida);

        if( listar )  {
            
            console.log('======================'.green);
            console.log('Tabla del : '.blue, colors.blue( base ) );
            console.log('======================'.green);
            console.log(consola);
        }
       
        return `Tabla-${base}`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}