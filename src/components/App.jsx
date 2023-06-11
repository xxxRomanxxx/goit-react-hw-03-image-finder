import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


class App extends Component {
  state = {
    searchQuery: '',
   }
   
   handleSearchForm = (searchEl) => {
    console.log(searchEl);
   

    this.setState({searchQuery: searchEl})
    
   }
   
  render() {
    fetch('https://pixabay.com/api/?q=cat&page=1&key=37209815-b4fb3ec1c4197292e1af8c69e&image_type=photo&orientation=horizontal&per_page=12')
          .then(res => res.json).then(console.log);
  
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm}/>
        <ImageGallery searchEl={this.state.searchQuery}/>
      </div>
    );
  }
}
 
export default App;
