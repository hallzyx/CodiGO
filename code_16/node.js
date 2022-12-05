
let form=document.querySelector("form")


form.addEventListener("submit",function(event){

    event.preventDefault();
    let vec=document.querySelectorAll("input")
    let n1=vec[0].value;
    let n2=vec[1].value;
    let rpta=Number(n1)+Number(n2);
    alert("La respuesta es "+ rpta);

})





