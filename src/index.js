const nombre = ["motz", "alejo", "cope", "teo"]


function llamarA (nombre) { 
    nombre.forEach(element => {
        
        console.log (`Hola: ${element}`)
    });

}
llamarA (nombre)