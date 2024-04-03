export function listaGen(){
    const lista = [];
    for (let index = 0; index < 9; index++) {
        let rszam = Math.floor(Math.random() * 2);
        lista.push(rszam);
    }
    //console.log(lista)
    return lista
}

export function jatekTabla(lista){
    let txt = ""
    for (let index = 0; index < lista.length; index++) {
        txt += `<div id = "tabla">
        <p>${lista[index]}</p>
        </div>
        `      
    }
    return txt
}

const tablaELEM = $("#tabla")
tablaELEM.html(jatekTabla(listaGen()))

export function kapcsolo(lista){
    /* 
    i % 3 == 0 bal oszlop (nem +3)
    i % 3 == 2 jobb oszlop (nem -3)
    
    i + 1
    i - 1
    i + 3
    i - 3
    */
    for (let index = 0; index < lista.length; index++) {
        if (lista[index] == 0){
            lista[index] + 1 == 1
            lista[index] - 1 == 1
            lista[index] + 3 == 1
            lista[index] - 3 == 1
        }
    }
}

const kapcsoloELEM = $("#tabla")
kapcsoloELEM.on("click", function(){
    
})
