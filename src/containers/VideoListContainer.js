import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props. 

//implement mapStateToProps
    // videos: state.videos

const mapStateToProps = (state) => {
    return {
        videos: state.videoList
    }
}

//implement mapDispatchToProps
    //function will take in dispatch method
    //property handleVideoListEntryTitleClick, will dispatch changeVideo(input)
const mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListEntryTitleClick: (video) => {
            dispatch(changeVideo(video))
        }
    }
}

//connect methods to component
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps) (VideoList);

export default VideoListContainer;
