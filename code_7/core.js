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
