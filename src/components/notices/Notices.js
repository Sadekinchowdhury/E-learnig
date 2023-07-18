import React, { useState } from "react";
import PrivateNotice from "./PrivateNotice";
import PublicNotice from "./PublicNotice";
import { IoIosNotifications } from "react-icons/io";
const Notices = () => {
  const [privateNotice, setPrivateNotice] = useState(false);
  const [publicNotice, setPublicNotice] = useState(true);

  const showPrivateNotice = () => {
    if (!privateNotice) {
      setPrivateNotice(!privateNotice);
      setPublicNotice(false);
    }
  };
  const showPublicNotice = () => {
    if (!publicNotice) {
      setPublicNotice(!publicNotice);
      setPrivateNotice(false);
    }
  };
  return (
    <section className="py-8 bg-[#001030] overflow-hidded">
      <h2 className="lg:text-4xl md:text-3xl text-xm text-center text-white font-bold">
        {" "}
        <IoIosNotifications className="inline lg:text-5xl md:text-4xl sm:text-3xl text-[#00ba57]" />{" "}
        Notifications
      </h2>
      <ul className="lg:mt-8 md:mt-6 mt-4 flex items-center justify-center">
        <li>
          <button
            onClick={showPublicNotice}
            className={`notice-toggle-btn btn-xsm text-sm bg-gray-900 text-white font-semibold py-3 px-4 border-[#000000] ${
              publicNotice && "active-notice"
            }`}
            to="/notices/public"
          >
            Public Notice
          </button>
        </li>
        <li>
          <button
            onClick={showPrivateNotice}
            className={`notice-toggle-btn btn-xsm text-sm bg-gray-900 text-white font-semibold py-3 px-4 border-[#000000] ${
              privateNotice && "active-notice"
            }`}
          >
            Private Notice
          </button>
        </li>
      </ul>
      <div className="lg:max-w-[1000px] mx-auto mt-3">
        <div className="overflow-x-scroll">
          {privateNotice && <PrivateNotice />}
          {publicNotice && <PublicNotice />}
        </div>
      </div>
    </section>
  );
};

export default Notices;
