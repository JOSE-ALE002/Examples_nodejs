class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const lista = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML += `
        <div class="card text-center mt-4">
            <div class="card-body">
                <strong>Product Name: </strong> ${product.name}
                <strong>Price product: </strong> ${product.price}
                <strong>Year product: </strong> ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>        `;
    lista.appendChild(element);
    this.resetForm();
    this.showMessage("Agregado Correctamente", "success");
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Eliminado Correctamente", "danger");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//DOM events
let formulario = document.getElementById("product-form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let year = document.getElementById("year").value;

  const objeto = new Product(name, price, year);
  const ui = new UI();

  if (name === "" || price === "" || year === "") {
    return ui.showMessage('Complete All Fields Please', "danger");
  }
  ui.addProduct(objeto);
});

let boton = document.getElementById("product-list");
boton.addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
