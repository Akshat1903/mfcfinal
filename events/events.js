function splitScrollGravitas(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
}

function splitScrollRivera(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title-rivera',
        triggerHook: 0
    })
    .setPin('.about-title-rivera')
    // .addIndicators()
    .addTo(controller);
}

function splitScrollDaily(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title-daily',
        triggerHook: 0
    })
    .setPin('.about-title-daily')
    // .addIndicators()
    .addTo(controller);
}

splitScrollDaily();
splitScrollRivera();
splitScrollGravitas();
