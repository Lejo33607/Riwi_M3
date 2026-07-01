//====================================================
// TASK 1 - VARIABLES GLOBALES
//====================================================

// Elementos del DOM
const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productList = document.getElementById("productList");
const syncBtn = document.getElementById("syncBtn");

// URL del servidor JSON Server
const API = "http://localhost:3000/products";

// Arreglo global donde se almacenan los productos
let products = [];


//====================================================
// TASK 3 - RENDERIZAR PRODUCTOS EN EL DOM
//====================================================

function renderProduct(product) {

    const li = document.createElement("li");

    li.textContent = `${product.name} - $${product.price}`;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Eliminar";

    deleteBtn.addEventListener("click", function () {

        // Elimina del arreglo
        products = products.filter(p => p !== product);

        // Guarda nuevamente
        saveProducts();

        // Elimina del DOM
        productList.removeChild(li);

        // Si existe en la API
        if (product.id) {
            deleteProduct(product.id);
        }

    });

    li.appendChild(deleteBtn);

    productList.appendChild(li);

}


//====================================================
// TASK 4 - LOCAL STORAGE
//====================================================

// Guarda productos
function saveProducts() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}

// Carga productos
function loadProducts() {

    const data = localStorage.getItem("products");

    if (data) {

        products = JSON.parse(data);

        products.forEach(renderProduct);

    }

}


//====================================================
// TASK 2 - CAPTURA DE DATOS
//====================================================

productForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = productName.value.trim();
    const price = productPrice.value.trim();

    // Validación
    if (name === "" || price === "") {

        console.log("Todos los campos son obligatorios.");

        return;

    }

    if (Number(price) <= 0) {

        console.log("Precio inválido.");

        return;

    }

    const product = {

        name,
        price

    };

    // Guarda en memoria
    products.push(product);

    // Renderiza
    renderProduct(product);

    // Guarda en Local Storage
    saveProducts();

    // Envía a la API
    await addProduct(product);

    // Limpia formulario
    productForm.reset();

});


//====================================================
// TASK 5 - FETCH API
//====================================================

// GET
async function getProducts() {

    try {

        const response = await fetch(API);

        const data = await response.json();

        console.log("GET");

        console.log(data);

    }

    catch (error) {

        console.error(error);

    }

}


// POST
async function addProduct(product) {

    try {

        const response = await fetch(API, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(product)

        });

        const data = await response.json();

        console.log("POST");

        console.log(data);

    }

    catch (error) {

        console.error(error);

    }

}


// PUT
async function updateProduct(id, product) {

    try {

        const response = await fetch(`${API}/${id}`, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(product)

        });

        const data = await response.json();

        console.log("PUT");

        console.log(data);

    }

    catch (error) {

        console.error(error);

    }

}


// DELETE
async function deleteProduct(id) {

    try {

        await fetch(`${API}/${id}`, {

            method: "DELETE"

        });

        console.log("DELETE");

        console.log("Producto eliminado.");

    }

    catch (error) {

        console.error(error);

    }

}


//====================================================
// BOTÓN SINCRONIZAR
//====================================================

syncBtn.addEventListener("click", getProducts);


//====================================================
// INICIO DE LA APLICACIÓN
//====================================================

// Carga los productos almacenados
loadProducts();

console.log("Aplicación iniciada.");