let lista=document.querySelector("ul");

let logo=document.querySelector("header");



logo.onclick=function(){

    if(screen.width<500){
    
        if(lista.style.display=="block"){
            lista.style.display="none";
        }
        else{
            lista.style.display="block";
        }
     }
    
    if(screen.width>500){
        lista.style.display="block";
        lista.style.display="flex";
        
        
    }
        


}