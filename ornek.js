let conteiner=document.getElementById("conteiner");
let icon = document.getElementById("sembol");
let auf=true;
function klikt() {

    if (auf) {
        conteiner.style.height="180px";
        icon.style.transform="rotate(180deg)"

        auf=false;
    }
    else{
        

        conteiner.style.height="100px";
        icon.style.transform="rotate(0deg)"

         auf=true;
    }


    
}

