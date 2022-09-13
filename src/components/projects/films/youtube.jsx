import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {

  render() {

    const opts = {
      height: this.props.mobile ? '200' : '360',
      width: this.props.mobile ? '315' : '640',
    };

    const video = {
       id: this.props.id
    }

    const name = {
      string: this.props.name
    }

    // opts={opts} 

    return <YouTube videoId={video.id} className={name.string} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube