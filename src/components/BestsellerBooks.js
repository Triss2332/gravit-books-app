import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function BestsellerBooks() {
    const [ books, setBooks ] = useState([]);

    
    const fetchBooks = async () => {
        const res = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_GRAVIT_API_KEY}`
        )
        setBooks(res.data.results);

        console.log(res.data.results);
    }

    useEffect(() => {
        fetchBooks();        
    }, []);
    



    return (
        <div>
            <button><Link to="/random-books"> Go to random </Link></button>
            <h1>BESTSELLER BOOKS</h1>
            <section>
                { books.map((book) => {
                    const {
                        title, 
                        description, 
                        author, 
                        publisher, 
                        isbns
                    } = book

                    return (
                        <article key={title}>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <p>{author}</p>
                                <p>{publisher}</p>
                                {/* <div>{isbns.map((isbn) => {
                                    const {
                                        isbn10, 
                                        isbn13
                                    } = isbn
                                    return (
                                        <div key={isbn}>
                                            <p>{isbn10}</p> 
                                            <p>{isbn13}</p>
                                        </div>
                                    )
                                })}</div> */}
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    );
}


export default BestsellerBooks;