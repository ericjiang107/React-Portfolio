import React from 'react';
// importing material-ui:
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { classicNameResolver } from 'typescript';
import me from '../../components/assets/images/linkedin.jpg';
import background from '../../components/assets/images/2016.jpg';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// For routing:
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

// Establishing material-ui -- styling:
const useStyles = makeStyles({
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


export const Home = (props:Props) => {
    const classes = useStyles();
    // This is for the navigation:
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    return (
        <div className = {classes.root}>
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
            <div className={classes.background_Image}>
            <Container maxWidth="xs">
                <div className = {classes.upper}>
                    <div className = {classes.me}>
                    </div>
                </div>
            </Container>
            </div>
        </div>
        
    )
}


// Experiment with AppBar
        // <div className = {classes.root}>
        //     <AppBar position="static">
        //         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        //         <Tab label="Item One" {...a11yProps(0)} />
        //         <Tab label="Item Two" {...a11yProps(1)} />
        //         <Tab label="Item Three" {...a11yProps(2)} />
        //         </Tabs>
        //     </AppBar>
        //     <TabPanel value={value} index={0}>
        //         Item One
        //     </TabPanel>
        //     <TabPanel value={value} index={1}>
        //         Item Two
        //     </TabPanel>
        //     <TabPanel value={value} index={2}>
        //         Item Three
        //     </TabPanel>
        // </div>
