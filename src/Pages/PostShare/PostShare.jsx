import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
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
import ShareModal from "../ShareModal/ShareModal";

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

const PostShare = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const imageRef = useRef();
  const videoRef = useRef();

  const [modalOpened, setModalOpened] = useState(false);

  const [modalOpened1, setModalOpened1] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
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
    //alert("Great Shot!");
  }


  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" disabled/>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={()=>setModalOpened(true)}
          >
            <UilScenery />
            Photo
          </div>
          {/* <div className="option" style={{ color: "var(--photo)" }}
            onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div> */}
          {/* <div className="option" style={{ color: "var(--video)" }}
          onClick={()=>videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>{" "} */}

          <div className="option" style={{ color: "var(--video)" }}
          onClick={()=>setModalOpened1(true)}
          >          
            <UilPlayCircle />
            Video
          </div>{" "}
          <ComingSoonModal modalOpened={modalOpened1} setModalOpened={setModalOpened1} />


          {/* <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "} */}
          {/* <div className="option" style={{ color: "var(--shedule)" }}
          onClick={()=>handleClick('schedule')}> */}

          <div className="option" style={{ color: "var(--shedule)" }}>
            {/*-- <Link to="/calendar" onClick={""} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"> */}
            <Link to="/calendar" onClick={""} className="items-center flex tracking-tight dark:text-white text-slate-900">
              <UilSchedule />            
              {/*-- <NavButton title="Schedule" customFunc={() => handleClick('schedule')} color={currentColor} icon={<UilSchedule />} /> */}
              Shedule
            </Link>
          </div>


          {/* <div className="option" style={{ color: "var(--shedule)" }}
          onClick={()=>setModalOpened(true)}
          >          
            <UilSchedule />
            Shedule
          </div> */}

          <button className="button ps-button" onClick={() => setModalOpened(true)}>
            Post
          </button>
          <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
          
          {/* <button className="button ps-button"><Link to="/calendar">Share</Link></button> */}
          {/* <button className="button ps-button"><a target="_blank" href="https://celebrighter.com/v1/add-new-post.php">Share</a></button> */}
          {/* <button className="button ps-button" onClick={post}>Share</button> */}

          {/* <Link to="/calendar">Share</Link> */}

          {/* <button className="button ps-button" onClick={shoot}>Share</button> */}

          {/* <button className="button ps-button" onClick={() => this.handleClick()}>Share</button> */}

          {/* <button className="button ps-button" onClick={this.handleClick}>Share</button> */}

          {/* <button className="button ps-button" onClick={()=>handleClick('schedule')}>Share</button> */}
          
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>

          {/* <button className="button ps-button">Share Video</button> */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myVideo"
              ref={videoRef}
              onChange={onVideoChange}
            />
          </div>
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

      {/* {isClicked.schedule && (<Calendar />)} */}
      


      </div>
    </div>
  );
};

export default PostShare;
