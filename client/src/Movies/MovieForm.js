import React, { useState, useEffect } from 'react';


function MovieForm({ updateMovie }) {

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [metascore, setMetascore] = useState('');
    const [stars, setStars] = useState([]);
    const [movie, setMovie] = useState({
    });

    const sendUpdatedMovie = (e) => {
        e.preventDefault();
        setMovie(title, director, metascore, stars)
        console.log(movie);
        // updateMovie(movie)
    }

    // useEffect(() => {})

    console.log(title);
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    name="director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                />
                <input 
                    type="text"
                    name="metascore"
                    value={metascore}
                    onChange={(e) => setMetascore(e.target.value)}
                />
                <input 
                    type="text"
                    name="stars"
                    value={stars}
                    onChange={(e) => setStars(e.target.value.split(","))}
                />
                <button onClick={sendUpdatedMovie}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default MovieForm;
