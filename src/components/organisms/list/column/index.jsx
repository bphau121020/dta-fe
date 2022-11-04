import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import _ from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { inputSelector, placeSelector } from "../../../../redux/selectors";
import DataTable from "../../data-table";

export const ListColumn = (props) => {
  const { recomendPlace } = props;
  const noDuplicateList = _.uniq(recomendPlace);
  const [localPlace, setLocalPlace] = React.useState(noDuplicateList[0]);
  const placeList = useSelector(placeSelector);
  const inputList = useSelector(inputSelector);
  const setCommentList = (value) => {
    if (inputList) {
      const element = placeList.find(element => element.data === value)
      const listComment = Object.values(inputList[element.key - 1].data.review);
      const listId = Object.keys(inputList[element.key - 1].data.review);
      let newInputList = []
      listComment.forEach((element, index) => {
        newInputList.push({ id: listId[index], comment: element })
      })
      return newInputList;
    }
  }
  const [rows, setRows] = useState(setCommentList(noDuplicateList[0]))
  const placeSelect = (event) => {
    setLocalPlace(event.target.value);
    setRows(setCommentList(event.target.value));
  };

  return (
    <div className="listline">
      <div className="listline__layout">
        <h3 className="listline__layout__">
          List Review Data with Column Chart
        </h3>
        <div className="listcolumn__layout__title">
          <Box sx={{ minWidth: 200 }}>
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
              <InputLabel id="place-label">Place</InputLabel>
              <Select
                labelId="place-label"
                id="demo-simple-select"
                value={localPlace}
                label="Place"
                onChange={placeSelect}
              >
                {noDuplicateList.map((place, index) =>
                  <MenuItem value={place} key={index}> {place}</MenuItem>)
                }
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
