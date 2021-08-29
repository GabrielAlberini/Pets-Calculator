let temperatura = prompt("¿Cuantos años tiene tu mascota?");

function convertidor(temperatura) {
    let edadHumana = (temperatura * 7);
    return edadHumana;
}

alert(convertidor(temperatura) + " ¿Muy interesante no? ¿Ya lo sabias?" )





let nombre = prompt("¿Como se llama tu mascota?");

function petsType(type) { 
    let dogOrCat = prompt("Tu mascota, es perro o gato"); 
    return("Tu mascota es " + dogOrCat) 
}
