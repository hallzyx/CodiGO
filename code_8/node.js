const h1_2=document.querySelector(".h1_2");

h1_2.style.color= "red";
h1_2.style.fontSize="48px";

const h1=document.querySelector("h1");

h1.innerHTML="Soy aun mas chikito";
let t=0;

h1_2.onmouseover=function(){
    this.style.fontSize=
    Number(this.style.fontSize.replace("px",""))+1+"px";
}

h1_2.onmouseout=function(){
    this.style.fontSize=
    Number(this.style.fontSize.replace("px",""))+(-1)+"px";
}

h1.onclick=function(){
    if(t%2==0){
    this.style.color="blue";
         }
    if (t%2!=0) {
        this.style.color="red";
    } 
    t++;
}