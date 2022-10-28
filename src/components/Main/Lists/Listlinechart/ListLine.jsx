import React from "react";

import "./ListLine.scss";
import List from "../../../../assets/JsonData/list.json";
import Table from "../../../Table/Table";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ListLine = () => {
  const customerTableHead = ["Id", "Review"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.FIELD1}</td>
      <td>{item.Review}</td>
    </tr>
  );
  const [sentiment, setSentiment] = React.useState("");

  const handleChange = (event) => {
    setSentiment(event.target.value);
  };

  return (
    <div className="listline">
      <div className="listline__layout">
        <h3 className="listline__layout__">List Review Data with Line Chart</h3>
        <div className="listline__layout__title">
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
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
          <Table
            limit="10"
            headData={customerTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={List}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default ListLine;
