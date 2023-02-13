/* Add your JavaScript to this file */

var var1;
var var2;
var var3;

window.onload = function(){
    var1 = document.getElementById("email").value;
    var2 = document.getElementsByClassName("message")[0];
    var3 = document.getElementsByClassName("btn")[1];
    var3.addEventListener("click", thankYou);
}

function thankYou(e){
    e.preventDefault();
    var1 = document.getElementById("email").value;
    if (var1 == ""){
        var2.innerHTML = "Please enter a valid email address"
    }
    else{
        var2.innerHTML = "Thank you! Your email address " + var1 + " has been added to our mailing list!"
    }
}