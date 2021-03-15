import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// source
// https://www.w3schools.com/cssref/css3_pr_background-size.asp
// https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background-size

function Banner({ customFields }) {
  // Declare a new state variable, which we'll call "count"
  const { imgPath, darkNess } = customFields;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.${darkNess}), rgba(0, 0, 0, 0.${darkNess})), url('${imgPath}')`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vw",
        backgroundSize: "100% 100%",
        color: "white",
      }}
    >
      <Container maxWidth="sm">
        <Grid item xs={12}>
          <img
            style={{ marginTop: "5em" }}
            src="data:image/png;base64,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"
            alt="Italian Trulli"
          ></img>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{marginTop:'1.6em'}}>Just some type of Header</h1>
        </Grid>
        <Grid item xs={12}>
          <p>Aliqua consequat ex eiusmod nulla dolore. Quis consequat laborum fugiat minim velit veniam culpa pariatur officia. Deserunt ex aliquip incididunt elit pariatur veniam exercitation anim amet cupidatat.</p>
        </Grid>
        <Grid item xs={12}>
          <p>Aliqua consequat ex eiusmod nulla dolore. Quis consequat laborum fugiat minim velit veniam culpa pariatur officia. Deserunt ex aliquip incididunt elit pariatur veniam exercitation anim amet cupidatat.</p>
        </Grid>
        <Grid style={{marginTop: '1.6em'}} container spacing={3}>
          <Grid item xs={6}>
            <Button variant="contained" size="medium" color="primary">
              Go somewhere maybe?
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="medium" color="primary">
              Another Button
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  customFields: PropTypes.shape({
    imgPath: PropTypes.string,
    darkNess: PropTypes.number,
  }).isRequired,
};

export default Banner;
