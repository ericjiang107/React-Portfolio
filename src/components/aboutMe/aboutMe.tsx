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
import BookIcon from '@material-ui/icons/Book';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// importing container and box
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// For routing:
import { Link } from 'react-router-dom';
// For image:
import background from '../../components/assets/images/2016.jpg';
// For cardMedia:
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



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
},
padding: {
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
    paddingBottom: '30px'
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
}
}));


export const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
        <div>
            <Button variant="contained" color="secondary" startIcon={<HomeIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/'}>Home</Button>

            {/* <Button variant="contained" color="secondary" startIcon={<InfoIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/aboutMe'}>About Me</Button> */}

            <Button variant="contained" color="secondary" startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Projects'}>Projects</Button>

            <Button variant="contained" color="secondary" startIcon={<ContactMailIcon style={{ fontSize: 30 }} />}
            className={classes.button} type="submit" component={Link} to={'/Contact'}>Contact Me</Button>
        <div>
        <div className={classes.c4}>
            <Container maxWidth="sm" className={`${classes.center} ${classes.padding}`}>
                <h1 className={classes.padding2}>About Me</h1>
                <p>
                    Hello! My name is Eric Jiang and I am an interactive, passionate, and motivated 2020 graduate with a keen interest in engineering, software development, and coding. 
                    I have had an array of experience both academic, work experience and as an intern to transfer my learnings into a successful organization. 
                </p>
                <br></br>
                <p>
                    My areas of strength include: Having strong team collaborative skills, being a focused problem solver, I am
                    a detail-oriented person with a strong work ethic while also having strong analytical skills.
                </p>
                <br></br>
                <p>
                    Languages include: Python, JavaScript, React, Flask, SQL, TypeScript, Chinese
                    Others include: Matlab, Solidworks, ANSYS
                </p>
            </Container>

                
                <Container maxWidth="md" className={classes.padding}>
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

                <Container maxWidth="sm" className={`${classes.center2} ${classes.padding}`}>
                    <h1 className={classes.padding3}>My Resume</h1>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Card className={classes.root3}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Flask Gundam"
                                height="250"
                                image={require("../assets/images/Resume.JPG").default}
                                title="Flask Gundam"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" color="primary" href="https://ericjiang107.github.io/Resume/" onClick={() => console.log('clicked')} type="submit">
                                Click Here
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>


            </Container>
            </div>
            </div>
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

