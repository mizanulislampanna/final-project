import React, { useState } from "react";
import Footer from "../Shared/Navbar/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvilableAppoinments from "./AvilableAppoinments";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvilableAppoinments date={date}></AvilableAppoinments>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
