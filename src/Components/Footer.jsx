import React from 'react';
import { useStateContext } from "../Contexts/ContextProvider";

const Footer = () => {
 const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <p className="dark:text-blue-200 text-blue-700 text-center m-20" style={{ color:currentColor }}>
        © 2022 All rights reserved by Celebrighter.com
      </p>
    </div>
  )
 };

export default Footer;