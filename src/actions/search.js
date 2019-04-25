import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 //i: search query 
 //o: function
 //c: n/a
 //e: empty query
  //TODO:  Write an asynchronous action to handle a video search!

  //return function that takes dispatch as parameter
  //submit get request to google api
  //change query to user input which is q     
   //if query is success then ccall  dispatch on currentVideo  & vidoList action creaters

   return (dispatch) => {
     var option = {
       key: YOUTUBE_API_KEY,
       query: q,
       max: 5
     }
    
    searchYouTube(option, (items) => {
      dispatch(changeVideo(items[0]));
      dispatch(changeVideoList(items));
    });  
  };      
};

export default handleVideoSearch;