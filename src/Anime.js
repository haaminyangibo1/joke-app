import React, {useState, useEffect} from 'react'

function Anime(){
    const [anime, setAnime] = useState([])

    const getAnime = async () => {
        const response = await fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
        const animeData = await response.json()
        // setAnime(animeData)


        console.log(animeData)
        /// we can see that Anime Data is an array of objects the fist object is the data object that we want

        console.log(animeData.data)
        // we can get the array of data 

        // so we sent anime with animeData.data
        setAnime(animeData.data)


    }

    useEffect(() => {
        getAnime()
    }, [])

    return(
        <div>
            <h1>Anime </h1>
            {anime.map( anime=> <p>{anime.background}</p>)}
        </div>
    )

}

export default Anime