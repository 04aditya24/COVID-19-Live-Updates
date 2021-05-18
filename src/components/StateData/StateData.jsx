import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

// import  "./statemodul.css";
import './style.css';
const Statewise = () => {
  const [data, setdata] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setdata(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className="mb-5  " style={{textAlign:"center"}}>
          <span className="font-weight-bold">INDIA</span>Covid 19 Dashboard
        </h1>
       
        <Table responsive>
          <thead>
            <tr style={{backgroundColor:" #00394d" ,color:"white"}}>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((curElem, ind) => {
              return (
                <tr key={ind}>
                  <td>{curElem.state}</td>
                  <td>{curElem.confirmed}</td>
                  <td>{curElem.recovered}</td>
                  <td>{curElem.deaths}</td>
                  <td>{curElem.active}</td>
                  <td>{curElem.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Statewise;
