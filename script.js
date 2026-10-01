const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    fetch("https://icanhazdadjoke.com', config)
        .then((res) => res.json()))
        .then((data) => {
            console.log(data); // replace with jokeEl.innerHTML= data.joke;
        });
        }
    generateJoke

    /// replace jokeEl.innerHTML = data.joke; with jokeEl.textContent = data.joke;
    jokeBtn.addEventListener('click', generateJoke);

    // refactor with async await

    async function generateJoke() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };
        const res= await fetch('https://icanhazdadjokee.com', config);
        const data = await res.json();
        
        jokeEl.textContent = data.joke;
        }
    
