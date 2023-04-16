import React from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createTheme } from "@mui/material";

export default function BackwardButton({backwardButton}) {
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
    const bacwardButtonStyle = {
        cursor: "pointer",
        height: "100px",
        color: "#29508c",
        width: "60px",
        marginRight: "-3%",
        position: "relative",
      };
  return (
    <>
         <ArrowBackIosIcon onClick={backwardButton}
          style={bacwardButtonStyle}
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
