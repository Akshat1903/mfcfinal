
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

// function showContentGravitas(){
//     var len = document.querySelectorAll('.category-slides-1').length;
//     var button;
//     for (var i=1;i<=len;i++){
//         document.getElementById("gravitas-"+i).addEventListener('click',function(e){
//             button = document.getElementById(e.target.id);
//             document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
//             if (button.innerHTML === 'Know More'){
//                 button.innerHTML = 'Show Less';
//             } else{
//                 button.innerHTML = 'Know More';
//             }
//         });
//     }
// }
//
// function showContentRivera(){
//     var len = document.querySelectorAll('.category-slides-2').length;
//     var button;
//     for (var i=1;i<=len;i++){
//         document.getElementById("rivera-"+i).addEventListener('click',function(e){
//             button = document.getElementById(e.target.id);
//             document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
//             if (button.innerHTML === 'Know More'){
//                 button.innerHTML = 'Show Less';
//             } else{
//                 button.innerHTML = 'Know More';
//             }
//         });
//     }
// }
//
// function showContentDaily(){
//     var len = document.querySelectorAll('.category-slides-3').length;
//     var button;
//     for (var i=1;i<=len;i++){
//         document.getElementById("daily-"+i).addEventListener('click',function(e){
//             button = document.getElementById(e.target.id);
//             document.querySelector('.' + e.target.id).classList.toggle('hidden-content');
//             if (button.innerHTML === 'Know More'){
//                 button.innerHTML = 'Show Less';
//             } else{
//                 button.innerHTML = 'Know More';
//             }
//         });
//     }
// }


splitScrollGravitas();
// showContentGravitas();
// showContentRivera();
// showContentDaily();
