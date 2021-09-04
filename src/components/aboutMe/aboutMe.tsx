import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import GitHubIcon2 from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './aboutMe.css';
import Grid from '@material-ui/core/Grid';
// importing container and box
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// For routing:
import { Link } from 'react-router-dom';
// For image:
import background from '../../components/assets/images/photo-1475274047050-1d0c0975c63e.jpg';
// For cardMedia:
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { url } from 'inspector';
// import fontawesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing Scrollup Bar component:
import { ScrollBar } from '..';




const useStyles = makeStyles((theme) => ({
paper: {
    padding: '25px 16px',
    textAlign: 'center',
},
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
    fontSize: '17px',
},
center: {
    textAlign: 'center',
    fontSize: '1.2rem',
},
padding: {
    paddingTop: '100px',
},
morepadding: {
    paddingTop: '40px',
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
secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
},
padding2: {
    paddingBottom: '30px',
    textDecoration: 'underline'
},
padding3: {
    paddingBottom: '35px',
    paddingTop: '35px'
},
root2: {
    flexGrow: 1,
},
paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
},
root3: {
    maxWidth: '345',
},
center2: {
    textAlign: 'center',
},
c4: {
    backgroundColor: 'rgb(217, 217, 217)'
},
sticky: {
    position: 'fixed',
    top: 0,
    zIndex: 100,
    width: '100%',
    backgroundImage: `url(${background})`
},
another: {
    paddingBottom: "30px",
},
}));


export const AboutMe = () => {
  const classes = useStyles();

    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 1){
            setVisible(true)
        }else if(scrolled <= 1){
            setVisible(false)
        }
    };

    return (
    <div>

        <nav className={classes.sticky}>
            <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

            <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

            <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button>
        </nav>

        <div className={classes.c4}>
            <div className="colors">
                <Container maxWidth="sm" className={`${classes.center} ${classes.padding}`}>
                    <h1 className={classes.padding2}>About Me</h1>
                </Container>
                <Container maxWidth="md">
                    <div className={`${classes.center}`}>
                        <p>
                            Hello! My name is Eric Jiang and I enjoy being able to create impactful applications not just to myself but to society. I have a passion for creating content and being an individual contributor to those who can utilize my skills and appreciate a task oriented mindset.
                        </p>
                        <br></br>
                        <br></br>
                        <p>
                        I pride myself in manipulating code and working as a contributor to a component that is team based. I’m driven by engaging with others and providing a safe space as a sounding board to develop meaningful work. 
                        </p>
                        <br></br>
                        <br></br>
                        <p>
                            Languages include: Python, JavaScript, React, Flask, SQL, TypeScript, Chinese
                        </p>
                        <br></br>
                        <br></br>
                        <p>
                            Other skills include: Matlab, Solidworks, ANSYS, Github, HTML, CSS, Bootstrap, JSON
                        </p>
                        <br></br>
                        <br></br>
                        <p className={classes.another}>
                            My behavior areas of strength include: having strong team collaborative skills, being a focused problem solver, and being
                            a detail-oriented person with a strong work ethic while also having strong analytical skills.
                        </p>
                    </div>
                    <div className="centerButton">
                        <form action="https://ericjiang107.github.io/ResumeTest/">
                            <input className="styleButton" type="submit" value="Check Out My Resume" />
                        </form>
                    </div>
                </Container>
            </div>
                
                <Container maxWidth="md" className={classes.morepadding}>
                    <h1 className={`${classes.padding3} ${classes.center2}`}>Timeline</h1>
                    <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant="body2" color="error">
                            May, 2020
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="inherit">
                            <SchoolIcon style={{ fontSize: 30 }} />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            Graduate
                            </Typography>
                            <Typography>Completed College with a BS in Mechanical Engineering and a Minor in Mathematics 📜 </Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant="body2" color="error">
                            March, 2021
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <WorkIcon style={{ fontSize: 25 }} />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            Sales and Application Engineer
                            </Typography>
                            <Typography>Got hired as a Sales and Application Engineer at Omega Engineering 👷‍♂️ </Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="error">
                                May 2021
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <WorkOffIcon style={{ fontSize: 25 }} />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            Quit Work
                            </Typography>
                            <Typography>Left work because of personal reasons and decided to pursue coding due to interest</Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="error">
                                July 2021
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <GitHubIcon2 style={{ fontSize: 25 }} />
                        </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            Acceptance/Start of Coding Temple
                            </Typography>
                            <Typography>Got accepted to Coding Temple and currently attending classes 👨‍💻 </Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </div>
        <ScrollBar />
    </div>
   );
}


