document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mesaj trimis! Vă vom contacta în curând.");
        form.reset();
    });
});  
