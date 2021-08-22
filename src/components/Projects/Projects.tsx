import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// interface Props {
//     title: string;
// }

const useStyles = makeStyles({
    root: {
        color: 'blue',
        fontSize: '50px',
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between', //everything is evenly spaced as far as the nav items
        alignItems: 'center'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        fontSize: '1.3rem'
    }
})

export const Projects = () => {
    const classes = useStyles();
    return (
        <nav>
            <div className={classes.navbar_container}>
                <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                    <li>
                        <Link to='/' className={classes.nav_a}>Home</Link>
                    </li>
                    <li>
                        <Link to='/aboutMe' className={classes.nav_a}>About Me</Link>
                    </li>
                    <li>
                        <Link to='/Projects' className={classes.nav_a}>Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

