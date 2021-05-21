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
import DeepBreath from "./ExerciseImages/DeepBreath1.gif";
import Smile from "./ExerciseImages/smile.gif";
import Proning from "./ExerciseImages/Proning.gif";
import Spirometer from "./ExerciseImages/sparometer.gif";
import Gardening from "./ExerciseImages/gardening.gif";
import Balloons from "./ExerciseImages/baloon.gif";
import Walk from "./ExerciseImages/walk1.gif";
import Aerobic from "./ExerciseImages/aerobic.gif";

// import styles from "./Prevention.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
});

const Exercise = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className="mb-5  " style={{ textAlign: "center", marginTop: "15px" }}>
      Stay  <span className="font-weight-bold"> physically active </span>
during 
      self-quarantine
      </h1>
      <Grid container spacing={3} justify="left">
        <Grid item component={Card} xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={DeepBreath}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Deep Breathing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Deep breathing can help restore diaphragm function and
                  increase lung capacity. Deep breathing exercises can also
                  lessen feelings of anxiety and stress, which are common for
                  someone who experienced severe symptoms or was admitted to a
                  hospital.Anyone can benefit from deep breathing techniques,
                  but they play an especially important role in the COVID-19
                  recovery process.
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
                image={Smile}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Yawn to a Smile
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This exercise incorporates motion with deep breathing, which
                  helps increase coordination and build strength in the arms and
                  shoulders. It also opens up the muscles in your chest to give
                  the diaphragm space to expand. Sit upright on the edge of your
                  bed or in a sturdy chair, Reach arms overhead and create a big
                  stretching yawn, Bring your arms down and finish by smiling
                  for three seconds.
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
                image={Gardening}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Gardening
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  If you’ve got a garden, then your normal maintenance also
                  counts as a workout during lockdown. Squatting while weeding
                  and planting will strengthen your core and glutes, carrying
                  your watering can and various tools will tone your arms, and
                  mowing the lawn is a real cardio workout and great for your
                  heart health.It also help in Boosts mood&
Reduces stress.
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
                image={Spirometer}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Incentive Spirometer
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  When you use an incentive spirometer, you'll breathe in air
                  through a tube that is connected to a large air column
                  containing a piston or ball. As you breathe in, the piston or
                  ball inside the column moves up. The height of the piston or
                  ball shows how much air you breathed in.Using an incentive
                  spirometer can help you practice taking deep breaths, which
                  can help open your airways.
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
                image={Proning}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Proning
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Proning is a process in which a Covid-19 infected patient will
                  have to lie face down in bed. The health ministry claimed that
                  'Proning is a medically accepted position to improve breathing
                  comfort and oxygenation'It is beneficial in Covid-19 patients
                  with compromised breathing comfort, especially during home
                  isolation," it added. The prone positioning helps to improve
                  ventilation, makes breathing easy.Avoid proning for an hour after meals. 
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
                image={Balloons}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Blowing balloons
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Blowing balloons works out the intercostal muscles that are
                  responsible for spreading and elevating your diaphragm and
                  ribcage. This allows your lungs to take in oxygen during
                  inhalation and expel carbon dioxide as you exhale. The more
                  oxygen you supply to the body during exercise, the longer you
                  will last without becoming breathless and fatigued.This exercise keeps your life quality at any moment that optimal lung functions more comfortable.
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
                image={Walk}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
        Walk
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Walking can offer numerous health benefits to people of all
                  ages and fitness levels. It may also help prevent certain
                  diseases and even prolong your life.Health benefits of walking
                  increased cardiovascular and pulmonary (heart and lung)
                  fitness,reduced risk of heart disease and stroke improved
                  management of conditions such as hypertension (high blood
                  pressure), high cholesterol, joint and muscular pain or
                  stiffness, and diabetes. stronger bones and improved balance.
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
                image={Aerobic}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Aerobic
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Aerobic exercise provides cardiovascular conditioning. The
                  term aerobic actually means "with oxygen," which means that
                  breathing controls the amount of oxygen that can make it to
                  the muscles to help them burn fuel and move. Benefits of
                  aerobic exercise Improves cardiovascular conditioning,
                  Decreases risk of heart disease. Lowers blood pressure.,
                  Increases HDL or "good" cholesterol, Helps to better control
                  blood sugar.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Exercise;
