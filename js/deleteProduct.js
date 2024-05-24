import { connectionAPI } from "./connectionAPI.js";

async function deleteProduct(id){
    await connectionAPI.deleteDataProduct(id);

    window.alert("Producto eliminado correctamente.")
}

export default deleteProduct;
