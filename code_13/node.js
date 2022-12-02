const vec=document.querySelector("form");

vec.onsubmit=function(event){
    event.preventDefault();
    let n1=this.querySelector("._n1");
    let n2=this.querySelector("._n2");
    let op=this.querySelector("._op");
    let rpta
    switch(op.value){

        case '+':
            rpta=Number(n1.value)+Number(n2.value);
            console.log(rpta);
            break;
        case '-':
            rpta=Number(n1.value)-Number(n2.value);
            console.log(rpta);
            break;
        case '*':
            rpta=Number(n1.value)*Number(n2.value);
            console.log(rpta);
            break;
        case '/':
            rpta=Number(n1.value)/Number(n2.value);
            console.log(rpta);
            break;


    }
}
