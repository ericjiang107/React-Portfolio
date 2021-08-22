import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import me from '../../components/assets/images/linkedin.jpg';

// interface Props {
//     title: string;
// }

const useStyles = makeStyles((theme) => ({
    root: {
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
    }
}))

export const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

            <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button>

            <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

            <div>
                <Button className = {classes.me} onClick={() => console.log('clicked')} type="submit" color="secondary" variant="contained"
                component={Link} to={'/aboutMe'}>
                </Button>
            </div>
        </div>
    )
}

