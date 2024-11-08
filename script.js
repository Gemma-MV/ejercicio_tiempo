function validar() {
    let mail = document.getElementById('mail');
    let password = document.getElementById('clave').value;
    let password2 = document.getElementById('clave2').value;

    if (password === password2) { 
        if (validarPassword(password)) { 
            return true; 
        } else { 
            alert("La contraseña debe contener 2 mayúsculas, un carácter (* / - # ~), 3 números entre 5 - 9 y un tamaño entre 10 - 15 caracteres.");
            return false; 
        } 
    } else { 
        alert("Las contraseñas no coinciden"); return false;
    }
}

function validarPassword(password) { 
    let mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'; 
    let especiales = '*/-#~'; 
    let numeros = '56789'; 
    let valida = true;
    let contadorM = 0; 
    let contadorS = 0;
    let contadorN = 0;
    let arr = Array.from(password);

    //Comprobar mayusculas
    arr.forEach(e => {
        if(mayusculas.includes(e)){
            contadorM++;
        }
    })

    //Comprobar símbolo
    arr.forEach(e => { 
        if(especiales.includes(e)){
            contadorS++;
        }
    })

    // Comprobar numeros
    arr.forEach(e => { 
        if(numeros.includes(e)){
            contadorN++;
        }
    })

    if (
        valida &&
        // mayor que 10
        arr.length >= 10 && 
        // menor que 15
        arr.length <= 15 &&
        // que tenga al menos 1 letra mayuscula
        contadorM >= 2 &&
        // que tenga al menos 2 numeros 
        contadorN >= 5 && 
        contadorN <= 9 && 
        // que tenga al menos 1 símbolo
        contadorS >= 1     
    ) {
        alert('Contraseña registrada');
    } else {
        alert('Contraseña incorrecta');
        valida = false;
        return valida;
    }
    return valida;
}