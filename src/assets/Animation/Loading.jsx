import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import { StyleSheet } from "../Animation/Loading.module.css";

export default function CircularIndeterminate() {
  return (
    <Box className={StyleSheet.loading} sx={{ display: "flex" }}>
      <CircularProgress color="secondary" />
    </Box>
  );
}
