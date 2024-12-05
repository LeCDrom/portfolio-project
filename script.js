// Select the carousel element
const carousel = document.getElementById('SaE-carousel');

// Add a wheel event listener to the carousel
carousel.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        // Prevent the default vertical scrolling behavior
        event.preventDefault();
        // Scroll the carousel horizontally instead
        carousel.scrollBy({
            left: event.deltaY, // Use vertical scroll delta for horizontal movement
            behavior: 'smooth' // Smooth scrolling
        });
    }
});
