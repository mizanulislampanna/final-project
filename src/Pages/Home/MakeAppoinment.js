import React from "react";
import doctor from "./../../assets/images/doctor.png";
import appoinment from "./../../assets/images/appointment.png";
import Button from "./Button";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appoinment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5 py-3">
        <h3 className="text-xl text-primary">Appoinment</h3>
        <h3 className="text-3xl text-white py-5">Make an Appoinment Today</h3>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quam eius, alias modi aliquid quo natus blanditiis, ducimus hic
          deleniti debitis. Debitis fugiat similique eum animi adipisci incidunt
          eaque vero!
        </p>
        <Button>get started</Button>
      </div>
    </section>
  );
};

export default MakeAppoinment;
