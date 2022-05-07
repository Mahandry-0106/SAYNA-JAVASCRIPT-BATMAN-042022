// effet lorsque on survole les menue
let menu=document.querySelectorAll("li")
let box=document.getElementsByClassName("conteneur")
menu.forEach(function(li){
    li.addEventListener("mouseover",()=>{
        li.style.textDecoration="underline";
        li.style.textDecorationColor="white";
        li.style.fontWeight="bold";
    })
})