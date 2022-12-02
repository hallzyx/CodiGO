const btn=document.querySelector(".ham");
console.log(btn);


btn.onclick=function(){
    
    const menu=document.querySelector(".menu")
    console.log(menu.style.display);
    if(menu.style.display=="block"){
        
        menu.style.display="none";
    }    
    else{
        menu.style.display="block";
        
    } 
    console.log(menu.style.display);
}

const btn_2=document.querySelector("#b2");

btn_2.onmouseover=function(){

    let menu_2=document.querySelector(".men_2")
        menu_2.style.display="block";
     
    
}

btn_2.onmouseout=function(){

    let menu_2=document.querySelector(".men_2")
    if(menu_2.style.display=="block"){

        menu_2.style.display="none";
     }
    
}