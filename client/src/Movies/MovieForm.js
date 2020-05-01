import React, { useState, useEffect } from 'react';


function MovieForm({ updateMovie }) {

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [metascore, setMetascore] = useState('');
    const [stars, setStars] = useState([]);
    const [movie, setMovie] = useState({});

    const sendUpdatedMovie = (e) => {
        e.preventDefault();
        updateMovie(movie)
    }

    // useEffect(() => {
        
    // })

    console.log(title);
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="id"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
    )
}

export default MovieForm;
