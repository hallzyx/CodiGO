function core(nod,col,fonts,backs,fontf){
    let token;
    token=document.querySelector(nod);

    token.style.color=col;
    token.style.fontSize=fonts+"px";
    token.style.background=backs;
    token.style.fontFamily=fontf
}


core("h1","red",60,"orange","Arial");
core("h2","blue",40,"green","Verdana");