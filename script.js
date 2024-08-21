function readmore(){
    window.location.href = "about.html";
}

seeAll=()=>{
    window.location.href = "services.html"
}
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
}


const button = document.getElementById('See');
const hiddenSection = document.getElementById('hidden');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the display property to 'block' (or 'flex', 'grid', etc.)
    hiddenSection.style.display = 'block';
    hiddenSection.style.justifyContent = 'space-evenly';
    hiddenSection.style.flexWrap = '';

    button.style.display = 'none';
});