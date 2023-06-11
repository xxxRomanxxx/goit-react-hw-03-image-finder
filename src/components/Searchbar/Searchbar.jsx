import { Component } from "react";
import Notiflix from 'notiflix';

class Searchbar extends Component {
    state = { 
        searchEl: '',
     }

     handleSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.searchEl.trim() === '') {
            Notiflix.Notify.info('search bar cannot be empty');
            return 
          } 
        this.props.onSubmit(this.state.searchEl);
        this.setState({searchEl: ''})
     }

     handleChange = (evt) => {
        this.setState({searchEl: evt.currentTarget.value.toLowerCase()})
     }

    render() { 
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span >Search</span>
                    </button>
                    <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchEl}
                    onChange={this.handleChange}
                    />
                </form>
            </header>
            );
    }
}
 
export default Searchbar;