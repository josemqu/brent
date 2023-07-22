console.log("prices.js");

fetch("http://localhost:8080/api/v1/prices").then((res) => {
	res.json().then((data) => {
		console.log(data);
	});
});
