import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Style from "./index.module.css"
///CARD
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Features = () => {
  let array = [1, 2, 3, 4, 5, 6];
  return (
   <div className={Style.Esas}>
     <Box style={{width:"100%"}} sx={{ flexGrow: 1 }}>
     <div className={Style.Hamisi}>
        <h1 className={Style.hhh}>Our Unique Features that can impress you</h1>
        <p className={Style.ppp}>
        Who are in extremely love with eco friendly system.
        </p>
      </div>
      <Grid style={{width:"100%"}} container spacing={9}>
        {array &&
          array.map((item,id) => {
            return (
              <Grid key={id}  item xs={4}>
                <Card className={Style.Card}  sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography className={Style.hahaha} gutterBottom variant="h5" component="div">
                    <AccessibilityNewIcon/>Professional Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
   </div>
  );
};

export default Features;
