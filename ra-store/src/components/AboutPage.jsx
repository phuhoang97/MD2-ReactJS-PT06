import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import DetailPage from "./DetailPage";
import InfoPage from "./InfoPage";
import FooterPage from "./FooterPage";
import SliderPage from "./SliderPage";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <SliderPage />
        <DetailPage />
        <InfoPage />
        <FooterPage />
      </div>
    );
  }
}
