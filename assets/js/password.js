$('document').ready(function() {
	let password = document.querySelector('#password')
	let passwordMeter = document.querySelector('#password-meter')

	password.addEventListener("keyup", function (e) {
		cekPassword(password.value)
	})

	function cekPassword(password) {
		let strength = 0

		if (password.match(/([a-z])/)) { strength += 1 }
		if (password.match(/([A-Z])/)) { strength += 1 }
		if (password.match(/([0-9])/)) { strength += 1 }
		if (password.length >= 6) { strength += 1 }

			passwordMeter.removeAttribute("class")

		if (strength == 1) { passwordMeter.classList.toggle("weak") }
		if (strength == 2) { passwordMeter.classList.toggle("medium") }
		if (strength == 3) { passwordMeter.classList.toggle("medium-hard") }
		if (strength == 4) { passwordMeter.classList.toggle("hard") }

			passwordMeter.value = strength + 25;

	}
})