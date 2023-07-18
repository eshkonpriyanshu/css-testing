"use client";
import React, { useState } from "react";
import { Slide, Stack, Typography } from "@mui/material";
import "./Card.css";

const CardSection = () => {
  const [showSlide, setShowSlide] = useState(false);

  const handleImageHover = () => {
    setShowSlide(true);
  };

  const handleImageLeave = () => {
    setShowSlide(false);
  };

  return (
    <Stack>
      <Stack className="Card">
        <Stack className="DateContainer">
          <Typography>July 14, 2023</Typography>
        </Stack>
        <Stack className="TitleContainer">
          <Typography variant="h5">Navigation real estate cycles</Typography>
        </Stack>
        <Stack
          className="ImageContainer"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          {showSlide ? (
            <Slide
              direction="left"
              in={handleImageHover}
              mountOnEnter={handleImageHover}
              unmountOnExit={handleImageLeave}
            >
              <Stack
                sx={{
                  borderLeft: "10px solid blue",
                }}
                className="SlideContainer"
              >
                <Stack
                  sx={{
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  <Typography sx={{ padding: "0rem 2rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, fuga, ut eum nulla vel possimus.
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      //   borderBottom: "1px solid black",
                      cursor: "pointer",
                      padding: "0rem 2rem",
                      textAlign: "left",
                    }}
                  >
                    Read more
                  </Typography>
                </Stack>
              </Stack>
            </Slide>
          ) : (
            <Stack>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/803/347/759/anime-natural-light-landscape-forest-studio-ghibli-hd-wallpaper-preview.jpg"
                alt="img"
                style={{ height: "13rem", borderRadius: "1rem" }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardSection;
