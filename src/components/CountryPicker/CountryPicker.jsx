import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";
const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  console.log(fetchedCountries);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
          </NativeSelect>
        </FormControl>
      </h1>
    </div>
  );
};
export default CountryPicker;