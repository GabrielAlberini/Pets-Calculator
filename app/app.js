let temperatura = prompt("¿Cuantos años tiene tu mascota?");

function convertidor(temperatura) {
    let edadHumana = (temperatura * 7);
    return edadHumana;
}

alert(convertidor(temperatura) + " ¿Muy interesante no? ¿Ya lo sabias?" )