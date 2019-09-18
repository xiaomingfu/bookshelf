const rp = require("request-promise");

rp('https://jsonplaceholder.typicode.com/users/1')
    .then(function(body){
        const parseData = JSON.parse(body);
        console.log(`${parseData.name} lives in ${parseData.address.city}`);
})
    .catch(function(err){
        console.log('ERROR', err)
    });