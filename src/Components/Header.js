import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import "./Header.css";

export default function Header() {
  return (
    <AppBar
      // style={{
      //   position: "fixed",
      //   left: "0",
      //   bottom: "0",
      //   marginTop: "100%",
      //   height: "50px",
      //   width: "100%"
      // }}
      position="fixed"
      style={{ bottom: 0, width: "100%", top: "auto" }}
      className="footer"
    >
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Blissful massage
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
