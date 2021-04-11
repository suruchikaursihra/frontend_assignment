import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColumnChart from './columnChart';
import LineChart from './lineChart';
import PieChart from './pieChart';
import Table from './dataTable';

/**
 * styles 
 */
const Styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

function index() {
    const classes = Styles();

    return (
        <main>
            <div>
                <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Campaign Performance
                </Typography>
            </div>
            <Container className={classes.cardGrid}>
                <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                    <Grid item xs={10}>
                        <Card className={classes.root}>
                            <CardContent>
                                <ColumnChart />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3} direction="row" alignItems="center" justify="center" className={classes.cardGrid}>
                    <Grid item xs={10} sm={6}>
                        <Card className={classes.root}>
                            <CardContent>
                                <LineChart />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <Card className={classes.root}>
                            <CardContent>
                                <PieChart />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Table />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main >
    )
}

export default index
