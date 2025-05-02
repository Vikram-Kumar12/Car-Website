import React from "react";
import Consultation from "./Consultation";
import AllAvailableCars from "./AllAvailableCars";

function AllSellingCars() {
  return (
    <section className="py-12">
        <AllAvailableCars/>
        <div className='mt-10'><Consultation/></div>
    </section>
  );
}
export default AllSellingCars;