import { GridItem } from "@chakra-ui/react";
import React, {useState,useEffect} from "react";

import Pagination from "./Pagination";
export const Products = ({data}) => {
  // TODO: Remove below const and instead import them from chakra
  
  const [pagination,setPagination] = useState({start:0,end:3})
  const[showPerPage,setShowPerPage] = useState(3)

 

  function onShowChange(val){
    setShowPerPage(val)
    console.log(showPerPage)
  }
  function onPagination(start,end){
    setPagination({start:start, end:end})
  }
  return (
    <div style={{marginTop:"50px"}}>
   <div maxW='1000px' color='black'>
     <div templateColumns='repeat(3, 1fr)' gap={6}>
     {data.slice(pagination.start,pagination.end).map((e)=>{
  return (
    <div>
  <GridItem className="Container" key={e.id} />
         <div>
         <img src={e.imageSrc} alt=""/>
          <h1> Title: {e.title}</h1>
          <p>For: {e.gender}</p>
          <p>Category: {e.category}</p>
          <p>Price: {e.price}</p>
         </div>
         </div>)
      })}
   </div>
   
   </div>
   <Pagination showPerPage = {showPerPage} onChange={onPagination} onShowChange={onShowChange} />
   </div>
  );
};

export default Products;
