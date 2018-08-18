import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Player extends Component {

  // componentWillMount() {
  //   const script1 = document.createElement("script");
  //   const script2 = document.createElement("script");
  //
  //   script1.src = "https://fast.wistia.com/embed/medias/yjv8ptwp4s.jsonp";
  //   script1.async = true;
  //
  //   script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
  //   script2.async = true;
  //
  //   document.body.appendChild(script1);
  //   document.body.appendChild(script2);
  // }

  render() {
    return (
      <React.Fragment>
        <ReactPlayer url='https://venturemark.wistia.com/medias/yjv8ptwp4s' playing />
      </React.Fragment>
    )
  }
}

export default Player;
