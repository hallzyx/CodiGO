const btn=document.querySelector(".btn");
    console.log(btn)

btn.onclick=function(){
    console.log(btn.children[0]);

    if(btn.children[0].style.display=="block"){
        btn.children[0].style.display="none";
        btn.children[0].style.transform="translateY(15px)"
    }
    
    else{
        btn.children[0].style.display="block";
        btn.children[0].style.transform="translateY(-15px)"
    }
    console.log("evento");

}