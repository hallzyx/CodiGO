function core(nod,col,fonts,backs,fontf){
    let token;
    token=document.querySelectorAll(nod);

    for(let t=0; t<token.length;t++){
        token[t].style.color=col;
        token[t].style.fontSize=fonts+"px";
        token[t].style.background=backs;
        token[t].style.fontFamily=fontf;
    }
    }

   


core("h1","red",60,"orange","Arial");
core("h2","blue",40,"yellow","Verdana");
core("div h1","green",100,"cyan", "calibri")


const lista = document.querySelector("ul");
let n=1;
const elementos= lista.querySelectorAll("li");

console.log(elementos[2].previousElementSibling);

console.log(elementos[0].parentElement.querySelector(".li_2"));

console.log(elementos[0].closest("li"))

console.log(elementos);

console.log(elementos[3].closest(".li_2"))


