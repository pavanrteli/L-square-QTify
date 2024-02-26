import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import { useEffect, useState } from 'react';
import {FetchTopAlbums, FetchNewAlbums} from "./Components/Api/Api";
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
    generateData("NewAlbums",FetchNewAlbums);
  },[])

  const {TopAlbums=[], NewAlbums=[]}=data;

  return (
    <div>
      <NavBar/>
      <Outlet context={{data:{TopAlbums, NewAlbums}}}/>
      {/* <Hero/>
      <Section Type={"TopAlbums"} Albums={TopAlbums}/> */}
    </div>
  );
}

export default App;
