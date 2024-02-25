import React from 'react'
import Hero from '../../Hero/Hero';
import Section from '../../Section/Section';
import { useOutletContext } from "react-router-dom";

function HomePage() {
  const {data}=useOutletContext();
  const {TopAlbums}=data;
  console.log(TopAlbums,"aaaaaaaaaaaaaaa")
  console.log(TopAlbums,"ttttttttt")
  return (
    <div>
      <Hero/>
      <Section title={"Top Albums"} data={TopAlbums} type={"album"}/>
    </div>
  )
}

export default HomePage