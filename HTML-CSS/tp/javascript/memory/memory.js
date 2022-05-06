function clickHandler() {
    console.log("clicked")
}
document.querySelectorAll('td')
.forEach(e => e.addEventListener("click", clickHandler));
var tds = null;
function randomize(tab) {
    let i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
    }
    return tab;
   }
   
var tab = [9, 4, 12, 3, 10];
tab = randomize(tab);
console.log(tab);


