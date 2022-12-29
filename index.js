const HomeURL = 'http://localhost:3000/controller/create'; 

const request = async (body) => {
    const response = await fetch(HomeURL, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    })
    if (response.status === 201) {
        const content = await response.json(); 
        console.log(`Record Created!: ${JSON.stringify(content)}`); 
    } 
}

const fName = document.querySelector('#firstName');
const lName = document.querySelector('#lastName');
const username = document.querySelector('#inputAddress2');
const password = document.querySelector('#inputPassword4');
const email = document.querySelector('#inputAddress2');
const registerBtn = document.querySelector('.btn-primary'); 
const form = document.querySelectorAll('form'); 

registerBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const gatheredData = { 
        username: username.value, 
        password: password.value
    }; 

    console.log(`Gathered Data: \n${JSON.stringify(gatheredData)}`);
    request(gatheredData); 
})