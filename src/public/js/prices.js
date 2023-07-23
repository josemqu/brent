console.log("prices.js");

const runScrapingBtn = document.querySelector(".run-scraping");

runScrapingBtn.addEventListener("click", () => {
	console.log("click");
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
					showAlert(res.result, "success").then((window.location.href = "/"));
				} else {
					showAlert(res.result, "error");
				}
			})
			.catch((err) => {
				showAlert(err.result, "error");
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
	console.log("deletePrice");
	fetch(`http://localhost:8080/api/v1/prices/${id}`, {
		method: "DELETE",
	}).then((res) => {
		res
			.json()
			.then((data) => {
				console.log(data);
				if (data.ok) {
					showAlert(data.result, "success").then((window.location.href = "/"));
				} else {
					showAlert(data.result, "error");
				}
			})
			.catch((err) => {
				showAlert(err.result, "error");
				console.log(err);
			});
	});
};
