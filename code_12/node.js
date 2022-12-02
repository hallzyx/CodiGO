



function core(nod){
    let btn=document.querySelectorAll(nod)

    for(let t=0;t<btn.length;t++){
        console.log(btn[t]);
        btn[t].style.color=btn[t].dataset.color;
        btn[t].style.background=btn[t].dataset.colorBg;
        btn[t].textContent=btn[t].dataset.text;
        
    }
}

core("button");



    
    

