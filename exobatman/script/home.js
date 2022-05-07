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
// apparirion des texte
let ratio = .1;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

 let handelIntersect = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        } 
    })
 }
 let voir= new IntersectionObserver(handelIntersect,options);
 voir.observe(document.querySelector('.apparaitre'));
 voir.observe(document.querySelector('.heros'));
 voir.observe(document.querySelector('.fondre'));
 voir.observe(document.querySelector('.neige'));

//effet zoom sur les photos  
 let handelIntersec = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('effet-zoom')
            observer.unobserve(entry.target)
        } 
    })
 }
 let grandir= new IntersectionObserver(handelIntersec,options);
 grandir.observe(document.querySelector('.zoom'));
 grandir.observe(document.querySelector('.augmenter'));
 grandir.observe(document.querySelector('.changer'));
 grandir.observe(document.querySelector('.grow'));
 grandir.observe(document.querySelector('.do'));
 grandir.observe(document.querySelector('.re'));
 grandir.observe(document.querySelector('.mi'));
// scroll
 var suivre=document.getElementsByClassName('side')
 console.log(suivre);
 window.addEventListener('scroll', function(){
     console.log(scrollY);
     if (window.scrollY=="371"){
         suivre.style.position = 'fixed';
     }
 })
 
 

