import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import GitHubIcon from '@material-ui/icons/GitHub';
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
},
center: {
    textAlign: 'center',
    fontSize: '1.2rem'
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
                    <Typography variant="body2" color="textSecondary">
                        May, 2020
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <SchoolIcon />
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
                    <Typography variant="body2" color="textSecondary">
                        March, 2021
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <WorkIcon />
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
                        <Typography variant="body2" color="textSecondary">
                            May 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <WorkOffIcon />
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
                        <Typography variant="body2" color="textSecondary">
                            July 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <GitHubIcon />
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

