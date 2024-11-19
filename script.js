// Select all buttons in the button container
const buttons = document.querySelectorAll('.button-container .btn');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.2)'; // Scale up the button
        button.style.transition = 'transform 0.2s ease-in-out'; // Smooth animation
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Reset to original size
    });
});

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove "clicked" class from all links
        navLinks.forEach(nav => nav.classList.remove('clicked'));
        
        // Add "clicked" class to the clicked link
        link.classList.add('clicked');
    });
});

// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove "clicked" class from all cards
        cards.forEach(c => c.classList.remove('clicked'));

        // Add "clicked" class to the clicked card
        card.classList.add('clicked');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect when the page loads
    document.body.classList.add('fade-in');

    // Set up smooth navigation for specific links
    const galleryLink = document.querySelector('a[href="gallery.html"]');
    const homeLink = document.querySelector('a[href="index.html"]');

    // Handle Gallery navigation from home page
    if (galleryLink) {
        galleryLink.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link navigation
            document.body.classList.add('fade-out'); // Add fade-out animation
            setTimeout(() => {
                window.location.href = 'gallery.html'; // Navigate to gallery page
            }, 500); // Match the animation duration (0.5s)
        });
    }

    // Handle Home navigation from gallery page
    if (homeLink) {
        homeLink.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link navigation
            document.body.classList.add('fade-out'); // Add fade-out animation
            setTimeout(() => {
                window.location.href = 'index.html'; // Navigate to home page
            }, 500); // Match the animation duration (0.5s)
        });
    }
});

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

var fragranceSlider = new Swiper('.fragrance-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Smooth scroll to the slider section
document.getElementById("scrollToSlider").addEventListener("click", function () {
    document.getElementById("fragrance-slider").scrollIntoView({
        behavior: "smooth"
    });
});


// Button grows bigger on hover
const scrollButton = document.getElementById("scrollToSlider");

scrollButton.addEventListener("mouseover", function () {
    scrollButton.style.transform = "scale(1.2)"; // Make the button 20% bigger
    scrollButton.style.transition = "transform 0.2s ease-in-out"; // Smooth animation
});

scrollButton.addEventListener("mouseout", function () {
    scrollButton.style.transform = "scale(1)"; // Return to original size
});

