import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";

function ImageDescription({ imageDes }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1274, // desktop
        xl: 1536, // large screens
      },
    },
  });

  let desStyle = {
    position: "absolute",
    height: "30%",
    width: "30%",
    top: "2%",
    right: " 5%",
    color: "grey",
  };
  return (
    <Box
      sx={{
        m: 1,
        height: {
          sm: "450px",
        },
      }}
    >
      {imageDes.map((image) => {
        return (
          <div key={image.id}>
            <Paper
              elevation={3}
              sx={{
                height: {
                  lg: "65vh",
                  md: "65vh",
                  sm: "65vh",
                },
                width: {
                  lg: "57vw",
                  md: "57vw",
                  sm: "55vw",
                },
                borderRadius: {
                  lg: "15px",
                  md: "15px",
                  sm: "15px",
                },
              }}
            >
              {/* <img
                src={image.url}
                alt=""
                style={{ height: "70vh", width: "60vw", borderRadius: "25px" }}
              /> */}
              <Box
                component="img"
                sx={{
                  height: {
                    lg: "65vh",
                    md: "65vh",
                    sm: "65vh",
                  },
                  width: {
                    lg: "57vw",
                    md: "57vw",
                    sm: "55vw",
                  },
                  borderRadius: {
                    lg: "15px",
                    md: "15px",
                    sm: "15px",
                  },
                }}
                alt="loading"
                src={image.url}
              />
            </Paper>
            <Box
              style={desStyle}
              sx={{
                height: {
                  sm: "50px",
                },
              }}
            >
              <Typography variant="h4" style={{ marginBottom: "7%" }}>
                {image.title}
              </Typography>
              <Typography sx={{}}>{image.description}</Typography>
            </Box>
          </div>
        );
      })}
    </Box>
  );
}

export default React.memo(ImageDescription);
