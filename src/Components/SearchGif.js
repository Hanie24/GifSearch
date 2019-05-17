import React from 'react';

class SearchGif extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    input(term) {
        this.setState({term});
        this.props.onTerm(term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={ event => this.onInput(event.target.value)} />
            </div>
        );
    }
}

export default SearchGif;