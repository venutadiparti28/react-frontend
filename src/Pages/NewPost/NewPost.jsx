import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./NewPost.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
//import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
//import { Ecommerce, Orders, Calendar, Employees, Posts, PostSide, Home, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../Contexts/ContextProvider';
//import { FiShoppingCart } from 'react-icons/fi';
import ComingSoonModal from "../ComingSoonModal/ComingSoonModal";
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

const NewPost = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [file, setFile] = useState();
  const [message, setMessage] = useState();
  const imageRef = useRef();
  const videoRef = useRef();

  // const [modalOpened, setModalOpened] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo({
        video: URL.createObjectURL(vid),
      });
    }
  };

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

  function handleChangeMessage(event) {    
    setMessage(event.target.value);
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    // alert("Great Shot!123");
    event.preventDefault();
    const url = 'https://celebrighter.com/v1/add-new-post.php';
    const formData = new FormData();
    //formData.append('file', image);
    //formData.append('fileToUpload', image.image);
    formData.append('fileToUpload', file);
    formData.append('fileName', file.name);
    formData.append('message', message);
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    
    axios.post(url, formData, config).then((response) => {
      //alert("Status: " + response.data.status + " Message: " + response.data.message);
      alert(response.data.message);
      setImage(null);
      // setModalOpened(false);      
      //console.log(response.data);
    });

  }


  return (
    <div className="NewPost">
      <img src={ProfileImage} alt="" />
      <div>
      {/* <form method="post"> */}
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      <form onSubmit={handleSubmit}>
      {/* <form action="https://celebrighter.com/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
      {/* <form action="http://localhost/v1/add-new-post.php" method="post" enctype="multipart/form-data"> */}
        <input type="text" name="message" placeholder="What's happening" onChange={handleChangeMessage}/>
        <div className="postOptions">          
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          
          {/* <button className="button ps-button" onClick={post}>Share</button> */}

          {/* <input type="submit" value="Share"></input> */}

                    
          
          {/* <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div> */}

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="fileToUpload"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>

          {/* <div style={{ display: "none" }}>
            <input 
              type="file" 
              ref={imageRef}
              onChange={handleChange}
            />      
          </div> */}
          
          {/* <div style={{ display: "none" }}>
            <input
              type="file"
              name="myVideo"
              ref={videoRef}
              onChange={onVideoChange}
            />
          </div> */}

          {/* <button className="button ps-button" onClick={post}>Share</button> */}


          {/* ---<input type="file" name="fileToUpload" id="fileToUpload" onChange={handleChange} /> */}
          {/* <input type="file" onChange={handleChange}/> */}
          <button className="button ps-button" type="submit">Post</button>


          {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}

        </div>
        {image && (

          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>

        )}

        {video && (

        <div className="previewVideo">
          <UilTimes onClick={()=>setVideo(null)}/>
          <video src={video.video} alt="" />
        </div>

        )} 
      

      </form>
      </div>
    </div>
  );
};

export default NewPost;
