class encriptador{

    static desplazamiento(str, n){
        return [...str].map((l)=>{
            return String.fromCodePoint(l.charCodeAt(0) + n);
        }).join("");
    }

    static reemplazo(str){
        let palabraClave = "murcielagoMURCIELAGO";
        return [...str].map((l)=>{
            for(let i = 0; palabraClave[i] != undefined; i++){
                if(palabraClave[i] == l){
                    return String.fromCodePoint(i);
                }
            }
            return l;
        }).join("");
    }

    static revertir(str){
        let palabraClave = "murcielagoMURCIELAGO";
        return [...str].map((l)=>{
            for(let i = 0; palabraClave[i] != undefined; i++){
                if(i == l.charCodeAt(0)){
                    return palabraClave[i];
                }
            }
            return l;
        }).join("");
    }

    static enmascarador(str){
        return encriptador.desplazamiento(encriptador.reemplazo(encriptador.desplazamiento(str, 1)), 6);
    }

    static desenmascarador(str){
        return encriptador.desplazamiento(encriptador.revertir(encriptador.desplazamiento(str, -6)), -1);
    }
}
let encriptado = encriptador.enmascarador("123");
console.log(encriptado);
export default encriptador;