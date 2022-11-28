//Declaracion de funcion
    
function centecima(){
    n=(prompt("Ingresa un numero de 3 cifras"));

    try{
        if(n.length>3){
            throw error="MORE";
        }
        else if(n.length<3){
            throw error="LESS";
        }
    
    rpta = "El numero "+n+" es correcto.";
    
    }
    catch(error){
        if (error=="MORE") {
            rpta= "EL numero es mayor de 3 cifras"
            }
        
        else if(error=="LESS"){
            rpta ="El numero es menor de 3 cifras"
        }

    }
    
    
    finally{

        if(error=="Default"){
            console.log(rpta);
        }
        else{
            console.error(rpta);
        }
        
    }
}



let error="Default";
let n;
let rpta;
let n_1;
let n_2;
let n_3;

centecima();
n_1=parseInt(n);
n_2=parseInt(n)*2;
n_3=n_1+n_2;
console.log("La respuesta es " +n_3);

 


