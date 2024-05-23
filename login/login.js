let formEle=document.getElementById("loginForm");
let nbrEle=document.getElementById("nbr");
let errorEle=document.getElementById("errorMsg");

function validateNbr(event){
    if(event.target.value===""){
        errorEle.textContent="Please enter a valid mobile number(10 digits)";
    }
    else{
        errorEle.textContent="";
    }

};

nbrEle.addEventListener("blur",validateNbr);

formEle.addEventListener("submit",function(event){
    event.preventDefault();
});