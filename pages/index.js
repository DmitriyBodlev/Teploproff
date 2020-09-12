import React from "react";
import "isomorphic-fetch";
import { Layout, PricesHouses, PricesServices} from "../components/index";

import { Home } from "./home";
import { About } from "./about";
import { Team } from "./team";
import { Foot } from "./foot";

export default class extends React.Component {
  // componentDidMount() {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then((registration) => {
  //         // console.log("service worker registration successful");
  //       })
  //       .catch((err) => {
  //         // console.warn("service worker registration failed", err.message);
  //       });
  //   }
  // }

  render() {
    return (
      <Layout>
        <a name="home"></a>
        <Home />
        <a name="about"></a>
        <About />
        <a name="team"></a>
        <Team />
        <a name="prices"></a>
        <PricesHouses/>
        <PricesServices/>
        <Foot />
      </Layout>
    );
  }
}
