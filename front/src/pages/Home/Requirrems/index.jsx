import * as React from "react";
import Style from "./index.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
///card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { DeletById, GetAll } from "../../../api/request";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
const Requirrems = () => {
  const [global, setGlobal] = useState([]);
  React.useEffect(() => {
    GetAll().then((res) => {
      setGlobal(res);
    });
  }, []);
  function handleChange(e){
    GetAll(e.target.value).then((res) => {
      setGlobal(res);
    });
  }
  return (
    <Box className={Style.sssss} sx={{ flexGrow: 1 }}>
      <div className={Style.Hamisi}>
        <h1 className={Style.hhh}>Requirements to be Immigrants</h1>
        <p className={Style.ppp}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    <div className={Style.divss}>
   <div className={Style.Inputt}>
   <TextField  name="name" onChange={(e)=>handleChange(e)} id="outlined-basic" label="Searche" variant="outlined" />
   </div>
    <Grid container spacing={6}>
        {global &&
          global.map((item) => {
            return (
              <Grid key={item._id} item xs={3}>
                <Card className={Style.Card} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <CardActions>
                      <Button className={Style.Btn} size="small" onClick={(_id)=>{
                        Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            DeletById(item._id)
                            setGlobal(global.filter(m=>m._id!==_id))
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          }
                        })
                       
                      }}>{item.name}</Button>
                    </CardActions>
                    <Typography className={Style.title} gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.about}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
    </Box>
  );
};

export default Requirrems;
