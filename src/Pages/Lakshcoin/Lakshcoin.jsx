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
import lakshmicoin from '../../Data/lakshmicoin1.png';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Lakshcoin = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">        
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Lakshmi Coin</p>
            <p className="text-gray-400 ">Not a Crypto Currency</p>
            {/* <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button> */}
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={lakshmicoin}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">Coming Soon!</p>
              {/* <p className="text-gray-400 ">Not A Crypto Coin</p> */}
              <p className="mt-8 text-sm text-gray-400">
                Everyone wants to have atleast one Lakshmi Coin. The Lakshmi Coin brings lots of wealth into their Life.  
              </p>
              <div className="mt-3">
              {/* <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                /> */}
                {/* <Link to="/dashboard"> */}
                {/* <Link to={{ pathname: "https://lakshcoin.com/" }} target="_blank" > */}
                <a target="_blank" href="https://lakshcoin.com/">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Read More"
                    borderRadius="10px"
                  />
                </a>
                {/* </Link> */}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lakshcoin;