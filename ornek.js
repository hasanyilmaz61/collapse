const conteiner=document.getElementById("conteiner");

let auf=true;
function klikt() {

if(auf){

conteiner.style.height="100px";
auf=false;
}

else{

    conteiner.style.height="180px";
    auf=true;
}

    
}