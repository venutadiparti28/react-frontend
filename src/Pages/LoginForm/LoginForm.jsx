import React, { useState, useRef, createContext } from "react";
import { useUpdate, useNotify, useRedirect, useRecordContext, Button } from 'react-admin';
import ProfileImage from "../../img/profileImg.jpg";
import "./LoginForm.css";
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

//import {  BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';

import Dashboard from "../Dashboard/Dashboard";

import { useUserContext } from '../../Contexts/ContextProvider';

import axios from 'axios';

import { Link, NavLink, useNavigate } from "react-router-dom";


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

//const UserContext = createContext();

//const navigate = useNavigate();

const LoginForm = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const [user, setUser] = useState();

  const navigate = useNavigate();

  const redirect = useRedirect();

  // const [user, setUser] = useUserContext();

  //const user = useUserContext();
  
  

  // this.state = {
  //   redirect: false, 
  //   emailid: '', 
  //   pwd: ''
  // }

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


  // setRedirect =() =>{
  //   this.setState({
  //     redirect: true
  //   });
  // }

//   function handleLogin(event) {
//   event.preventDefault();

//   fetch('/oauth/token',
//      {
//         method: "POST",
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body:`grant_type=password&username=${this.state.emailid}&password=${this.state.pwd}&client_id=4&client_secret=LT7raDKvPwIUrDFJBISlhpzAXu6cSYiLBGhrUmTm&scope=*`

//      }
//   )
//   .then(response =>
//      response.json()

//   )
//   .then(responseJson => {
//       const returnObj = responseJson;
//       console.log(returnObj);
//       sessionStorage.setItem('resData', JSON.stringify(returnObj));
//       console.log(this.state.redirect);
//       if(this.state.redirect === true){
//            return (
//               //  <Router><Route path="/dashboard" component={Dashboard} /></Router>
//               this.props.history.push('/dashboard')
//            );
//        }
//        else{
//         // <Redirect to="/" />
//        }

//   });

//     this.setState({
//         emailid: '',
//         pwd:''
//     });
// }

  

  

  function handleSubmit(event) {
    // alert("Great Shot!123");
    event.preventDefault();
    const url = 'https://celebrighter.com/api/v1/login';
    const formData = new FormData();
    //formData.append('file', image);
    //formData.append('fileToUpload', image.image);
    // formData.append('fileToUpload', file);
    // formData.append('fileName', file.name);
    // formData.append('message', message);
    formData.append('email', email);
    formData.append('password', password);
    
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    
    // axios.post(url, formData, config).then((response) => {
    axios.post(url, formData, config).then((response) => {
      //alert("Status: " + response.data.status + " Message: " + response.data.message);
      // setUser(response.data.user); 
      
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      //navigate("/dashboard");
      redirect('/dashboard');


      //alert(response.data.message);
      
      // setModalOpened(false);      
      //console.log(response.data);
    });

  }


  return (
    <div className="LoginForm">
      {/* <img src={ProfileImage} alt="" /> */}
      <div>
      {/* <form method="post"> */}
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      <form onSubmit={handleSubmit}>
      {/* <form onSubmit={this.handleLogin}> */}
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      {/* <form action="http://localhost/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
        
        <h1 style={{color: "blue"}}>User Login</h1>
        <input type="text" name="email" placeholder="Enter your email id" onChange={handleChangeEmail}/>
        <input type="password" name="password" placeholder="Enter password" onChange={handleChangePassword}/>
       
       {/* <input type="text" name="emailid" placeholder="Enter your email id" 
              autofoccus="true"
              autoComplete="new-email"
              onChange= {this.ChangeText}                                     
              value={this.state.username} />
        <input type="password" name="pwd" placeholder="Enter password"               
              onChange= {this.ChangeText}             
              value={this.state.username} /> */}

        <div className="postOptions">          
          
          
          {/* <button className="button ps-button" onClick={post}>Share</button> */}

          {/* <input type="submit" value="Share"></input> */}  
          {/* <button className="button ps-button" onClick={post}>Share</button> */}


          {/* ---<input type="file" name="fileToUpload" id="fileToUpload" onChange={handleChange} /> */}
          {/* <input type="file" onChange={handleChange}/> */}
          <button className="button ps-button" type="submit">Login</button>


          {/* <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember" />
            <a href="#" style={{float:'right', marginTop:-23}}>Forgot Password?</a>
          </Form.Group> */}
                                
          <div id="error"></div>
          <div className="clear-fix"></div>
          <hr/>

                            


          {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}

        </div>
        
      

      </form>

      {/* <useUserContext.Provider value={user}>        
        <Dashboard />
      </useUserContext.Provider> */}


      </div>
    </div>
  );
};

export default LoginForm;

// export default withRouter(LoginForm)
