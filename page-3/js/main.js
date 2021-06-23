"use strict";

let block = document.querySelectorAll('.about__item');

let rl = 'rotateY(360deg)';
let rr = 'rotateY(180deg)';

function move(card, img) {
    card.style.transform = rl;
    img.style.transform = rr; 
    
   
}

function stop(card, img) {
    card.style.transform = rr;
    img.style.transform = rl; 
  
    
}


block.forEach((item) => {
    

    let card = item.firstElementChild;
    let img = item.lastElementChild;

    item.addEventListener('mousemove', (e) => {
        if (item.classList.contains('active')) {
            stop(card, img);
        } else {
            move(card, img);
        }
           
    });
    item.addEventListener('mouseleave', (e) => { 
        if (item.classList.contains('active')) {
            setTimeout(move, 250, card, img);
        } else {
            setTimeout(stop, 250, card, img);
        }     
        
    });
});


