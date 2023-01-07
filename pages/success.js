import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for Ordering!</h2>
        <p className="email-msg">Receipt Sent to your Email!</p>
        <p className="description">
          If you have questions, please{""}
          <a className="email" href="mailto:help@example.com">
            email us
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Keep Shopping!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
