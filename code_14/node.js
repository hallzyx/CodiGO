


    
    
    const btn=document.querySelectorAll("button")

    console.log(btn[0].parentElement.nextElementSibling.children[0]);  
   
    let coin=0;
    let token;
    let pulsar;
    for(let t=0;t<btn.length;t++){

        
        
        



        btn[t].onclick=function(){ 
                
            
            
            
            token=btn[t].parentElement.nextElementSibling.children[0]
              


            if(token.style.display=="block"){
                token.style.display="none";

                btn[t].style.background="white";  

            }
            else{
                for(let r=0;r<btn.length;r++){
                    btn[r].parentElement.nextElementSibling.children[0].style.display="none"
                    btn[r].style.background="white";
                
                
                token.style.display="block";

                btn[t].style.background="purple";
            }
            
            
            
            
        }
        


        
        


    }


 }
