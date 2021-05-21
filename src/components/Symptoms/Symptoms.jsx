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
import Cough from "./SymptomsImages/K8X2.gif";
import Breath from "./SymptomsImages/breathgif.gif";
import LossofSmell from "./SymptomsImages/smell.gif";
import Fatigue from "./SymptomsImages/fatigue1.gif";
import Fever from "./SymptomsImages/fever2.gif";

import Pain from "./SymptomsImages/paingif.gif";
import Diarrhea from "./SymptomsImages/diarrhea.png";
import Chest from "./SymptomsImages/chestgif.gif";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
});

const Symptoms = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className="mb-5  " style={{ textAlign: "center", marginTop: "15px" }}>
        Symptoms of
        <span className="font-weight-bold"> COVID-19</span>
      </h1>
      <Grid container spacing={1} justify="left">
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea   >
              <CardMedia
            
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={Cough}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dry Cough
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A dry cough is a common early symptom of COVID-19. According
                  to some estimates, 60–70%Trusted Source of people who develop
                  COVID-19 symptoms experience a dry cough as an
                  initial.Children and young adults may be less likely to
                  experience common COVID-19 symptoms such as a dry cough, or
                  they may experience less severe versions of the disease
                  itself. symptom.
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
                height="200"
                image={Breath}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Shortness of breath or difficulty breathing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Shortness of breath on its own usually rules out COVID-19.
                  Shortness of breath is more likely to be a warning sign of
                  COVID-19 if it’s accompanied by a fever, cough, or body aches.
                  On average, shortness of breath tends to set in around 4 to 10
                  days after you contract an infection with the new coronavirus.
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
                image={LossofSmell}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Loss of taste or smell
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Loss of smell or taste due to COVID-19 appears to last
                  slightly longer compared to other upper respiratory
                  infections. COVID-19, a loss of taste or smell can come on
                  suddenly and occur early, sometimes before other COVID-19
                  symptoms develop. Unlike other upper respiratory infections, a
                  loss of smell or taste isn’t always associated with a runny or
                  stuffy nose.
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
                image={Fever}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fever
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Fever causes the body temperature to rise above normal levels.
                  This is part of the body’s immune response to infection. Many
                  infections can cause fever, but if a person has a fever of
                  100.4°F (38°C) or above, they should stay at home and get
                  medical advice. This is because the fever could be an early
                  symptom of COVID-19.
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
                image={Fatigue}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fatigue
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Fatigue is a common symptom of mental health problems, such as
                  depression and grief, and may be accompanied by other signs
                  and symptoms, including irritability and lack of motivation.
                  If you do not get seven to eight hours of sleep, expect to be
                  tired and fatigued.
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
                height="200"
                image={Pain}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Muscle or joint pain,
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You may get pain in your arms, legs, or back that develops
                  spontaneously with no injury. Typically, in a coronavirus
                  infection, the pain is in muscles rather than in joints. But
                  if you have an arthritic joint in your arm or leg, the virus
                  may exaggerate the symptoms. The pain may be severe and
                  limiting.
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
                image={Diarrhea}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Diarrhea
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Diarrhea is more prevalent in patients with severe COVID-19
                  compared to patients with mild or moderate disease. Similarly,
                  the presence of COVID-19 with gastrointestinal symptoms has
                  been shown to increase the risk of acute respiratory distress
                  syndrome and mechanical ventilation, as compared with COVID-19
                  without gastrointestinal symptoms. Other studies, however,
                  have not found such associations between the presence of
                  diarrhea and the severity of COVID-19.
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
                height="200"
                 image={Chest}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Chest pain or pressure
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
export default Symptoms;
