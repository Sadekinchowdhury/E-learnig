import React from "react";
import Notifications from "./Notifications";

const Notices = () => {
  return (
    <section className="py-8 bg-[#001030] overflow-hidded">
      <div className="lg:max-w-[1000px] mx-auto mt-3">
        <div className="overflow-x-scroll">
          <Notifications />
        </div>
      </div>
    </section>
  );
};
export default Notices;
