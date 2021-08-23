import React, { useState } from 'react';
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
import {db} from '../firebaseConfig';

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
    },
    // for the forms section:
    formSection: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        paddingTop: '40px',
        // alignItems: 'center',
        // paddingLeft: '70px'
        // justifyContent: 'center',
    },
    formLabel: {
        paddingBottom: '10px',
        color: 'rgb(255, 102, 0)',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    formTextArea: {
        height: '150px',
        minHeight: '100px',
        padding: '20px',
        bordeRadius: '3px',
        marginBottom: '20px',
        background: '#fff',
        color: 'rgb(0, 0, 32)',
        outline: 'none',
        border: '1px solid lightgray',
    },
    formInput: {
        padding: '20px',
        bordeRadius: '3px',
        marginBottom: '20px',
        background: '#fff',
        color: 'rgb(0, 0, 32)',
        outline: 'none',
        border: '1px solid lightgray',
    },
    formButton: {
        minHeight: '30px',
        '&:hover': {
            backgroundColor: 'grey'
        },
        backgroundColor: 'lightblue',
        fontSize: '13px',
        borderRadius: '10px',
        fontWeight: 'bold',
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
    // sticky: {
    //     position: 'sticky',
    //     left: 0,
    // }
}))


export const Contact = () => {
    const classes = useStyles();
    // This is for the navigation:
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    
    // This section is for the database section:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    // Creating handleSubmit: <--- very important whenever when using forms
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        db.collection('contacts')
        .add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert('Message has been submitted');
            setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            setLoader(false);
        });
        // Reset the boxes to be empty once submit has been clicked
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <nav className={classes.sticky}>
                <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

                <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button>

                <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

                {/* <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
                className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button> */}
            </nav>
            
            {/* Form Section */}
            <div className={`${classes.background_Image} ${classes.padding}`}>
                <Container maxWidth="sm">
                    <form className={classes.formSection} onSubmit={handleSubmit}>
                        <label className={classes.formLabel}>Name</label>
                        <input placeholder="Enter Name" className={classes.formInput} value={name} onChange={(e) => setName(e.target.value)} />

                        <label className={classes.formLabel}>Email/Phone Number</label>
                        <input placeholder="Enter Email" className={classes.formInput} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label className={classes.formLabel}>Message</label>
                        <textarea placeholder="Enter Message" className={classes.formTextArea} value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit" className={classes.formButton}>Submit</button>
                    </form>
                </Container>
            </div>
        </div>
        
    )
}
