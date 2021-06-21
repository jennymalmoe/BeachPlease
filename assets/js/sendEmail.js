const form = document.getElementById('contactForm');

form.addEventListener("submit", function(event) {
    event.preventDefault() 
        const email = form.email.value;
        const formControl = form.formControl.value;
        const checkbox = form.checkbox.value;
        console.log (email, formControl, checkbox)

        // change the values in the emailJS object to be the email, formControl and checkbox variables
    emailjs.send("gmail", "Beachplease", {
        "{{from_name}}": form.Beachplease.value,
        "{{from_email}}": form.formControl.value,
        "{{project_request}}": form.Beachplease.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
})

