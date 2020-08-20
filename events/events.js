// $(document).ready();
// $(function(){
//     $(document).scroll(function(){
//         var $nav = $("nav");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     })
// });


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


function splitScrollGravitas(){
    const controller = new ScrollMagic.Controller();

    for (var i=1;i<=3;i++){
        var len = document.querySelectorAll('.category-slides-'+i).length;
        var height = (len*100) + 'vh';
        var percent = (len - 1)*100;
        document.querySelector('.about-' + i).style.height = height;
        new ScrollMagic.Scene({
            duration: percent + '%',
            triggerElement: '.category-' + i,
            triggerHook: 0
        })
        .setPin('.category-'+i)
        .addTo(controller);
    }
}

function showContentGravitas(){
    var len = document.querySelectorAll('.category-slides-1').length;
    var button;
    for (var i=1;i<=len;i++){
        document.getElementById("gravitas-"+i).addEventListener('click',function(e){
            button = document.getElementById(e.target.id);
            document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
            if (button.innerHTML === 'Know More'){
                button.innerHTML = 'Show Less';
            } else{
                button.innerHTML = 'Know More';
            }
        });
    }
}

function showContentRivera(){
    var len = document.querySelectorAll('.category-slides-2').length;
    var button;
    for (var i=1;i<=len;i++){
        document.getElementById("rivera-"+i).addEventListener('click',function(e){
            button = document.getElementById(e.target.id);
            document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
            if (button.innerHTML === 'Know More'){
                button.innerHTML = 'Show Less';
            } else{
                button.innerHTML = 'Know More';
            }
        });
    }
}

function showContentDaily(){
    var len = document.querySelectorAll('.category-slides-3').length;
    var button;
    for (var i=1;i<=len;i++){
        document.getElementById("daily-"+i).addEventListener('click',function(e){
            button = document.getElementById(e.target.id);
            document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
            if (button.innerHTML === 'Know More'){
                button.innerHTML = 'Show Less';
            } else{
                button.innerHTML = 'Know More';
            }
        });
    }
}

// function setHeight(){
//     for (var i=1;i<=3;i++){
//         var len = document.querySelectorAll('.category-slides-'+i).length;
//         var h = 0;
//         for (var j=1;j<=len;j++){
//
//         }
//         var height = (len*100) + 'vh';
//         var percent = (len - 1)*100;
//         document.querySelector('.about-' + i).style.height = height;
// }
splitScrollGravitas();
showContentGravitas();
showContentRivera();
showContentDaily();
