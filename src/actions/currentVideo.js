var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  //i: video objedt
  //o: action object
  //c: n/a
  //e: empty video

  //create template object with two properties
  //set type &  payload as keys on object
      //set value of type to 'Click video item'
      //set payload to input variable
  //return object
 
  type: 'CHANGE_VIDEO', 
  video: video
});

export default changeVideo;
