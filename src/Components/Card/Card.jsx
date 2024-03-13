import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";

function Card({ data, type }) {
  const { image, follows, title, songs} = data;
  if (type === "album") {
    return (
      <Tooltip title={`${songs.length} songs`} placement="top">
        <div className={styles.wrapper}>
          <img
            src={image}
            alt="Card Logo"
            className={styles.imageBorder}
            width="100%"
            height="170px"
          />
          <div className={styles.chipBorder}>
            <Chip
              className={styles.chip}
              style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
              size="small"
              label={`${follows} Follows`}
            />
          </div>
          <div name={title} style={{ color: "#FFFFFF" }}>
            {title}
          </div>
        </div>
      </Tooltip>
    );
  } else {
    const { image, likes, title } = data;

    return (
        <div className={styles.wrapper}>
          <img
            src={image}
            alt="Card Logo"
            className={styles.imageBorder}
            width="100%"
            height="170px"
          />
          <div className={styles.chipBorder}>
            <Chip
              className={styles.chip}
              style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
              size="small"
              label={`${likes} Likes`}
            />
          </div>
          <div name={title} style={{ color: "#FFFFFF" }}>
            {title}
          </div>
        </div>
    );
  }
}

export default Card;
