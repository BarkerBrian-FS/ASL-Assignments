const express = require('express');
const app = express();

app.get('/products/:productId', (request, response) => {
    response.send(
        'Product Page! Product Id: '+ request.params.productId
    )
})

app.get('/products/:productId-:productName',(request,response) => {
    response.send(
        'Product Name: ' + request.params.productName + 
        'Product Id: ' + request.params.productId
    )
})

app.get('/products/:pageNum/:sortPrice-:productDesc',(request, response) => {
    response.send(
        'Page Number ' + request.params.pageNum +
        'Sorted By: ' + request.params.sortPrice + 
        'Product Description: ' + request.params.productDesc 
    )
})


app.listen(3000);