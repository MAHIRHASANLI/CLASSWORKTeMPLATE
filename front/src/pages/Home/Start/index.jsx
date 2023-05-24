import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Start = () => {
  return (
    <div style={{background:"rgb(249,249,255)", width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Box  sx={{ flexGrow: 1 }}>
    <Grid style={{width:"60%",paddingBottom: "70px",paddingTop: "70px",margin:"0 auto"}} container spacing={2}>
      <Grid item xs={4}>
        <h2 >Start <strong>planning</strong> your New <strong></strong></h2>
      </Grid>
      <Grid item xs={4}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </Grid>
      <Grid item xs={4}>
        <Button style={{background:"red",color:"white"}}>Request Free Consultancy</Button>
      </Grid>
   
    </Grid>
  </Box>
    </div>
  )
}

export default Start