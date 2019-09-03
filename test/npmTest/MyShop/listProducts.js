var faker = require("faker");

for(var i=0; i<10;i++){
    var randomProductName = faker.commerce.productName();
    var randomPrice = faker.commerce.price();
    console.log(randomProductName);
    console.log(randomPrice);
}
