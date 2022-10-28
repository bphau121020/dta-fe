import React from "react";

import "./ListColumn.scss";
import Table from "../../../Table/Table";
import List from "../../../../assets/JsonData/list.json";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ListColumn = () => {
  const customerTableHead = ["Id", "Review"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.FIELD1}</td>
      <td>{item.Review}</td>
    </tr>
  );

  const [sentiment, setSentiment] = React.useState("");
  const [place, SetPlace] = React.useState("");
  const sentimentSelect = (event) => {
    setSentiment(event.target.value);
  };
  const placeSelect = (event) => {
    SetPlace(event.target.value);
  };
  return (
    <div className="listcolumn">
      <div className="listcolumn__layout">
        <h3 className="listcolumn__layout__">
          List Review Data with Column Chart
        </h3>
        <div className="listcolumn__layout__title">
          <Box sx={{ minWidth: 200 }} className="select-sentiment">
            <FormControl fullWidth>
              <InputLabel id="sentiment-label">Sentiment</InputLabel>
              <Select
                labelId="sentiment-label"
                id="sentiment-select"
                value={sentiment}
                label="Sentiment"
                onChange={sentimentSelect}
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

          <Box sx={{ minWidth: 200 }} className="select-place">
            <FormControl fullWidth>
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
        </div>
        <div className="listcolumn__layout__content">
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

export default ListColumn;
