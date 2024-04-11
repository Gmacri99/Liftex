document.addEventListener('DOMContentLoaded', function() {
    const sections = gsap.utils.toArray('.section');
    let currentIndex = 0; // Current visible section index
    let animating = false; // Animation in progress flag
    console.log(sections)
    sections.forEach((section, index) => {
        // Initialize all sections off-screen except the first
        if (index !== 0) gsap.set(section, { yPercent: 100, opacity: 0 });
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
            }
        })
        .to('#section1 svg', {
    
            opacity: 0,
        })
        .fromTo('#section2', {
            yPercent: direction * 100,
            opacity: 0,
        }, {
            yPercent: 0,
            opacity: 1,
            immediateRender: false
        }, "<");
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
