

const pp=document.querySelectorAll("p");

console.log(pp[0]);



function core_2(nod,col,fam,siz){
    let token=document.querySelectorAll(nod);
    for(let t=0;t<token.length;t++){
        token[t].style.color=col;
        token[t].style.fontFamily=fam;
        token[t].style.fontSize=siz+"px";
    }
    
}



function core_3(nod,enlace,texto){
    let token_2=document.querySelectorAll(nod);
    for(let r=0;r<token_2.length;r++){
        token_2[r].setAttribute("href",enlace);
        token_2[r].textContent=texto;
    }

}

function core_4(nod,n){
    let token_3=document.querySelectorAll(nod);
    token_3[n].parentElement.nextElementSibling.setAttribute("class", ".xd");
    token_3[n].style.color="orange";
    token_3[n].setAttribute("style","text-decoration:none; color:purple");

}


core_2("p","red","Arial",10);

core_3("a", "https://google.com" ,"clickeame");

core_4("a",1);



let prob=document.querySelector("p");
console.log(prob)
console.log(prob.nextElementSibling);
console.log(prob)