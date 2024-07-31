//import React from 'react';
import React, { useEffect, useState, useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

//import {employeesData, employeesGrid } from '../Data/dummy';
//import {Header} from '../Components'

import './Login.css'
//import { PostsData } from '../../Data/PostsData'
import LoginForm from '../LoginForm/LoginForm'

import axios from "axios";


const Login = () => {
    // const [PostsData, setPostsData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false)

    
  
    // const fetchData = () => {
    //   return fetch("https://celebrighter.com/api/v1/posts")
    //         .then((response) => response.json())
    //         .then((data) => setPostsData(data.posts));
    // }

    // const fetchData = () => {
    //   setIsLoading(true)
    //   return axios.get("https://celebrighter.com/api/v1/posts")
    //         .then((response) => { 
    //           setIsLoading(false); 
    //           setPostsData(response.data.posts)
    //         });
    
            
    // }

    // const fetchData1 = () => {
    //   //setIsLoading(true)
    //   return axios.get("https://celebrighter.com/api/v1/posts")
    //         .then((response) => { 
    //           //setIsLoading(false); 
    //           setPostsData(response.data.posts)
    //         });
    
            
    // }
  
    // useEffect(() => {
    //   fetchData();

    //   let interval = setInterval(() => fetchData1(), (1000 * 10))
    // //destroy interval on unmount
    // return () => clearInterval(interval)
      
    // },[]) 
    
    


  return (
    
    

    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">        
        {/* <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">           */}
          <div className="mt-10 md:w-96 h-50">
            {/* <img
              className="md:w-96 h-50 "
              src={comingsoon}
              alt=""
            />  */}

            <LoginForm />
          </div>
        {/* </div> */}
      </div>
    </div>
  )

  // return (
  //   <main>
  //     <h1>Posts List</h1>
  //     <ul>
  //       {PostsData && PostsData.length > 0 && PostsData.map((post, id) => (
  //           <li key={post.id}>{post.filename}</li>
  //         ))}
  //     </ul>
  //   </main>
  // );
}











// const Posts = () => {
//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Posts" />
//       <GridComponent
//         dataSource={employeesData}
//         allowPaging
//         allowSorting
//         toolbar={['Search']}
//         width= 'auto'
//       >
//         <ColumnsDirective>
//           {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Page, Search, Toolbar]} />
//       </GridComponent>
//     </div>
//   );
// };
export default Login;