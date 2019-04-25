import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';
// import handleSearchChange from '../actions/search.js';



//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
//i:component
//o: connection between store and component
//c: n/a
//e: n/a

//create mapStatToProps
const mapStateToProps = state => {
  //returns an object with data that the omponent can use
    // return{
    //     value: state.value
    // }
    return {}
}
//create mapDispatchToPops
//should take in dispatch method to dispatch actions to store
const mapDispatchToProps = dispatch => {
 return {
    handleSearchInputChange: (query) => {
        dispatch(handleVideoSearch(query))
    }
 }
}

//utilize connect method
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
