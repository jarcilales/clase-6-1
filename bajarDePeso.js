


function bajarDePeso(peso, pesoIdeal, kilosPorSemana) {
    let contador=0;
    while(peso>pesoIdeal){
        peso-=kilosPorSemana;
        let kilos = parseInt(prompt("Cuantos kilos bajaste esta semana?"))
        bajarDePeso(peso,pesoIdeal,kilos)
        contador++
    }
    console.log(`Ya llegaste a tu peso ideal te tardaste ${contador} semanas`)
}

bajarDePeso(100, 70,1);