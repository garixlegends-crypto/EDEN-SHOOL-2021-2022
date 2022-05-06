
var niche = alert('a la niche');

function mafonction(){
    var name = prompt("votre age","0");
    var date = prompt("votre age","0");
    var num1 = parseInt(name);
    var num2 = parseInt(date);
        if ( name ) {
            document.getElementById('message').innerHTML =  (`Melchior a ${num1 + "ans"}
            et amadeus ${num2  + "ans"}
            Leur somme d'age ${num1 + num2  + "ans"}`);
        }
    var elem = document.getElementById('message').style.color = 'blue';
   
}
function init() { 
    document.getElementById("message").style.color = 'blue';
  }
 
  alert(`x contient ${name}
  y contient ${date}
  Leur somme vaut ${name + date}`);

getElementById

// déclare une variable en js 
let prenom;

prenom = "Pixel";

console.log(prenom);

prenom = "Milla";
console.log(prenom);

let name = "Harry";
let age = 11;
let taille = 1.4;
let parents = false;


let joueur1;
let joueur_1;
let joueurUn;

//- les boites de dialogue
let info = alert('salut');
let confirmation = confirm('salut');
let demande = prompt('salut');

console.log(info)
console.log(confirmation)
console.log(demande)