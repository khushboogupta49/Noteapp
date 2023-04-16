import React, { useEffect, useState } from "react";
import ImageCarousal from "./ImageCarousal";
import images from "./ImageData/imageData";
import ImageDescription from "./ImageDescription";
import ForwardButton from "./Buttons/ForwardButton";
import BackwardButton from "./Buttons/BackwardButton";
import VideoButton from "./Buttons/VideoButton";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material";
import "./style.css";

function Images() {
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

  const [imageData, setImageData] = useState(images);
  const [num, setNum] = useState(0);
  const [imageDes, setImageDes] = useState([imageData[0]]);
  const [pause, setPause] = useState(true);

  const setImageDescription = (id) => {
    const filterImage = imageData.filter((image) => {
      return image.id === id;
    });

    setImageDes(filterImage);
    setPause(null);
  };

  const forwardButton = () => {
    if (num < images.length - 1) {
      setNum((oldCount) => oldCount + 1);
      setPause(null);
    } else {
      setNum(0);
      setPause(null);
    }
  };

  const backwardButton = () => {
    if (num !== 0) {
      setNum((oldCount) => oldCount - 1);
      setPause(null);
    } else {
      setNum(images.length - 1);
      setPause(null);
    }
  };

  const onToggle = () => {
    setPause(!pause);
  };

  const imageChangingFunction = () => {
    if (num < images.length - 1) {
      setNum((oldCount) => oldCount + 1);
    } else {
      setNum(0);
    }
  };

  useEffect(() => {
  // eslint-disable-next-line
    setImageDes([imageData[num]]);
    const id = setInterval(() => {
      if(pause){
        imageChangingFunction();
      }
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [num,pause])
  return (
    <>
      <ImageDescription imageDes={imageDes} />
      <Box
        sx={{
          display: "flex",

          flexDirection: {
            md: "column",
            lg: "row",
            sm: "column",
          },
          /*backgroundColor: {
          xxs: "red",
          xs: "orange",
          sm: "yellow",
          md: "green",
          lg: "blue",
          xl: "purple"
        },*/
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              md: "100%",
              lg: "60vw",
            },
            justifyContent: {
              md: "center",
            },

            marginLeft: {
              lg: "10px",
              md: "15px",
              xl: "20px",
            },
          }}
        >
          <BackwardButton backwardButton={backwardButton} />
          {imageData.map((img) => {
            return (
              <ImageCarousal
                images={img}
                key={img.id}
                setImage={setImageDescription}
                imageDes={imageDes}
              />
            );
          })}
          <ForwardButton forwardButton={forwardButton} />
        </Box>
        <Box
          className="vidButtonStyle"
          sx={{
            position: {
              lg: "relative",
            },
            left: {
              lg: "5rem",
              md: "0rem",
            },
            top: {
              xl: "3rem",
            },
            width: {
              md: "100%",
              lg: "100px",
            },
            margin: {
              md: "auto",
              lg: "0",
            },
            display: {
              md: "flex",
            },
            justifyContent: {
              md: "center",
            },
          }}
        >
          <VideoButton onToggle={onToggle} />
        </Box>
      </Box>
    </>
  );
}

export default React.memo(Images);
