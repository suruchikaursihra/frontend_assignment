import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardContent, CardMedia, Container, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { getRandomImage, getBreeds, getBreedImage, getSubBreed } from '../../redux/Dog/dog.actions';

/**
 * @description page styles
 */
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: 450,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 0, 1),
    },
    cardGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    card: {
        height: '100%',
        display: 'flex',
        backgroundColor: 'rgb(246, 250, 232)',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

function FindMyDog() {
    const classes = useStyles();
    const { images, breedsList } = useSelector(state => state.data);
    const [subBreedsList, setSubBreedsList] = useState([]);
    const [breeds, setBreeds] = useState("");
    const [subBreeds, setSubBreeds] = useState("");
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    /**
     * get random images and brredList on page reload 
     */
    useEffect(() => {
        dispatch(getRandomImage());
        dispatch(getBreeds());
    }, []);


    /**
     * handle breedsList change
     */
    const handleChange = (e) => {
        setBreeds(e.target.value);
        setSubBreeds("");
        setDisabled(false);
        setSubBreedsList(breedsList[e.target.value]);
    }

    /**
     * handle subbreeds change
     */
    const handleSubChange = (e) => {
        setSubBreeds(e.target.value);
    }

    /**
     * handle submit
     */
    const handleSubmit = () => {
        if (subBreeds) {
            dispatch(getSubBreed(breeds, subBreeds));
        } else {
            dispatch(getBreedImage(breeds));
        }
    }

    return (
        <main>
            <div className={classes.heroContent}>
                <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Find My Dog
                </Typography>
            </div>

            <Container className={classes.cardGrid}>
                {/* FORM */}
                <Grid container direction="row" alignItems="center">
                    <FormGroup row>
                        {/* brredList */}
                        <FormControl margin="dense" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-customized-select-label">Breed</InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={breeds}
                                onChange={handleChange}
                            >
                                {Object.keys(breedsList).map((key, ele) => {
                                    return <MenuItem value={key} key={key}>{key}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        {/* sub Breed */}
                        {subBreedsList.length > 0 &&
                            <FormControl margin="dense" variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-customized-select-label">Sub Breed</InputLabel>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={subBreeds}
                                    onChange={handleSubChange}
                                >
                                    {subBreedsList.map((key, ele) => {
                                        return <MenuItem value={key} key={ele}>{key}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        }
                        {/* submit */}
                        <Button onClick={handleSubmit} variant="contained" color="primary" size="small" className={classes.button} disabled={disabled}>
                            Submit
                        </Button>
                    </FormGroup>
                </Grid>
                {/* Media image */}
                <Grid container spacing={3}>
                    {images.length === 0 ?
                        <Typography variant="h6" gutterBottom>
                            No Images Found !!
                        </Typography> :
                        images.map((ele) => (
                            <Grid item xs sm={6} md={4} key={ele.id} key={ele}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <CardMedia
                                            component="img"
                                            alt="dog"
                                            height="300"
                                            image={ele}
                                            title="dogs"
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </main>
    );
}
export default FindMyDog;