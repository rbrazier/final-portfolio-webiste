var password=" ";
var pass1="AD14";
while (password=" "){
    password=prompt("Enter password to view my portoflio - hint the letter code on the comp sci door","");
    if (password=pass1){
        alert("correct password, click ok to enter");
    }
    else{
        window.location="https://info.knowbe4.com/cybersecurity/awareness";
    }
}