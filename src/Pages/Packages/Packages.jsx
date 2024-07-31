import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Link, NavLink } from "react-router-dom";

import { Stacked, Pie, Button, LineChart, SparkLine } from '../../Components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../Data/dummy';
import { useStateContext } from '../../Contexts/ContextProvider';
import product9 from '../../Data/product9.jpg';
import comebacksoon from '../../Data/comebacksoon.jpg';
import comingsoon from '../../Data/comingsoon.png';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Packages = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">        
        {/* <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">           */}
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={comingsoon}
              alt=""
            /> 
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Packages;