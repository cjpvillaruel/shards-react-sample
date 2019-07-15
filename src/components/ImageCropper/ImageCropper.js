import React, { Component } from 'react';
import croppie from 'croppie/croppie';
import 'croppie/croppie.css';

class ImageCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.imageDiv = React.createRef();
  }

  render() {
    const { isOpen } = this.state;
    if (this.imageDiv.current !== null && croppie) {
      const imageDiv = this.imageDiv.current;
      croppie(imageDiv, {
        url:
          'http://localhost:3000/static/media/landing-page-bg-1.f40e0f4b.jpg',
        viewport: { width: 300, height: 200 },
        boundary: { width: 400, height: 300 }
      });
    }
    return <div ref={this.imageDiv}> {isOpen} hello </div>;
  }
}

export default ImageCropper;
