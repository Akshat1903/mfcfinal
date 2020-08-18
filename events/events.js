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

splitScrollGravitas();
