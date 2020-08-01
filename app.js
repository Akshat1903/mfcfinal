window.addEventListener("load", function()
{
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    const mainNav = document.querySelector("nav");
    mainNav.className += " fixed-top";
    });


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

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
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




var stackedCard = new stackedCards({
         selector: '.mycards',
         layout: "slide",
         transformOrigin: "center",
    });

    stackedCard.init();
var stackedCardSlide = new stackedCards({
    transformOrigin: "bottom"
});
var stackedCardSlide = new stackedCards({
             selector: '.stacked-cards-slide',
             layout: "slide",
             transformOrigin: "center",
         });

        stackedCardSlide.init();



var swiper = new Swiper('.swiper-container', {
      loop: true,
      loopFillGroupWithBlank: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


// $(function(){
//     $(document).scroll(function(){
//         $(".nav-links li").removeClass("selected");
//         $("#toau").toggleClass("selected", $(this).scrollTop() > "735" && $(this).scrollTop() < "1400");
//         $("#tolearn").toggleClass("selected", $(this).scrollTop() > "1400" && $(this).scrollTop() < "2000");
//         $("#tosome").toggleClass("selected", $(this).scrollTop() > "3110" && $(this).scrollTop() < "4010");
//         $("#tocont").toggleClass("selected", $(this).scrollTop() > "4010");
//     })
// });
