import React, { useState } from "react";
import axios from "axios";
import BookImage from "../assets/single-book.png";

//material
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";


//stile
const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
    },
    button: {
        color: "#FAF1F8",
        marginTop: 20,
    },    
    bannerImage: {
        maxWidth: 250,
        alignItems: "center",
    },
    space: {
        marginTop: -15,
    },
    bottom: {
        marginBottom: 40,
    },
}));



function RandomBooks() {
    const [toneBooks, setToneBooks] = useState([]);
    const classes = useStyles();

    //fetch
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
        <Grid container>
            <Grid item xs={12} className={classes.title}>
                <div>
                    <h1>Random Book Generator</h1>
                    <img src={BookImage} className={classes.bannerImage}></img>
                    <br></br>
                    <Button onClick={getBooks} variant="contained" className={classes.button}>
                        Genera un libro
                    </Button>
                    <p className={classes.bottom}>E inizia subito a leggere!</p>
                    <h3>Titolo: {toneBooks.title}</h3>
                    <h4 className={classes.space}>
                        Descrizione: {toneBooks.description}
                    </h4>

                    <h4 className={classes.space}>
                        Autore: {toneBooks.author}
                    </h4>
                    <h4 className={classes.space}>
                        Casa editrice: {toneBooks.publisher}
                    </h4>
                </div>
            </Grid>
        </Grid>

    );
}


export default RandomBooks;