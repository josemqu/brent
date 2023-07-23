console.log("prices.js");

const runScrapingBtn = document.querySelector(".run-scraping");

runScrapingBtn.addEventListener("click", () => {
	fetch("http://localhost:8080/api/v1/prices/scraped/price/").then((res) => {
		res
			.json()
			.then((data) => {
				console.log(data);
				const response = createPrice(data);
				return response;
			})
			.then((res) => {
				if (res.ok) {
					showAlert("success", res.result).then(
						setTimeout(() => (window.location.href = "/"), 3500)
					);
				} else {
					showAlert("error", res.result, res.message);
				}
			})
			.catch((err) => {
				showAlert("error", err.result);
				console.log(err);
			});
	});
});

const createPrice = async (price) => {
	const response = await fetch("http://localhost:8080/api/v1/prices", {
		method: "POST",
		body: JSON.stringify(price),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	return data;
};

const deletePrice = (id) => {
	fetch(`http://localhost:8080/api/v1/prices/${id}`, {
		method: "DELETE",
	}).then((res) => {
		res
			.json()
			.then((data) => {
				console.log(data);
				if (data.ok) {
					showAlert("success", data.result).then(
						setTimeout(() => (window.location.href = "/"), 3500)
					);
				} else {
					showAlert("error", data.result, res.message);
				}
			})
			.catch((err) => {
				showAlert("error", err.result, res.message);
				console.log(err);
			});
	});
};

const updatePrice = (id) => {
	// show input
	showInput().then((price) => {
		// update price
		fetch(`http://localhost:8080/api/v1/prices/${id}`, {
			method: "PUT",
			body: JSON.stringify({ settle: price.value }),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			res
				.json()
				.then((data) => {
					console.log(data);
					if (data.ok) {
						showAlert("success", data.result).then(
							setTimeout(() => (window.location.href = "/"), 3500)
						);
					} else {
						showAlert("error", data.result, res.message);
					}
				})
				.catch((err) => {
					showAlert("error", err.result, res.message);
					console.log(err);
				});
		});
	});
};
