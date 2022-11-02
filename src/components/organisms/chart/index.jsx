import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Linechart from "./line";
import ColumnChart from "./column";
const Chart = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <div className="chart-layout">
            <Linechart />
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="chart-layout">
            <ColumnChart />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;
