import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid.png";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
    //     console.log(data);
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
      
        {!data ? <Loader /> : (
                            <>
                          <NavBar />
                          <div style={{textAlign:"center"}}>   <img className={styles.image} src={coronaImage} /> </div>
                            {/* <img className={styles.image} src={coronaImage} />  */}
        <Cards data={data} />
        <br></br>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />

                            </>
        )}
      </div>
    );
  }
}
export default App;
