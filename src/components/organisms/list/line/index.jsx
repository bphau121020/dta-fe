import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { inputSelector, placeSelector } from "../../../../redux/selectors";
import DataTable from "../../data-table";

export const ListLine = (props) => {
  const { placeId, handleChangeId } = props;
  const placeList = useSelector(placeSelector);
  const [sentiment, setSentiment] = React.useState("1");
  const inputList = useSelector(inputSelector);
  const handleChangeSentiment = (event) => {
    setSentiment(event.target.value);
    setRows(setCommentList(placeId, event.target.value));
  };
  const setCommentList = (placeId, sentimentId) => {
    if (inputList) {
      const element = placeList.find(element => element.key == placeId);
      const rootData = inputList[Number(element.key) - 1].data;
      let filterIdComment = [];
      switch (sentimentId) {
        case '1':
          filterIdComment = Object.keys(rootData.accommodation)
          break;
        case '2':
          filterIdComment = Object.keys(rootData.entertainment)
          break;
        case '3':
          filterIdComment = Object.keys(rootData.food)
          break;
        case '4':
          filterIdComment = Object.keys(rootData.restaurant_serving)
          break;
        case '5':
          filterIdComment = Object.keys(rootData.shopping)
          break;
        case '6':
          filterIdComment = Object.keys(rootData.traveling)
          break;
        default:
          break;
      }
      let filterComment = [];

      filterIdComment.forEach((element) => {
        filterComment.push(rootData.review[element]);
      });
      const listComment = Object.values(filterComment);
      let newInputList = []
      listComment.map((element, index) => {
        newInputList.push({ id: filterIdComment[index], comment: element })
      })
      return newInputList;
    }
  }
  const [rows, setRows] = useState(setCommentList(placeId, sentiment))
  const handleChangePlace = (event) => {
    setRows(setCommentList(event.target.value, sentiment));
    handleChangeId(event.target.value)
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
                value={placeId}
                label="Place"
                onChange={handleChangePlace}

              >
                {placeList.map((place) =>
                  <MenuItem value={place.key} key={place.key}> {place.data}</MenuItem>)
                }
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
                onChange={handleChangeSentiment}
              >
                <MenuItem value={'1'}>Accommodation</MenuItem>
                <MenuItem value={'2'}>Entertainment</MenuItem>
                <MenuItem value={'3'}>Food</MenuItem>
                <MenuItem value={'4'}>Restaurant Serving</MenuItem>
                <MenuItem value={'5'}>Shopping</MenuItem>
                <MenuItem value={'6'}>Traveling</MenuItem>

              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="listline__layout__content">
          <DataTable rows={rows} />
        </div>
      </div>
    </div>
  );
};  