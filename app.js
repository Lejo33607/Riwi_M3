const API_URL = "http://localhost:3000/products";

const form = document.getElementById("Myform");
const list = document.getElementById("list");

let products = [];

/* ==========================
   GET
========================== */

async function getProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener productos");
        }

        products = await response.json();

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        renderProducts();

        console.log("GET:", products);

    } catch (error) {
        console.error(error);

        const savedProducts =
            localStorage.getItem("products");

        if (savedProducts) {
            products = JSON.parse(savedProducts);
            renderProducts();
        }
    }
}

/* ==========================
   RENDER
========================== */

function renderProducts() {
    list.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");

        li.textContent =
            `ID: ${product.idProduct} | Nombre: ${product.name} | Precio: ${product.price}`;

        /* DELETE BUTTON */

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "Eliminar";

        deleteBtn.addEventListener("click", () => {
            deleteProduct(product.id);
        });

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

/* ==========================
   POST
========================== */

async function createProduct(product) {

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(product)
        });

        const data =
            await response.json();

        console.log("POST:", data);

        await getProducts();

    } catch (error) {
        console.error(error);
    }
}

/* ==========================
   PUT
========================== */

async function updateProduct(id, product) {

    try {

        const response =
            await fetch(
                `${API_URL}/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body:
                        JSON.stringify(product)
                }
            );

        const data =
            await response.json();

        console.log("PUT:", data);

        await getProducts();

    } catch (error) {
        console.error(error);
    }
}

/* ==========================
   DELETE
========================== */

async function deleteProduct(id) {

    try {

        await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );

        console.log(
            "DELETE: Producto eliminado"
        );

        await getProducts();

    } catch (error) {
        console.error(error);
    }
}

/* ==========================
   FORM
========================== */

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const idProduct =
            document
                .getElementById("inptPh")
                .value
                .trim();

        const name =
            document
                .getElementById("inptNm")
                .value
                .trim();

        const price =
            document
                .getElementById("inptPr")
                .value
                .trim();

        if (
            !idProduct ||
            !name ||
            !price
        ) {
            alert(
                "Todos los campos son obligatorios."
            );
            return;
        }

        if (
            isNaN(idProduct) ||
            isNaN(price)
        ) {
            alert(
                "ID y Precio deben ser números."
            );
            return;
        }

        const product = {
            idProduct: Number(idProduct),
            name,
            price: Number(price)
        };

        await createProduct(product);

        form.reset();
    }
);

/* ==========================
   INICIO
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        getProducts();
    }
);