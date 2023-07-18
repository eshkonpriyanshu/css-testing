import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const HeroSection = () => {
  const styles = {
    heroSectionWrapper: {
      position: "relative",
      minHeight: "60vh",
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
      <Stack
        sx={{ color: "white" }}
        maxWidth="md"
        ml={{ xs: "1rem", lg: "5rem" }}
      >
        <Typography
          sx={{ fontFamily: "serif", fontWeight: "bold" }}
          variant="h4"
          component="h1"
          style={styles.heading}
        >
          Asset And Fund Intelligence for the commercial Real Estate Industry
        </Typography>
        <Typography sx={{}} variant="body1" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          rerum dolores vitae.
        </Typography>
        <div style={styles.buttonWrapper}>
          <Button
            sx={{
              borderRadius: "1rem",
              background: "blue",
            }}
            variant="contained"
          >
            Contact sales
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default HeroSection;
