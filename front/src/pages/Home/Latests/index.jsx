import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Style from "./index.module.css";
///CARD
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";

const Latests = () => {
  // let array = [1, 2];
  return (
    <div className={Style.Esas}>
   <Box sx={{ flexGrow: 1 }}>
        <div className={Style.Hamisi}>
          <h1 className={Style.hhh}>Latest News from our Blog</h1>
          <p className={Style.ppp}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        
      <Grid container spacing={5}>
          <Grid item xs={6}>
            <Card className={Style.carddd} sx={{ maxWidth: "100%", maxHeight:"100%" }}>
              <CardMedia
              className={Style.carddd} 
                sx={{ height: 340  }}
                image="https://preview.colorlib.com/theme/immigration/img/b1.jpg"
                title="green iguana"
              />
              <CardActions className={Style.CardAction}>
                <button  className={Style.BBtn}>Share</button>
                <button className={Style.BBtn} >Learn More</button>
              </CardActions>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="">Portable latest Fashion for young women</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </Typography>
                <Typography variant="body2" color="text.secondary">
              <strong>31st January, 2018</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={Style.carddd} sx={{ maxWidth: "100%", maxHeight:"100%" }}>
              <CardMedia
                sx={{ height: 340 }}
                image="https://preview.colorlib.com/theme/immigration/img/b2.jpg"
                title="green iguana"
              />
              <CardActions className={Style.CardAction}>
                <button className={Style.BBtn} size="small">Travel</button>
                <button className={Style.BBtn} size="small">Life stylee</button>
              </CardActions>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="">Portable latest Fashion for young women</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>31st January, 2018</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Latests;
