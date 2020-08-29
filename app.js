// setTimeout("load", 3000);



// window.addEventListener("load", function()
// {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
//     const mainNav = document.querySelector("nav");
//     mainNav.className += " fixed-top";
//     });

window.onload = setTimeout(function(){
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    const mainNav = document.querySelector("nav");
    mainNav.className += " fixed-top";
    typing();
}, 5300);




$(document).ready();
$(function(){
    $(document).scroll(function(){
        var $nav = $("nav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.3) + 's';
            }
            console.log(index / 7);
        });

        burger.classList.toggle('toggle');
    });
}
navSlide();

const words = ["DEVELOPERS", "DESIGNERS", "CODERS","EVERYONE!!"];
let i = 0;
let timer;


function typing(){
    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                timer = setTimeout(deletingEffect, 1500);
                return false;
            };
            timer = setTimeout(loopTyping, 200);
        };
        loopTyping();
    };

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    };

    typingEffect();
}




var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
        });
