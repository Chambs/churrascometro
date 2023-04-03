/*
Carne - 400g por pessoa (<6h);
      - 600g por pessoa (>=6h);

Cerveja - 1000ml por adulto (<6h);
        - 1500ml por adulto (>=6h);

Refrigerante/Suco - 1200ml por pessoa (<6h);
                  - 2000ml por pessoa (>=6h);

***Crianças valem por 0.5***
*/

let iAdultos = document.getElementById('adultos')
let iCriancas = document.getElementById('criancas')
let iHoras = document.getElementById('horas')

let resultado = document.getElementById('resultado')

function calc(){

    let adultos = iAdultos.value
    let criancas = iCriancas.value
    let horas = iHoras.value

    let totalCarne = carne_p(horas) * adultos + (carne_p(horas) / 2 * criancas)
    let totalCerveja = cerveja_p(horas) * adultos
    let totalBebidas = bebidas_p(horas) * adultos + (bebidas_p(horas) / 2 * criancas)

    resultado.innerHTML = `<span>➥ ${Math.ceil(totalCarne/1000)}kg de Carne </span><br>`
    resultado.innerHTML += `<span>➥ ${Math.ceil(totalCerveja/355)} latas de Cerveja </span><br>`
    resultado.innerHTML += `<span>➥ ${(totalBebidas/1000)}L de Bebidas </span>`
}

function carne_p(horas){
    if (horas >= 6){
        return 650
    }
    else{
        return 400
    }
}

function cerveja_p(horas){
    if (horas >= 6){
        return 1000
    }
    else{
        return 1500
    }
}

function bebidas_p(horas){
    if (horas >= 6){
        return 2000
    }
    else{
        return 1200
    }
}
