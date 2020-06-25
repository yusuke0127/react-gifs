import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    // console.log(this.props.gifs);
    // console.log(this.props.selectGif);
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
  }

  render () {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

// class GifList extends Component {
//   render () {
//     return (
//       <div className="gif-list">
//         {this.props.gifs.map(gif => {
//           return <Gif id={gif.id} key={gif.id} />
//         })}
//       </div>
//     );
//   }
// }

export default GifList;
