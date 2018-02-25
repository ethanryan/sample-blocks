import React, {Component} from 'react'

import TabBlock from '../components/TabBlock'

class BlocksContainer extends Component {
  constructor() {
    super()
    this.state = {
      test: 'hello',
      imageZoomed: false,
    }
    this.toggleImageState = this.toggleImageState.bind(this)
  }

  toggleImageState(event) {
    // console.log('0. toggleImageState called...')
    // console.log('0. toggleImageState - event.target is: ', event.target)
    console.log('0. toggleImageState - event.target.tagName is: ', event.target.tagName)
    console.log('0. toggleImageState - event.target.id is: ', event.target.id)
    var images = document.getElementsByTagName("img") //an array of our images
    if (event.target.tagName === 'IMG') {
      console.log("image clicked!")
      // console.log('0. toggleImageState - this.state.imageZoomed: ', this.state.imageZoomed)
      var imageZoomed = this.state.imageZoomed
      imageZoomed = (imageZoomed === false) ? true : false
      console.log('0. toggleImageState - setting state to: ', imageZoomed)
      this.setState({
        imageZoomed: imageZoomed
      });
      var imageClicked = event.target.id
      console.log('calling handleToggleImage with imageZoomed and imageClicked....')
      this.handleToggleImage(imageZoomed, imageClicked)
    }
  }

  handleToggleImage(imageZoomed, imageClicked) {
    console.log('handleToggleImage called...')
    var images = document.getElementsByTagName("img") //an array of our images
    imageClicked = (imageClicked === "imgOne") ? images[0] : images[1]
    console.log('imagedClicked is: ', imageClicked)
    if (imageZoomed === true) { //state hasn't updated yet, so getting this from function above
      imageClicked.classList.remove("figure-image__image")
      imageClicked.classList.add("figure-image__image--zoom")
    }
    else {
      imageClicked.classList.remove("figure-image__image--zoom")
      imageClicked.classList.add("figure-image__image")
    }
  }


  render() {
    console.log('state from BlocksContainer: ', this.state)
    return(
      <div>

        <h1 className="center">
          {/* This is the BlocksContainer. */}
        </h1>

        <TabBlock
          toggleImageState={this.toggleImageState}
        />

      </div>
    )
  }

}
export default BlocksContainer
