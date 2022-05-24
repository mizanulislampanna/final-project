import React from "react";
import Footer from "../Shared/Navbar/Footer";
import Banner from "./Banner/Banner";
import Info from "./Banner/Info";
import Services from "./Banner/Services";
import Exceptional from "./Exceptional";
import MakeAppoinment from "./MakeAppoinment";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
