import React from "react";
import axios from 'axios';

export const FetchTopAlbums=async()=>{
    try{
        const response=await axios(`https://qtify-backend-labs.crio.do/albums/top`);
        // console.log(response);
        return response.data;
    } catch(e){
        console.error(e);
    }
}

export const FetchNewAlbums=async()=>{
    try{
        const response=await axios(`https://qtify-backend-labs.crio.do/albums/new`);
        // console.log(response);
        return response.data;
    } catch(e){
        console.error(e);
    }
}

export const FetchSongs=async()=>{
    try{
        const response=await axios(`https://qtify-backend-labs.crio.do/songs`);
        // console.log(response);
        return response.data;
    } catch(e){
        console.error(e);
    }
}

export const FetchGenres=async()=>{
    try{
        const response=await axios(`https://qtify-backend-labs.crio.do/genres`);
        // console.log(response);
        return response.data;
    } catch(e){
        console.error(e);
    }
}
