//===========================
// VARIABLES GLOBALES
//===========================

const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productList = document.getElementById("productList");
const syncBtn = document.getElementById("syncBtn");

//===========================
// INICIO
//===========================

console.log("Aplicación iniciada.");

// Evento del formulario

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = productName.value.trim();
  const price = productPrice.value.trim();

  if (name === "" || price === "") {
    console.log("Campos vacíos.");

    return;
  }

  console.log("Producto válido.");
});

let products = [];

function renderProduct(product) {
  const li = document.createElement("li");

  li.textContent = `${product.name} - $${product.price}`;

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Eliminar";

  deleteBtn.addEventListener("click", function () {
    productList.removeChild(li);
  });

  li.appendChild(deleteBtn);

  productList.appendChild(li);
}

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = productName.value.trim();
  const price = productPrice.value.trim();

  if (name === "" || price === "") {
    console.log("Campos vacíos.");

    return;
  }

  const product = {
    name,
    price,
  };

  products.push(product);

  renderProduct(product);

  productForm.reset();
});

function saveProducts() {
  localStorage.setItem(
    "products",

    JSON.stringify(products),
  );
}

function loadProducts() {
  const data = localStorage.getItem("products");

  if (data) {
    products = JSON.parse(data);

    products.forEach(renderProduct);
  }
}

products.push(product);

saveProducts();

renderProduct(product);

deleteBtn.addEventListener("click", function () {
  products = products.filter((p) => p !== product);

  saveProducts();

  productList.removeChild(li);
});

loadProducts();
