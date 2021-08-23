import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import me from '../../components/assets/images/linkedin.jpg';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// importing grid:
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// importing card:
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// importing pictures:
import background from '../../components/assets/images/2016.jpg';

// interface Props {
//     title: string;
// }

const useStyles = makeStyles((theme) => ({
    root1: {
        color: 'blue',
        fontSize: '50px',
        padding: '0',
        margin: '0'
    },
    button: {
        margin: theme.spacing(1.7),
        background: 'linear-gradient(45deg, #5f2c82 30%, #49a09d 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 190, 250, .3)',
        borderRadius: 3,
        fontSize: '17px'
    },
    me: {
        backgroundImage: `url(${me})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // position: 'absolute',
        paddingTop: '81.25%',
        borderRadius: '50%',
        margin: 'auto'
    },
    root: {
        flexGrow: 1,
    },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    root2: {
        maxWidth: 345,
    },
    upper: {
        paddingTop: '45px'
    },
    upper1: {
        paddingTop: '65px'
    },
    background_Image: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    sticky: {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`
    },
    padding: {
        paddingTop: '90px',
    },
}))

export const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            <nav className={classes.sticky}>
                <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

                <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button>

                {/* <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button> */}

                <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button>
            </nav>
            {/* <div>
                <Button className = {classes.me} onClick={() => console.log('clicked')} type="submit" color="secondary" variant="contained"
                component={Link} to={'/aboutMe'}>
                </Button>
            </div> */}
            <div className={`${classes.background_Image} ${classes.padding}`}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} className={classes.upper}>
                        <Grid item xs>
                            <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Capstone Project: Single Card Price Checker (SCPC)"
                                height="300"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Capstone Project: Single Card Price Checker (SCPC)"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                        <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="React Portfolio"
                                height="300"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="React Portfolio"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Flask Gundam"
                                height="300"
                                image={require("../assets/images/Flask_Gundam.JPG").default}
                                title="Flask Gundam"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" color="primary" href="https://github.com/ericjiang107/Flask-Assignment-1" onClick={() => console.log('clicked')} type="submit">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Line 2: */}
                    <Grid container spacing={3} className={classes.upper1}>
                        <Grid item xs>
                            <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Pokemon Database"
                                height="200"
                                image={require("../../components/assets/images/Pokemon.JPG").default}
                                title="Pokemon Database"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" color="primary" href="https://github.com/ericjiang107/Pokemon-Database" onClick={() => console.log('clicked')} type="submit">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                        <Card className={classes.root2} >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="ROI"
                                height="160"
                                image={require("../../components/assets/images/ROI.JPG").default}
                                title="ROI"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" color="primary" href="https://github.com/ericjiang107/ROI-Project" onClick={() => console.log('clicked')} type="submit">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                            <Grid item xs>
                            <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Weather_App"
                                height="200"
                                image={require("../../components/assets/images/Weather_App.JPG").default}
                                title="Weather_App"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" color="primary" href="https://github.com/ericjiang107/Weather-App-Project" onClick={() => console.log('clicked')} type="submit">
                                Github Repository
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

