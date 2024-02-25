import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import { useEffect, useState } from 'react';
import {FetchTopAlbums} from "./Components/Api/Api";
import {Outlet} from "react-router-dom";

function App() {
  const [data,setData]=useState({});
  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>({
        ...prevData,
        [key]:data
      }))
    })

  }
  useEffect(()=>{
    generateData("TopAlbums",FetchTopAlbums);
  },[])

  const {TopAlbums}=data;
  // console.log(TopAlbums,"aaaaaaaaaaaaaaaa");


  return (
    <div>
      <NavBar/>
      {/* <Hero/>
      <Section Type={"TopAlbums"} Albums={TopAlbums}/> */}
      <Outlet context={{data:{TopAlbums}}}/>
    </div>
  );
}

export default App;
