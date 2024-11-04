var password = "AD14";

function passcheck(){
    if (document.getElementById("pass1").value != password){
        alert("Incorrect password, Hint: The code for our computer science room.");
        return false;
    }
    if (document.getElementById("pass1").value == password){
        alert("Correct password");
        return true;
    }
}

