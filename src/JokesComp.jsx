import React, { useState } from "react";

const JokesComp = () => {
    const [joke,setJoke] = useState("");
    const [loading,setLoading] = useState(false);


    function fetchJoke() {
        console.log("Fetching Joke...")
        fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(response => response.json())
        .then(data => {
            if(data.joke) {
                setJoke(data.joke)
            } else {
                setJoke(`${data.setup} .. ${data.delivery}`)
            }
            setLoading(false)
        })
        .catch(error => {
            console.error('Error Fetching joke',error)
            setJoke("Oops ! something went wrong")
            setLoading(true)
        })
    }
    return(
        <div>
            <h1>Jokes Generator</h1>
            <span>Jokes : {loading ? <p>Loading...</p> : joke}</span>
            <br/>
            <button onClick={fetchJoke}>Generate Jokes Man</button>
        </div>
    )
}

export default JokesComp