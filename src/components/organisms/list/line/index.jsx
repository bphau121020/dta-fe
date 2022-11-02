import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import DataTable from "../../data-table";

const ListLine = () => {
  const [sentiment, setSentiment] = React.useState("");
  const [place, SetPlace] = React.useState("");
  const handleChange = (event) => {
    setSentiment(event.target.value);
  };
  const placeSelect = (event) => {
    SetPlace(event.target.value);
  };

  return (
    <div className="listline">
      <div className="listline__layout">
        <h3 className="listline__layout__">List Review Data with Line Chart</h3>
        <div className="listcolumn__layout__title">
          <Box sx={{ minWidth: 200 }}>
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
              <InputLabel id="place-label">Place</InputLabel>
              <Select
                labelId="place-label"
                id="demo-simple-select"
                value={place}
                label="Place"
                onChange={placeSelect}
              >
                <MenuItem value={10}>Thanh Khe</MenuItem>
                <MenuItem value={20}>Hai Chau</MenuItem>
                <MenuItem value={30}>Ngu Hanh Son</MenuItem>
                <MenuItem value={40}>Lien Chieu</MenuItem>
                <MenuItem value={50}>Hoa Vang</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
              <InputLabel id="demo-simple-select-label">Sentiment</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sentiment}
                label="Sentiment"
                onChange={handleChange}
              >
                <MenuItem value={10}>Entertainment</MenuItem>
                <MenuItem value={20}>Accommodation</MenuItem>
                <MenuItem value={30}>Restaurant Serving</MenuItem>
                <MenuItem value={40}>Food</MenuItem>
                <MenuItem value={50}>Shipping</MenuItem>
                <MenuItem value={50}>Shopping</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="listline__layout__content">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default ListLine;
