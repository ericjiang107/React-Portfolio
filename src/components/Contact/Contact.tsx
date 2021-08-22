import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { classicNameResolver } from 'typescript';
import me from '../../components/assets/images/linkedin.jpg';
import background from '../../components/assets/images/2016.jpg';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'blue',
        fontSize: '50px',
        padding: '0',
        margin: '0'
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
    background_Image: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    // for the image to be centered on the page width and height
    upper: {
        paddingTop: '250px'
    },
    button: {
        margin: theme.spacing(1.7),
        background: 'linear-gradient(45deg, #5f2c82 30%, #49a09d 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 190, 250, .3)',
        borderRadius: 3,
        fontSize: '17px'
    }
}))


export const Contact = () => {
    const classes = useStyles();
    // This is for the navigation:
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    return (
        <div className = {classes.root}>
            {/* Buttons for navbar */}
            <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

            <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button>

            <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

            <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button>

            <h1>hello</h1>
            
        </div>
        
    )
}
