import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Lineline from "./line";
import ListColumn from "./column";

const List = () => {
  return (
    <Box sx={{ width: "100%" }} className="list-layout">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <div className="">
            <Lineline />
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="">
            <ListColumn />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default List;
