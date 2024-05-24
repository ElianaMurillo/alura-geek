async function listProducts() {
    const connection = await fetch("http://localhost:3000/products");
    const convertedConnection = connection.json();
    return convertedConnection;
}

async function loadProduct(name, price, image) {
    console.log('hi loadProducts');
    const connection = await fetch("http://localhost:3000/products", {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image,
        })
    })
    const convertedConnection = await connection.json();

    return convertedConnection;
}

async function deleteDataProduct(id){
    const connection = await fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
            id: id,
        })
    });
    const convertedConnection = await connection.json();
    console.log(connection);
    console.log(convertedConnection);
    
    return convertedConnection;
}

export const connectionAPI = {
    listProducts, loadProduct, deleteDataProduct
}
