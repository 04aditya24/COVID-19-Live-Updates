import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "../../components";
import Loader from "../../components/Loader";

const Homepage = ({ coronaImage, country, data, image, handleCountryChange}) => {
    return (
        <>
          {!data ?  <Loader /> : <><div style={{ textAlign: "center" }}>
           {/* <Statewise /> */}
            <img className={image} src={coronaImage} />{" "}
          </div>
          {/* <img className={image} src={coronaImage} />  */}
          <Cards data={data} />
          <br></br>
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} /></>}
        </>
      );
}

export default Homepage;