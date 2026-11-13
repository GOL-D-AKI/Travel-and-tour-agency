
// Function to change between website pages
function showPage(pageName) {

    // Find all page sections
    let pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.style.display = "none";
    });

    // Show the selected page
    document.getElementById(pageName).style.display = "block";

    // Go to the top of the page
    window.scrollTo(0, 0);
}

// Open Home page when website starts
showPage("home");


// Destination filter function
function filterPlaces(category) {

    let places = document.querySelectorAll(".place");

    places.forEach(function(place) {

        if (category === "all") {
            place.style.display = "block";
        }

        else if (place.classList.contains(category)) {
            place.style.display = "block";
        }

        else {
            place.style.display = "none";
        }

    });
}


// Booking form
let bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("bookingMessage").innerText =
    "Your booking request has been submitted!";

    bookingForm.reset();

});


// Contact form
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("contactMessage").innerText =
    "Thank you! Your message has been submitted.";

    contactForm.reset();

});


// Blog search
let searchBox = document.getElementById("blogSearch");

searchBox.addEventListener("keyup", function() {

    let searchText = searchBox.value.toLowerCase();

    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        let title = blog.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchText)) {
            blog.style.display = "block";
        }

        else {
            blog.style.display = "none";
        }

    });

});
