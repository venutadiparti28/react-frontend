import React from 'react'
import PostSide from '../PostSide/PostSide'
//import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'
import './Home.css'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'


const Home = () => {
  

  return (
    // <div className="mt-24">
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      {/* <div className="Home">        
          <PostSide/>  
          <RightSide/>     
          
      </div> */}
      {/* <PostShare/> */}
      <div className="md:w-300 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">            
      {/* <div className="md:w-300 rounded-2xl p-6 m-3"> */}
            <PostShare/>            
      </div>
      <div className="flex flex-wrap rounded-2xl">
      {/* <div className="flex rounded-2xl"> */}
      {/* <div className="md:w-600 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3"> */}
          {/* <div className="md:w-300 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">                       
            <Posts/>            
          </div> */}
          <Posts/>
          {/* <RightSide/> */}

          {/* <div className="w-100 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">          
            <RightSide/>
          </div> */}
      </div>
    </div>
  )
}

export default Home