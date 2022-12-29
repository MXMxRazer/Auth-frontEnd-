const HomeURL = 'http://localhost:3000/controller/auth'; 

const request = async (body) => {
     try {
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
    } else {
        console.log(response.statusText); 
    } 
    } catch(e) {
        console.log(`Error: ${e}`); 
    }
}

const username = document.querySelector('#formGroupExampleInput'); 
const password = document.querySelector('#formGroupExampleInput2'); 
const loginBtn = document.querySelector('.btn-primary'); 

loginBtn.addEventListener('click', e => {
    const loginDetails = {
        username: username.value, 
        password: password.value
    }; 

    console.log(`Login Details: \n${JSON.stringify(loginDetails, null, 4)}`); 

    request(loginDetails); 
})
