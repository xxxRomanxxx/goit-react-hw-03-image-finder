import { Component } from "react";

class ImageGallery extends Component {
    state = {  }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.searchEl !== this.props.searchEl) {
          
    //     }
    // }
    render() { 
        return (<><p>{this.props.searchEl}</p></>);
    }
}
 
export default ImageGallery;