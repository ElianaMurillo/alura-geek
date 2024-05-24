import { connectionAPI } from "./connectionAPI.js";
import deleteProduct from "./deleteProduct.js";

const list = document.querySelector("[data-cards]");

function createCard(id, name, price, image){
    const product = document.createElement("div");
    product.className = "card";
    product.innerHTML = `
    <img class="card-image-product" src="${image}" />
    <div class="card-container-info">
      <p>${name}</p>
      <div class="card-container-value">
        <p>$ ${price}</p>
        <img src="./img/trashIcon.svg" data-btn-delete data-product-id=${id} />
      </div>
    </div>`;

    const deletBtn = product.querySelector("[data-btn-delete]");

    deletBtn.addEventListener("click", async (e) => {
      await deleteProduct(e.target.dataset.productId);
    })

    return product;
}

async function listProducts() {

  const listAPI = await connectionAPI.listProducts();
  console.log(listAPI);

  if (listAPI.length === 0) {
    const emptymsg = document.createElement("div");
    emptymsg.className = "not-products";
    emptymsg.innerHTML = `<p>No se han agregado productos.</p>`;
    list.appendChild(emptymsg);
  } else {
    listAPI.forEach(product => list.appendChild(createCard(product.id, product.name, product.price, product.image)));
  }
}

(async () => {
  await listProducts();
})()

export const cardInfo = { createCard };
