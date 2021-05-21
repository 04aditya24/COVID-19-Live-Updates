import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Handwash from "./PreventionImages/Handwash.gif";
import Face from "./PreventionImages/Facenew.gif";
import Food from "./PreventionImages/Food.gif";
import Groups from "./PreventionImages/group.gif";
import Monitoring from "../../images/monittoringnew1.jpg";
import CleanPlaces from "./PreventionImages/Clean.gif";
import socialdistancing from "./PreventionImages/Distancing.gif";
import Vacinated from "./PreventionImages/vaccinated1.gif";

// import styles from "./Prevention.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
});

const Prevention = () => {
  const classes = useStyles();

  return (
    <>

 <h1 className="mb-5  " style={{textAlign:"center",marginTop:"15px"}}>
 Tips to Help Stop
          <span className="font-weight-bold"> COVID-19</span>
        </h1>
      <Grid container spacing={3} justify="left">
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Handwash}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Wash your hands frequently and carefully
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Use warm water and soap and rub your hands for at least 20
                  seconds. You can also use an antibacterial and antiviral soap.
                  Use hand sanitizer when you cannot wash your hands properly.
                  Rewash your hands several times a day, especially after
                  touching anything, including your phone or laptop.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Face}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Avoid touching your face
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Covid can live on some surfaces for up to 72 hours. You can
                  get the virus on your hands if you touch a surface like: gas
                  pump handle your cell phone a doorknob Avoid touching any part
                  of youAlso avoid biting your fingernails.r face or head,
                  including your mouth, nose, and eyes. This can gives covid a
                  chance to go from your hands into your body.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Groups}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Do not gather in groups
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Being in a group or gathering makes it more likely that you’ll
                  be in close contact with someone. This includes avoiding all
                  religious places of worship, as you may have to sit or stand
                  too close to another congregant. It also includes not
                  congregating at parks or beaches.Be a hero and break the chain
                  of COVID-19 transmission by practicing physical distancing.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Food}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Avoid eating or drinking in public places
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Now is not the time to go out to eat. This means avoiding
                  restaurants, coffee shops, bars, and other eateries. The virus
                  can be transmitted through food, utensils, dishes, and cups.
                  You can still get delivery or takeaway food. Choose foods that
                  are thoroughly cooked and can be reheated.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={CleanPlaces}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Clean and disinfect surfaces
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Use alcohol-based disinfectants to clean hard surfaces in your
                  home like: countertops door handles furniture toysDisinfection
                  practices are important to reduce the potential for COVID-19
                  virus contamination in non-healthcare settings, such as in the
                  home, office, schools, gyms, publicly accessible buildings,
                  faith-based community centres, markets, transportation .
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={socialdistancing}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Take physical (social) distancing seriously
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  If you’re carrying the SARS-CoV-2 virus, it’ll be found in
                  high amounts in your spit (sputum). Physical (social)
                  distancing, also means staying home and working remotely when
                  possible. If you must go out for necessities, keep a distance
                  of 6 feet (2 m) from other people. You can transmit the virus
                  by speaking to someone in close contact to you.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Vacinated}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Get Vaccinated
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Authorized COVID-19 vaccines can help protect you from
                  COVID-19. You should get a COVID-19 vaccine when it is
                  available to you. Once you are fully vaccinated, you may be
                  able to start doing some things that you had stopped doing
                  because of the pandemic.Vaccination not only protects
                  individuals from disease, but also reduces their risk of
                  spreading the virus. It is vital to get both doses of your vaccine.
                  You should get vaccinated even if you had COVID-19.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={Monitoring}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monitor your health daily
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Be alert for symptoms. Watch for fever, cough, shortness of
                  breath, or other symptoms of COVID-19. Especially important if
                  you are running essential errands, going into the office or
                  workplace, and in settings where it may be difficult to keep a
                  physical distance of 6 feet. Take your temperature if symptoms
                  develop. Don’t take your temperature within 30 minutes of
                  exercising or after taking medications that could lower your
                  temperature, like acetaminophen.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Prevention;
