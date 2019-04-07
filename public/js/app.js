console.log('client side javascript file is loaded!');

fetch('http://localhost:1408/weather?address=mumbai,%20India').then((response) => {
    console.log('response', response);
});