console.log("prices.js");

const runScraping = async () => {
  const response = await fetch("/api/v1/prices/scraped/price/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  const result = await createPrice(data);
  console.log(result);

  if (result.ok) {
    showAlert("success", result.result).then(
      setTimeout(() => (window.location.href = "/"), 2000)
    );
  } else {
    showAlert("error", result.result);
  }
};

const createPrice = async (price) => {
  const response = await fetch("/api/v1/prices", {
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
  fetch(`/api/v1/prices/${id}`, {
    method: "DELETE",
  }).then((res) => {
    res
      .json()
      .then((data) => {
        console.log(data);
        if (data.ok) {
          showAlert("success", data.result).then(
            setTimeout(() => (window.location.href = "/"), 2000)
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
    fetch(`/api/v1/prices/${id}`, {
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
              setTimeout(() => (window.location.href = "/"), 2000)
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
