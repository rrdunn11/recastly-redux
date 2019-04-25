import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //I: current state and action
  //O: new state
  //C: use switch statement 
  //E: no action?

  //create a switch statement
  //check action.type
    //if case matches: return updated new state
  //default is to return initial state

  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }

};


// this.state = {
//   videos: [],
//   currentVideo: null
// };

export default currentVideoReducer;
