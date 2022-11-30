let PLAYER={
    tipo: "manga",
    anio_publicacion: 2001,
    genero: "shonen",
    capitulos:130,
    scan:"Raven_series",

    getTipo: function(){
        return this.tipo;
    },
    getAnio_publicacion: function(){
        return this.anio_publicacion;
    },
    getGenero: function(){
        return this.genero;
    },
    getCapitulos: function(){
        return this.capitulos;
    },
    getScan: function(){
        return this.scan;
    },


    setTipo: function(tipo){
        this.tipo=tipo;
    },

    setAnio_publicacion: function(anio_publicacion){
        this.anio_publicacion=anio_publicacion;
    },

    setGenero:function(genero){
        this.genero=genero;
    },

    setCapitulos:function(capitulos){
        this.capitulos=capitulos;
    },

    setScan:function(scan){
        this.scan=scan;
    }



}

console.log(PLAYER);

console.log(PLAYER.getTipo());

console.log(PLAYER.getAnio_publicacion());

PLAYER.setGenero("Seinen");
console.log(PLAYER.getGenero());

console.log(PLAYER.getCapitulos(PLAYER.setCapitulos(50)));


let manhwa={
    serie:[],



    setManhwa: function(new_serie){
        this.serie.push(new_serie);
    },

    getManhwa:function(comic){
       return this.serie.find((el) => el.comic == comic);
    }

}

manhwa.setManhwa({
    comic:"Villain to kill",
    scan:"Raven_Series",
    genero:"shounen",
    capitulos:75,
});

manhwa.setManhwa({
    comic:"Jungle Juice",
    scan:"Raven_Series",
    genero:"Seinen",
    capitulos:83,
});

manhwa.setManhwa({
    comic:"Mercenario",
    scan:"Hz_scan",
    genero:"hidrogeno",
    capitulos:112,
})
console.log(manhwa);

console.log(manhwa.getManhwa("Mercenario"));



let num=[1,2,3];
console.log(num);
console.log(num.reverse());
num.reverse();
console.log(num);


 function unir_2palabras(p_1,p_2){
    return p_1.concat(p_2);
}

let nom=[];
let ape=[];
nom.push(prompt("Indique su nombre"));
ape.push(prompt("Indique su apellido"));

let nombre=unir_2palabras(nom,ape);

let name_definitivo= (nombre[0][0].toUpperCase() + nombre[0].slice(1).toLowerCase())+ " " + (nombre[1][0].toUpperCase() + nombre[1].slice(1).toLowerCase())

console.log('Mi nombre es ' + name_definitivo);



function rastreador_letras(palabra,letra){
    let token=0;
    for(let t=0;t<palabra.length;t++){
        if(palabra[t]==letra){
            token++;
        }
    }
    return token;
}



let palabra=prompt("Escriba la palabra deseada");
let letra=prompt("Escriba la letra a buscar");


let veces=rastreador_letras(palabra,letra);

console.log("El numero de veces que la letra "+ letra+ " se repite en la palabra "+palabra+" es "+veces);







function rastreador_letras_2(palabra,letra){
    let fi=0;
    let token=nombre_completo[0].map(function(el){
        if(el==letra){
            fi++;
        }
        return fi;
    }
 )}


let nombre_completo=[];

nombre_completo.push(prompt("Escriba la palabra deseada"));

nombre_completo.push(prompt("Escriba la letra a buscar"));

let respuesta=rastreador_letras_2(nombre_completo[0], nombre_completo[1]);

