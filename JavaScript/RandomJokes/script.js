document.addEventListener("DOMContentLoaded", ()=>{
    const getJokeBtn = document.getElementById("get-joke");
    const joke = document.getElementById("joke");
    const error = document.getElementById("error-message");

    getJokeBtn.addEventListener("click", async () => {
        try{
            const jokeData = await fetchJokes();
            displayJokes(jokeData);
        } catch(error){
            showError();
        }
    })

    async function fetchJokes(){
        // fetches jokes 

        const url = 'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1';

        const response = await fetch(url);
        console.log(response)

        if(!response.ok){
            throw new Error("Joke not found");
        }

        const data = await response.json();
        return data;
    }

    async function displayJokes(jokeData){
        // displays jokes

        const jokesArray = jokeData.data.data;
        console.log(jokesArray)

        console.log(jokeData);

        const randomIndex = Math.floor(Math.random() * jokesArray.length);
        const Joke = jokesArray[randomIndex];

        joke.textContent = `${Joke.content}`
    }

    function showError(){
        error.classList.remove("hidden");
        joke.classList.add("hidden");
    }
})