function Produit(id, designation, prix) {
    this.id= id;
    this.prix= prix;
    this.designation= designation;
    this.toString= function() {
      return this.designation + " " + prix;
    }
}

var catalogue= new Array();
catalogue.push(new Produit(1, "ordinateur", 200));
catalogue.push(new Produit(2, "souris", 20));
catalogue.push(new Produit(3, "uniter centrale", 620));
catalogue.push(new Produit(4, "une petite salade", 5));
catalogue.push(new Produit(5, "uniter centrale", 620));
catalogue.push(new Produit(6, "uniter centrale", 620));
var panier= new Array();

function remplirCatalogue() {
      var cat= document.getElementById('cat');
    for (var i in catalogue) {
        var e= document.createElement("option");
          e.value=i;
          var txt= document.createTextNode(catalogue[i].designation);
          e.appendChild(txt);
          cat.appendChild(e);
    }
}

function calculerTotal() {
var tot= 0;
for (var p in panier) {
    tot+= panier[p].prix;
}
    return tot;
}

function ajouterIngr() {
  var nbingr = 0;
  return panier.length;
}


// function once() {
//     console.log("Done.");
//     var nbingr = 0;

//     return 
  
// }
// button.addEventListener("click", once);

function supprimerIngr() {
// TODO 
}

function toggle() {
  var e = document.getElementById("cat");
  // var strUser = e.options[e.selectedIndex].text;
  e.options[e.selectedIndex].classList.toggle("mystyle")
}

function ajouter() {
    toggle();
    var cat = document.getElementById('cat');
    var sel= cat.options[cat.selectedIndex].value;
    var prod= catalogue[sel];
    panier.push(prod);
    var ligne= document.createElement("tr");
    document.getElementById("pan").appendChild(ligne);
    document.getElementById("nb-ingr").innerHTML = ajouterIngr();
    document.getElementById("tot").innerHTML = calculerTotal();
}
