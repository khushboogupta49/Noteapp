import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme } from "@mui/material";


export default function ForwardButton({forwardButton}) {
    const backwardButtonStyle = {
        cursor: "pointer",
        height: "100px",
        width: "60px",
        color: "#29508c",
        marginRight: "-1%",
        position: "relative",
       
        
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
    <>
          <ArrowForwardIosIcon onClick={forwardButton}
          style={backwardButtonStyle}
          sx={{
             top:{
              xl:"3.5rem",
              md:'1.5rem'
             }
          }}
        />
    </>
  )
}
