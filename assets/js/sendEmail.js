// get contactForm
const form = document.getElementById('contactForm');

form.addEventListener("submit", function (event) {
	event.preventDefault()
	const email = form.email.value;
	const formControl = form.formControl.value;
	const checkbox = form.checkbox.value;
	const modal = document.getElementById("mail-modal")


	// the values in the emailJS object should be email, formControl and checkbox variables
	emailjs.send("service_w3txv0a", "Beachplease", {

			from_email: email,
			message: formControl
		})
		.then(
			function (response) {
				modal.style.display = "block";
				$("#close-button").click(function () {
					location.reload();
				});

			},
			function (error) {
				console.log("FAILED", error);
			}
		);
})