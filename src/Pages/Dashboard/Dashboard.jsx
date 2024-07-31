//import React from 'react';
import React, { useEffect, useState, useRef, useContext } from "react";
import { useUpdate, useNotify, useRedirect, useRecordContext} from 'react-admin';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBeer } from "react-icons/fa";
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { TiTick } from 'react-icons/ti';

import { Navigate } from "react-router-dom";

// import Currency from 'react-currency-icons';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../../Components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../Data/dummy';
import { useStateContext, useUserContext } from '../../Contexts/ContextProvider';
import product9 from '../../Data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  const user = useUserContext();

  const redirect = useRedirect();

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);


  // if (!authenticated) {
  //   // return <Navigate replace to="/login" />;
  //   redirect('/login');
  //   } else {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
      {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat  bg-center"> */}
      {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-81 p-6 rounded-2xl"> */}
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-81 p-8 pt-9 m-3  bg-no-repeat  bg-center">
          <div className="flex justify-between items-center">
            <div>
              {/* <h2>{`Hello ${user}!`}</h2>   */}
              <p className="font-bold text-gray-400">Earn 10,000 Reward Points </p>
              <p className="text-2xl">Get A Smart Phone For Free</p>                          
            </div>
            <br />
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            > */}
              {/* <BsCurrencyDollar /> */}
              {/* <h1>₹</h1> */}
              {/* <FaBeer /> */}
              {/* <Currency code="USD" size="small" /> */}
            {/* </button> */}
          </div>
          
          {/* <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Free Points"
              borderRadius="10px"
            />
          </div> */}
        </div>
        </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earned</p>
              <p className="text-2xl">4,235</p>              
            </div>
            <br />
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            > */}
              {/* <BsCurrencyDollar /> */}
              {/* <h1>₹</h1> */}
              {/* <FaBeer /> */}
              {/* <Currency code="USD" size="small" /> */}
            {/* </button> */}
          </div>
          
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Reward Points"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Gained</p>
              <p className="text-2xl">500</p>              
            </div>
            <br />
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            > */}
              {/* <BsCurrencyDollar /> */}
              {/* <h1>₹</h1> */}
              {/* <FaBeer /> */}
              {/* <Currency code="USD" size="small" /> */}
            {/* </button> */}
          </div>
          
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Free Points"
              borderRadius="10px"
            />
          </div>
        </div>
        {/* <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {/* {item.percentage} */} {"     "}
                {/* </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div> */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {/* {item.percentage} */} {"     "}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>

      </div>


      {/* <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div> 
      </div> */}

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className="mt-10 w-72 md:w-400">
            {/* {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))} */}

              <div key="Bank Transfer" className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: "rgb(228, 106, 118)",
                      backgroundColor: "rgb(255, 244, 229)",
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    <TiTick />
                  </button>
                  <div>
                    <p className="text-md font-semibold">Bank Transfer</p>
                    <p className="text-sm text-gray-400">Money Withdrawn</p>
                  </div>
                </div>
                <p className={`text-green-600`}>₹1,354</p>
              </div>



          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            {/* <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div> */}

            <p className="text-gray-400 text-sm">1 Recent Transactions</p>
          </div>
        </div> 
      </div>

    </div>
  );
//}
};

export default Dashboard;