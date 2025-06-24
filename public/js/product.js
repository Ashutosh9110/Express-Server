document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  form.addEventListener("submit", onSubmitHandler);
});

const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log("submit function called");

  const product = e.target.productName.value

  const obj = {
    "productName" : product
  }

  axios.post("http://localhost:4000" + "/api/products", obj).then((result) => {
    console.log("Value returned from post: " + result.data.value);
  })
};