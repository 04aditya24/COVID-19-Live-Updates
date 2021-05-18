import React from "react";
import { Box, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" mt={6} justifyContent="center">
      <Typography paragraph style={{ color: "grey", marginRight: 10 }}>
        &copy; Copyright {new Date().getFullYear()} By{" "}
        <a href="https://portfolio-adityashrivastava.herokuapp.com/" className="footer-dev-link">
     Aditya Shrivastava
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;