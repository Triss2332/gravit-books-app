import React, { useState, useEffect } from "react";
import axios from "axios";

//Material
import { makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

//stile
const useStyles = makeStyles((theme) => ({
    button: {
        color: "#FAF1F8"
    },
    title: {
        textAlign: 'center',
        fontSize: 23,
        padding: 25,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        marginBottom: 20,
        backgroundColor: "#FAF1F8"
    },
    image: {
        maxWidh: 150,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }, 
    container: {
        padding: theme.spacing(2),
    }
}));


function FullOverview() {
    const [booksOverview, setBooksOverview] = useState([]);
    const classes = useStyles();

    //fetch
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
        <Grid container>
            <Grid item xs={12} className={classes.container}>
                <h1 className={classes.title}>FULL OVERVIEW - HARD COVER FICTION BOOKS</h1>
                <Grid container spacing={3}>
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
                            <Grid item sm={12} md={6} lg={4} xl={3} className={classes.root}>
                                <Paper className={classes.paper} key={rank}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image}>
                                                <img src={book_image} alt={title} className={classes.img}></img>
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={8} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        <strong>{title}</strong>
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        {description}
                                                    </Typography>
                                                    <p>{author}</p>
                                                    <p>{publisher}</p>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained">
                                                        <a href={amazon_product_url} className={classes.button} target="_blank">
                                                            Acquista
                                                        </a>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}


export default FullOverview;