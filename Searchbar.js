import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='searchbar'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='formdata'>
                        <label for='search'>Youtube</label>
                        <input onChange={this.handleChange} name='search' type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;