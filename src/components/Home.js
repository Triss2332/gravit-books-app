import React from "react";
import HeroImage from "../assets/banner.png"
import { Link } from "react-router-dom";

import FullOverview from './FullOverview';

//Material
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginLeft: 50,
        textAlign: 'left',
    },
    bannerImage: {
        maxWidth: 300,
        alignItems: "right",
        paddingRight: 50,
    },
    button: {
        color: "#FAF1F8"
    },
}));


function Home() {
    const classes = useStyles();


    return (
        <Grid container>

            <Grid item xs={6}>
                <Grid direction="column">
                    <h1 className={classes.paper}>Non sai cosa leggere?</h1>
                    <h2 className={classes.paper}>Ti consigliamo noi!
                        <br></br>
                        Prova il generatore random di libri.
                    </h2>
                </Grid>
                <Grid className={classes.paper} direction="column">
                    <Button variant="contained">
                        <Link to="/random-books" className={classes.button}>
                            Provalo ora
                        </Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <img src={HeroImage} className={classes.bannerImage}></img>
            </Grid>

            
        </Grid>

        
    );
}


export default Home;