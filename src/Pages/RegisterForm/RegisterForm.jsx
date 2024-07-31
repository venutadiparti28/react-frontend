import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./RegisterForm.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
//import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
//import { Ecommerce, Orders, Calendar, Employees, Posts, PostSide, Home, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../Contexts/ContextProvider';
//import { FiShoppingCart } from 'react-icons/fi';
//import ComingSoonModal from "../ComingSoonModal/ComingSoonModal";
// import ShareModal from "../ShareModal/ShareModal";

import axios from 'axios';

import { Link, NavLink } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const RegisterForm = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfPassword] = useState();
  

  // const [modalOpened, setModalOpened] = useState(false);

  

  // handleClick = () => {
  //   console.log('Click happened');
  // };

  // handleClick = () => {
  //   console.log('this is:', this);
  // }

  // handleClick = () => {
  //   alert("Great Shot!");
  // };

  const shoot = () => {
    alert("Great Shot!");
  }

  const post = () => {
    alert("Great Shot!");
  }

  //const [file, setFile] = useState();

  function handleChangeEmail(event) {    
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {    
    setPassword(event.target.value);
  }

  function handleChangeConfPassword(event) {    
    setConfPassword(event.target.value);
  }

  

  function handleSubmit(event) {
    // alert("Great Shot!123");
    event.preventDefault();
    const url = 'https://celebrighter.com/api/v1/register';
    const formData = new FormData();
    //formData.append('file', image);
    //formData.append('fileToUpload', image.image);
    // formData.append('fileToUpload', file);
    // formData.append('fileName', file.name);
    // formData.append('message', message);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confpassword', confpassword);
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    
    // axios.post(url, formData, config).then((response) => {
    axios.post(url, formData, config).then((response) => {
      //alert("Status: " + response.data.status + " Message: " + response.data.message);
      alert(response.data.message);
      
      // setModalOpened(false);      
      //console.log(response.data);
    });

  }


  return (
    <div className="RegisterForm">
      {/* <img src={ProfileImage} alt="" /> */}
      <div>
      {/* <form method="post"> */}
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      <form onSubmit={handleSubmit}>
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      {/* <form action="http://localhost/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
        
        <h1 style={{color: "blue"}}>New User Registration</h1>
        <input type="text" name="email" placeholder="Enter your email id" onChange={handleChangeEmail}/>
        <input type="password" name="password" placeholder="Enter password" onChange={handleChangePassword}/>
        <input type="password" name="confpassword" placeholder="Confirm password" onChange={handleChangeConfPassword}/>
        <div className="postOptions">          
          
          
          {/* <button className="button ps-button" onClick={post}>Share</button> */}

          {/* <input type="submit" value="Share"></input> */}  
          {/* <button className="button ps-button" onClick={post}>Share</button> */}


          {/* ---<input type="file" name="fileToUpload" id="fileToUpload" onChange={handleChange} /> */}
          {/* <input type="file" onChange={handleChange}/> */}
          <button className="button ps-button" type="submit">Register</button>


          {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}

        </div>
        
      

      </form>
      </div>
    </div>
  );
};

export default RegisterForm;
