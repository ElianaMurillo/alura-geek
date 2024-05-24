import { connectionAPI } from "./connectionAPI.js";

const formProduct = document.querySelector("[data-btnForm]");
const dataClean = document.querySelector("[data-btnClean]");
const dataInputForm = document.querySelector("[data-form]");


async function createProduct(e) {
    e.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    const priceProduct = (Math.round(price*100)/100).toFixed(2);
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );

    const testURL = pattern.test(image);
    console.log(testURL);

    if (name.length >= 3 && priceProduct != NaN && testURL == true) {
        await connectionAPI.loadProduct(name, priceProduct, image);
        window.alert("Producto agregado exitosamente.");
    } else {
        window.alert("Verifique que haya diligenciado todos los campos correctamente.")
    }
}

formProduct.addEventListener("click", e => createProduct(e));

dataClean.addEventListener("click", () => {
    dataInputForm.reset();
})
