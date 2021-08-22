import React from 'react';
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
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// importing container and box
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// For routing:
import { Link } from 'react-router-dom';
// For image:
import background from '../../components/assets/images/2016.jpg';


const useStyles = makeStyles((theme) => ({
paper: {
    padding: '25px 16px',
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
    fontSize: '17px'
},
center: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: 'white',
},
padding: {
    paddingTop: '40px'
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
}));


export const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
        <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
        className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

        <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
        className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button>

        <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
        className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

        <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
        className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button>
        <div className={classes.background_Image}>
            <Container maxWidth="sm" className={`${classes.center} ${classes.padding}`}>
                <p>
                    I am an interactive, passionate, and motivated 2020 graduate with a keen interest in engineering, software development, and coding. 
                    I have had an array of experience both academic, work experience and as an intern to transfer my learnings into a successful organization. 
                </p>
                <br></br>
                <p>
                    My areas of strength include:
                    • Strong Team collaborative skills
                    • Focused Problem Solver
                    • Detail-Oriented with a strong work ethic
                    • Strong Analytical Skills
                </p>
                <br></br>
                <p>
                    Languages include: Python, JavaScript, React, Flask, SQL, TypeScript, Chinese
                    Others include: Matlab, Solidworks, ANSYS
                </p>
            </Container>
            <Container maxWidth="md" className={classes.padding}>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant="body2" color="error">
                            May, 2020
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot>
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
    </div>
   );
}


// const useStyles = makeStyles({
//     root: {
//         color: 'blue',
//         fontSize: '50px',
//         padding: '0',
//         margin: '0'
//     },
//     navbar_container: {
//         display: 'flex',
//         justifyContent: 'space-between', //everything is evenly spaced as far as the nav items
//         alignItems: 'center'
//     },
//     logo_navigation: {
//         listStyle: 'none',
//         textTransform: 'uppercase',
//         textDecoration: 'none'
//     },
//     navigation: {
//         display: 'flex'
//     },
//     nav_a:{
//         display: 'block',
//         padding: '1em',
//         color: 'black',
//         fontSize: '1.3rem'
//     }
// })

// export const Projects = () => {
//     const classes = useStyles();
//     return (
//         <nav>
//             <div className={classes.navbar_container}>
//                 <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
//                     <li>
//                         <Link to='/' className={classes.nav_a}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/aboutMe' className={classes.nav_a}>About Me</Link>
//                     </li>
//                     <li>
//                         <Link to='/Projects' className={classes.nav_a}>Projects</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

