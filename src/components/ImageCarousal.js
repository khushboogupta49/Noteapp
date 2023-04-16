import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material";


function ImageCarousal({ images, setImage, imageDes }) {
  let success = images === imageDes[0];

  const { url, id } = images;
  const imageStyle = {
    borderRadius: "15px",
    height: "105px",
    width: "105px",
   
   
  };

  const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1274, // desktop
      xl: 1536 // large screens
    }
  }
});

  return (
    <Box
      sx={{
          m: 1,
          marginTop:{
            lg:'20px',
            md:'0px',
            sm:"25px",
            xl:'55px'
          },
         
         
         }}
      
     
    >
      <Paper elevation={3} sx={{
        height:{
          lg:'105px',
          md:'105px',
          sm:"70px",
          xs:'40px'
        },
        width:{
          lg:'105px',
          md:'105px',
          sm:"70px",
          xs:'40px'

        },
        borderRadius:{
          lg:'15px',
          md:'15px',
          sm:"15px",
          xs:'12px'
        }
       
      }}>
        {/* <img onClick={() => setImage(id)}
          src={url}
          alt=""
         
          className={`${!success ? "greyScale" : ""}`}
        /> */}
        <Box
        component="img"
        sx={{
        height:{
          lg:'105px',
          md:'105px',
          sm:"70px",
          xs:'40px'
        },
        width:{
          lg:'105px',
          md:'105px',
          sm:"70px",
          xs:'40px'
        },
        borderRadius:{
          lg:'15px',
          md:'15px',
          sm:"15px",
          xs:'12px'
        }
       
      }}
        alt="loading"
        src={url}
        className={`${!success ? "greyScale" : ""}`}
      />
      </Paper>
    </Box>
  );
}

export default React.memo(ImageCarousal);
