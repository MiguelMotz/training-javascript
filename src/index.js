const nombre = ["motz", "alejo", "cope", "teo", 5, 7]


function llamarA (nombre) { 
    nombre.forEach(element => {
        
        console.log (`Hola: ${element}`)
    });

}
llamarA (nombre)