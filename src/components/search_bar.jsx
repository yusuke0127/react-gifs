import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    // console.log(this.props);
    // console.log(this.props.searchFunction);
    this.setState({
      term: event.target.value
    })
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("SEARCH BAR WILL MOUND");
  }

  componentDidMount() {
    console.log("SEARCH DID MOUNT");
  }


  render() {
    console.log("SEARCH BAR RENDER");
    return (

      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
