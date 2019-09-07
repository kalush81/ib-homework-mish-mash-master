const fetch = require('node-fetch');

// const getTatooineResidents = () => {
//     console.log('get tatoo in residents');
// }
const promiseMeAString = (str) => {
    const myPromise = new Promise((resolve, reject) => {
        // const randomNumber = Math.random() // gives number between 0 and 1
    
        if(str !== undefined && str !== null){
            resolve(`You kept the Promise!`)
        } else {
            reject(`You have failed me!`)
        }
    })
    
    myPromise
        .then(value => console.log(value))
        .catch(error => console.log(error));
        
    return myPromise    
}

const getTatooineResidents = () => {
    return fetch('https://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(data => data.residents);
}

module.exports = {
    getTatooineResidents,
    promiseMeAString
};