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
