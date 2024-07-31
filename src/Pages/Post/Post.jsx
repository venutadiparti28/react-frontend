//import React from 'react'
import React, { useState, useRef } from "react";
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

import LikeModal from "../LikeModal/LikeModal";


const Post = ({data}) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="Post">
        {/* <img src={data.img} alt="" /> */}
        {/* <img src={'https://celebrighter.com/v1/uploads/' + data.img} alt="" /> */}
        <img src={'https://celebrighter.com/v1/uploads/' + data.filename} alt="" />


        <div className="postReact">          
            {/* <a href="" onClick={() => setModalOpened(true)} ><img src={data.liked?Heart: NotLike}  alt="" /></a> */}

            <button  onClick={() => setModalOpened(true)}>
              <img src={data.liked?Heart: NotLike}  alt="" />
            </button>
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <LikeModal modalOpened={modalOpened} setModalOpened={setModalOpened} />


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            {/* <span> {data.desc}</span> */}
            <span> {data.message}</span>
        </div>
    </div>
  )
}

export default Post