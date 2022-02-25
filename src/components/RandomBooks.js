import React, { useState, useEffect } from "react";
import axios from "axios";


function RandomBooks() {
    const [ toneBooks, setToneBooks ] = useState([]);

    
    const getBooks = async () => {
        const res = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_GRAVIT_API_KEY}`
        )
        const randomNum = Math.floor(Math.random() * res.data.results.length)
        console.log("sono il numero " + randomNum);
        setToneBooks(res.data.results[randomNum]);

        console.log(res.data.results[randomNum]);
    }
    



    return (
        <div>
            <button onClick={getBooks}>Random</button>
            <h2>{toneBooks.title}</h2>
            <p>{toneBooks.description}</p>
        </div>
    );
}


export default RandomBooks;