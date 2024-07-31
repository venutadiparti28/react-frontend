//import React from 'react';
import React, { useEffect, useState, useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

//import {employeesData, employeesGrid } from '../Data/dummy';
//import {Header} from '../Components'

import './Posts.css'
//import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

import axios from "axios";


const Posts = () => {
    const [PostsData, setPostsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    
  
    // const fetchData = () => {
    //   return fetch("https://celebrighter.com/api/v1/posts")
    //         .then((response) => response.json())
    //         .then((data) => setPostsData(data.posts));
    // }

    const fetchData = () => {
      setIsLoading(true)
      return axios.get("https://celebrighter.com/api/v1/posts")
            .then((response) => { 
              setIsLoading(false); 
              setPostsData(response.data.posts)
            });
    
            
    }

    const fetchData1 = () => {
      //setIsLoading(true)
      return axios.get("https://celebrighter.com/api/v1/posts")
            .then((response) => { 
              //setIsLoading(false); 
              setPostsData(response.data.posts)
            });
    
            
    }
  
    useEffect(() => {
      fetchData();

      let interval = setInterval(() => fetchData1(), (1000 * 10))
    //destroy interval on unmount
    return () => clearInterval(interval)
      
    },[]) 
    
    


  return (
    
    <div className="Posts">
        {isLoading && <p>Loading...</p>}
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
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
export default Posts;