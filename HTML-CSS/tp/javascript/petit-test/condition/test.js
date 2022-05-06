function condition() {
    let age = prompt("age")
    if(isNaN(age)){
        alert('c est pazs un nombre')
        console.log(typeof true);
    }
    else if(age >= 18){
        alert("vous avez plus de 18 ans")
        window.onload = codeAddress;
        console.log(age)
        console.log(typeof false);
    }
    else if(age == ""){
        alert('vous ne reponder pas')
    }
    else{
        alert('b=vous acez moins de 18 ')
        console.log(age)
    }
}
condition();