document.addEventListener('DOMContentLoaded', function() {
    const sections = gsap.utils.toArray('section');
    let currentIndex = 0; // Current visible section index
    let animating = false; // Animation in progress flag
    console.log(sections)
    sections.forEach((section, index) => {
        // Initialize all sections off-screen except the first
      
    });

    function animateSections(newIndex) {
        console.log('animateSections called', { newIndex, currentIndex, animating });
        if (animating || newIndex === currentIndex || newIndex < 0 || newIndex >= sections.length) {
            console.log('Exiting early');
            return;
        }
        animating = true;

        const direction = newIndex > currentIndex ? 1 : -1;
        console.log(direction)
        gsap.timeline({
            onComplete: () => {
                currentIndex = newIndex;
                animating = false;
            },
            defaults: {
                duration: .5, // Consider increasing duration for smoother transition
                ease: "power2.inOut" // Smooth and natural easing
            }
        })
        .to('.section-hero img', {

            opacity: 1,
            duration: 1,
        },"<")
        .to('.informacion2-hero', {
            y: '10vh',
            opacity: 0,
        },"<")
        .to('.button-fixed', {
            y: '12.5vh',
        },"<")
        .to('#h1-title', {
            x:'70vw',
            y:'-7.5vh',
            opacity:.3
        },"<")
        .fromTo('.section2-hero', {
            opacity: 1,
        }, {

            opacity: 1,
        },"<")
        
        
    }

    window.addEventListener('wheel', function(event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            animateSections(currentIndex + 1); // Scroll down
        } else {
            animateSections(currentIndex - 1); // Scroll up
        }
    }, { passive: false });
});
