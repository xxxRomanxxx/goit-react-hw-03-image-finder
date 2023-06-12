import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";

class ImageGallery extends Component {
    state = { 
        image: [],
        page: 1,
     }

     changePage = (page) => {
        this.setState({pageView: page})
     }

     onLoadMore = () => {
        this.setState(({ page }) => ({ page: page + 1 }));
      };


    componentDidUpdate(prevProps, prevState) {

        const prevQuery = prevProps.searchEl;
        const newQuery =  this.props.searchEl;
        const prevPage = prevState.page;
        const newPage = this.state.page;
        
        if (prevQuery !== newQuery || prevPage !== newPage) {
            this.handleGetImages(newQuery, newPage);
        }
    }

    handleGetImages = (searchQuery, page) => {
            fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=37209815-b4fb3ec1c4197292e1af8c69e&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json()).then(({totalHits, hits}) => {
              console.log(totalHits);
              console.log(hits);
              this.setState({image: [...this.state.image, ...hits]})

            })
        }
        render() {
            let button
            if (this.state.image.length > 0) {
                button = <Button onLoadMore={this.onLoadMore}/>;
            }
            return (
            <>
            <ul>
                <ImageGalleryItem image={this.state.image}/>
            </ul>
            {button}
            </>
            );
        }
    };

   

 
export default ImageGallery;