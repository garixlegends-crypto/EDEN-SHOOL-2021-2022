let nombredeclick = 0;

if(nombredeclick%2 == 0){
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("black").addEventListener('click',function(e){
        
        nombredeclick += 1;
        console.log(nombredeclick)
        let remove = document.querySelector('.logo');
        remove.classList.remove("logo");
        color.style.getPropertyValue("--bg-color-black");
        getComputedStyle(color).getPropertyValue("--bg-color-black");
        color.style.setProperty("background-color", 'var(--bg-color-black)');

    });
});
}else{
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("black").addEventListener('click',function(e){

        let test = document.querySelector(':root')
        let color = document.querySelector('.logo')
        color.style.getPropertyValue("--bg-color-black");
        getComputedStyle(color).getPropertyValue("--bg-color-black");
        color.style.setProperty("background-color", 'var(--bg-color-orange)');
    
    });
});
}