import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const HeroSection = () => {
  const styles = {
    heroSectionWrapper: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      backgroundImage:
        'url("https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
      //   textAlign: "left",
    },
    heading: {
      marginBottom: "1rem",
    },
    buttonWrapper: {
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.heroSectionWrapper}>
      <Stack sx={{ color: "white" }} maxWidth="sm">
        <Typography
          sx={{ marginLeft: "1rem" }}
          variant="h4"
          component="h1"
          style={styles.heading}
        >
          Your Heading Here
        </Typography>
        <Typography sx={{ marginLeft: "1rem" }} variant="body1" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          rerum dolores vitae totam quos possimus obcaecati eligendi magni nihil
          perspiciatis enim quo, fuga ipsam qui quibusdam nobis ipsa! Qui, hic!
        </Typography>
        <div style={styles.buttonWrapper}>
          <Button
            sx={{ marginLeft: "1rem" }}
            variant="contained"
            color="primary"
          >
            Your Button
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default HeroSection;
