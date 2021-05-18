import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid.png";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import Statewise from "./components/StateData/StateData";

import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';


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
      <NavBar />
        <Switch>
          <Route path="/data" component={() => <Statewise />} />
          <Route exact path="/" component={() => <Homepage data={data} image={styles.image} 
          handleCountryChange={this.handleCountryChange}
           coronaImage={coronaImage} country={country} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
