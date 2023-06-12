import {Component} from "react";

class ImageGalleryItem extends Component {
    state = {  } 
    render() { 
        return (
            <>
            {this.props.image.map(({id, webformatURL, tags}) => (
                <li key={id}>
                  <img src={webformatURL} alt={tags} />
                </li>
                ))}
            </>
        );
    }
}
 
export default ImageGalleryItem;



    



