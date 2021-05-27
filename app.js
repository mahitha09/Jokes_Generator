const generate = document.getElementById('generate');
const joke = document.getElementById('joke');

const generateJokes = ()=>{

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }
    
    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((response) => response.json() )
    .then((data) => {
        joke.innerText = data.joke;
    })
    .catch((error)=> {
        console.log(error);
    });

}

generate.addEventListener('click',generateJokes);
generateJokes();
