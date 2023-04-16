import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function VideoButton({ onToggle }) {
  const vidButtonStyle = {
    cursor: "pointer",
    height: "100px",
    width: "100px",
    color: "#29508c",
  };

  return (
    <>
      <PlayCircleFilledIcon style={vidButtonStyle} onClick={onToggle} />
    </>
  );
}
