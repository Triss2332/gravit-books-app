import React, { useState, useEffect } from "react";
import axios from "axios";


function FullOverview() {
    const [ booksOverview, setBooksOverview ] = useState([]);

    
    const fetchBooksOverview = async () => {
        const res = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_GRAVIT_API_KEY}`
        )
        setBooksOverview(res.data.results.books);

        console.log(res.data.results.books);
    }

    useEffect(() => {
        fetchBooksOverview();        
    }, []);
    



    return (
        <div>
            <h1>FULL OVERVIEW - HARD COVER FICTION BOOKS</h1>
            <section>
                {booksOverview.map((bookOverview) => {
                    const { rank,
                        book_image, 
                        title, 
                        description, 
                        publisher,
                        author,
                        amazon_product_url
                    } = bookOverview

                    return (
                        <article key={rank}>
                            <img src={book_image} alt={title}></img>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>{publisher}</p>
                            <p>{author}</p>
                            <button><a href={amazon_product_url}>Buy it</a></button>
                            
                        </article>
                    )
                })}
            </section>
        </div>
    );
}


export default FullOverview;