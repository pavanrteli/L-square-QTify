import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, data, type, Genres }) {
  const [Toggle, setToggle] = useState(true);
  const [index, setIndex] = useState("all");
  // console.log("section");
  let sectionData = data;
  if (type === "songs" && index !== "all") {
    sectionData = data.filter((item) => {
      if (item.genre.key === index) {
        return item;
      }
    });
  }

  useEffect(()=>{
    console.log("uuuuuuuuuuuuuuuuuuu",index);
  },[index])
  return (
    <>
      <div
        className={styles.flexContainer}
        style={{
          borderTop: title === "Songs" ? "1px solid #34C94B" : "",
          borderBottom: title === "Songs" ? "1px solid #34C94B" : "",
        }}
      >
        <div className={styles.section1}>
          <h3 className={styles.topAlbums}>
            {title === "Top Albums"
              ? "Top Albums"
              : title === "New Albums"
              ? "New Albums"
              : "Songs"}
          </h3>
          {type === "album" ? (
            <h4
              className={styles.collapse}
              onClick={() => {
                setToggle(!Toggle);
              }}
            >
              {Toggle ? "Show all" : "Collapse"}
            </h4>
          ) : (
            ""
          )}
        </div>
        {type === "songs" && <Filters index={index} setIndex={setIndex} Genres={Genres} />}
        {Toggle ? (
          <div>
            <Carousel data={sectionData} type={type} />
          </div>
        ) : (
          <div className={styles.topAlbumsSection}>
            {sectionData.map((item) => {
              return (
                <div key={item.id}>
                  <Card data={item} type={type} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Section;
