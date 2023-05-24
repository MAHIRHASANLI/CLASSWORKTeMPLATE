import * as React from 'react';
import Style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const About = () => {
  return (
    <div className={Style.About}>
      <div className={Style.Boxx}>
      <Box className={Style.Offff} sx={{ flexGrow: 1 }}>
      <Grid className={Style.Gridd} container spacing={1}>
        <Grid className={Style.Solhisse} item xs={5}>
           <div>
            <h6 className={Style.ppp}>PROCESS VISA WITHOUT WITHIN HOURS</h6>
            <h1 className={Style.hhh}>Immigrations & <br />Visa Consultation</h1>
            <button className={Style.Button} >
                Book Consultant
            </button>
           </div>
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={6}>
        <img style={{width:"100%", height:"100%"}} src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" />
        </Grid>
      
      </Grid>
    </Box>
      </div>
    </div>
  );
};

export default About;
