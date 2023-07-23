console.log("index.js");

const showAlert = (icon, title, text = false) => {
	return Swal.fire({
		title: `<strong>${title}</strong>`,
		text: text,
		target: "#custom-target",
		customClass: {
			container: "position-absolute",
		},
		toast: true,
		position: "bottom-right",
		showConfirmButton: false,
		timer: 3500,
		icon: icon,
	});
};

const showInput = () => {
	return Swal.fire({
		title: "Enter a price",
		input: "number",
		inputAttributes: {
			step: 0.01,
		},
		showCancelButton: true,
		confirmButtonText: "Submit",
		showLoaderOnConfirm: true,
		preConfirm: (price) => {
			if (price <= 0) {
				Swal.showValidationMessage("Price must be greater than 0");
			}
			return price;
		},
	});
};

const animateCSS = (element, animation, prefix = "animate__") =>
	// We create a Promise and return it
	new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		const node = document.querySelector(element);

		node?.classList.add(`${prefix}animated`, animationName);

		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd(event) {
			event.stopPropagation();
			node.classList.remove(`${prefix}animated`, animationName);
			resolve("Animation ended");
		}

		node?.addEventListener("animationend", handleAnimationEnd, { once: true });
	});
