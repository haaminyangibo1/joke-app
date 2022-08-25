import React, {useState, useEffect} from 'react'

export function App() {
  const [jokes, setJokes] = useState([])

  const getJokes = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10&safe-mode')
    const {jokes: data} = await response.json()
    setJokes(data)
    console.log(jokes)
  }

  useEffect(() => {getJokes()},[])
  


  return (
    <div>
      <h1>Programming Jokes </h1>
     {jokes.map((joke) =>  { return joke.type === 'twopart' ? <div> <p>{joke.setup} </p><p>{joke.delivery}</p> </div> : <p>{joke.joke}</p>
      } )}

      <p>Joke: </p>
    </div>
  );
}
