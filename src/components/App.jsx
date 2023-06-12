import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


class App extends Component {
  state = {
    searchQuery: '',
    image: [],
   }
   
   handleSearchForm = (searchEl) => {
 
    this.setState({searchQuery: searchEl, image: []})
    
   }
   
  render() {
  
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm}/>
        <ImageGallery searchEl={this.state.searchQuery} image={this.state.image}/>
      </div>
    );
  }
}
 
export default App;
