import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/molecules/card";
import { ColumnChart, LineChart } from "../../components/organisms/chart";
import { ListColumn, ListLine } from "../../components/organisms/list";
import Banner from "../../components/templates/banner";
import Navbar from "../../components/templates/nav-bar";
import { spinnerStyle } from "../../constant";
import { realtimeDB } from "../../firebase/config";
import { fetchCal, fetchInput, fetchMax, fetchPlace, saveSuggestPlace } from "../../redux/dashboard/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [placeId, setPlaceId] = useState("1");
  const [calData, setCalData] = useState([])
  const [maxData, setMaxData] = useState([])
  const [recomendPlace, setRecomendPlace] = useState([]);

  const handleChangeId = (id) => {
    setPlaceId(id);
  }
  const [total, setTotal] = useState({
    review: 0,
    place: 0
  })
  useEffect(() => {
    const placeRef = ref(realtimeDB, 'place_id');
    let total_place = 0;
    let total_review = 0;
    onValue(placeRef, (snapshot) => {
      let record = [];
      snapshot.forEach(childSnapShot => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        record.push({ "key": keyName, "data": data });
        total_place++;
      });
      dispatch(fetchPlace(record));
    })

    const inputRef = ref(realtimeDB, 'input');
    onValue(inputRef, (snapshot) => {

      let record = [];
      snapshot.forEach(childSnapShot => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        record.push({ "key": keyName, "data": data });
      });
      for (let element of record) {
        total_review += Object.keys(element.data.review).length;
      }
      dispatch(fetchInput(record));
      setTotal({ review: total_review, place: total_place });
    })

    const calRef = ref(realtimeDB, 'cal');
    onValue(calRef, (snapshot) => {
      let record = [];
      snapshot.forEach(childSnapShot => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        record.push({ "key": keyName, "data": data });
      });
      dispatch(fetchCal(record));
      setCalData(record)
    })

    const maxRef = ref(realtimeDB, 'max');
    onValue(maxRef, (snapshot) => {
      let record = [];
      let place = [];
      snapshot.forEach(childSnapShot => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        record.push({ "key": keyName, "data": data });
        place.push(data.place_name)
      });
      dispatch(fetchMax(record));
      dispatch(saveSuggestPlace(place))
      setMaxData(record)
      setRecomendPlace(place)
    })

  }, []);
  
  const CardData = [
    {
      icon: "bx bx-notepad",
      title: "Total Reviews",
      value: total.review,
      background: 'linear-gradient(to right,#fe9365,#feb798)',
      color: '#fe9365'
    },
    {
      icon: "bx bx-location-plus",
      title: "Total Place",
      value: total.place,
      background: 'linear-gradient(to right,#0ac282,#0df3a3)',
      color: '#0ac282'
    }
  ]
  return (recomendPlace.length !== 0 && calData.length !== 0 && maxData.length !== 0 ? < div className="main" >
    <div className="container">
      <Navbar />
    </div>
    <div className="main-container">
      <div className="container">
        <div className="main-layout">

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
            <div className="card">
              {CardData.map((item, index) => (
                <Card
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  key={index}
                  background={item.background}
                  color={item.color}
                />
              ))}
            </div>
            <Banner />
          </div>
          <div className="chart">
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                  <div className="chart-layout">
                    <LineChart placeId={placeId} calData={calData} />
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="chart-layout">
                    <ColumnChart maxData={maxData} recomendPlace={recomendPlace} />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <div className="table-data">
          <Box sx={{ width: "100%" }} className="list-layout">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid xs={6}>
                <div className="">
                  <ListLine handleChangeId={handleChangeId} placeId={placeId} />
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="">
                  <ListColumn recomendPlace={recomendPlace} />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  </div > : <div style={spinnerStyle}>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </div>);
};

export default Dashboard;
