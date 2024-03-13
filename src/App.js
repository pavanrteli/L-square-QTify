import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import {
  FetchTopAlbums,
  FetchNewAlbums,
  FetchSongs,
  FetchGenres,
} from "./Components/Api/Api";
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => ({
        ...prevData,
        [key]: data,
      }));
    });
  };
  useEffect(() => {
    generateData("TopAlbums", FetchTopAlbums);
    generateData("NewAlbums", FetchNewAlbums);
    generateData("Songs", FetchSongs);
    generateData("Genres", FetchGenres);
  }, []);
  // console.log("hello");

  const { TopAlbums = [], NewAlbums = [], Songs = [], Genres=[] } = data;

  return (
    <div>
      <NavBar />
      <Outlet context={{ data: { TopAlbums, NewAlbums, Songs, Genres } }} />
    </div>
  );
}

export default App;
