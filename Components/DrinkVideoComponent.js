import React, { useState, useEffect } from 'react'

//props are string drink name
const DrinkVideo = (props) => {
    const [drinkVideoState, setDrinkVideoState] = useState("");
    const youtubeAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const videoURL = "https://www.youtube.com/embed/";


    useEffect(() => {
        getCocktailVideo(props.name)
    }, []);

    function getCocktailVideo(cocktail) {
        console.log(cocktail);
        fetch("https://www.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&q=" + cocktail + "+cocktails+recipe&key=" + youtubeAPIKey)
        .then(response => response.json())
        .then((response) => {
            if(response.items){
                setDrinkVideoState(response.items[0].id.videoId)
            } else {
                //never gonna give you up
                setDrinkVideoState("DLzxrzFCyOs");
            }
        })
    }
      return (
          <iframe title={props.name} width="90%" height="90%" src={videoURL + drinkVideoState} frameBorder="3" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )
    
}

export default DrinkVideo;