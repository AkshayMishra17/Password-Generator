const inputval = document.getElementById("input");
const button = document.querySelector(".btn-copy");
const clipboard = document.querySelector(".clipboard");


function generatePass(){
    const char = "056789abcdefgh@#$%^&*ijklmopqr1234stuvwxyz!()_=+-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordlength = 20;
    var pass = "";
    for(var i = 0; i < passwordlength;i++){
        const randomnumber = Math.floor(Math.random() * passwordlength);
        pass += char.substring(randomnumber,randomnumber+1);
    }
    inputval.value = pass;
}

button.addEventListener("click", () => {
    generatePass();
  });
  
clipboard.addEventListener("click", () => {
    copyPassword();
  });
 
 function copyPassword(){
    inputval.select();
    inputval.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputval.value);
}
