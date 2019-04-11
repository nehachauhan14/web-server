const weatherForm = document.querySelector('form'),
    search = document.querySelector('input'),
    messageOne = document.querySelector('#message-1'),
    messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let location = search.value;

    fetch(`http://localhost:1408/weather?address=${encodeURIComponent(location)}`).then((response) => {
        
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    });
    
})
