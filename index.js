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