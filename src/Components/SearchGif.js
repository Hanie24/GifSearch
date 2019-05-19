import React from 'react';

class SearchGif extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInput(term) {
        this.setState({term});
        this.props.onTerm(term);
    }

    render() {
        return (
            <div>
                <input onChange={event => this.onInput(event.target.value)} />
            </div>
        );
    }
}

export default SearchGif;