import React, {Component} from 'react'

import TabBlock from '../components/TabBlock'

class BlocksContainer extends Component {
  constructor() {
    super()
    this.state = {
      // imageClassName: true,
      test: 'hello',
      imageZoomed: false,
    }
    // this.toggleTrueOrFalse = this.toggleTrueOrFalse.bind(this)
    this.toggleImageClassName = this.toggleImageClassName.bind(this)
    // this.onClick = this.handleClick.bind(this)
    // this.youClicked = this.youClicked.bind(this)
  }

  // handleClick = (element) => {
  //   // console.log(e.target.value, data)
  //   // var element = document.getElementById('imgOne')
  //   console.log('element clicked is: ', element)
  // }

  // youClicked = (event) => {
  //   console.log('****** >>> youClicked: ', event.target, event.currentTarget)
  // }

  // toggleTrueOrFalse() {
  //   var trueOrFalse = (this.state.imageClassName === true) ? false : true
  //   this.setState({
  //     imageClassName: trueOrFalse
  //   });
  // }

  toggleImageClassName(event, data) {
    // console.log('in TabBlock, props are::::', this.props)
    console.log('0. toggleImageClassName - this.state.imageZoomed: ', this.state.imageZoomed)
    console.log('0. toggleImageClassName called...')
    var images = document.getElementsByTagName("img") //an array of our images
    console.log('0. images are: ', images)

    // for (var i = 0; i < items.length; i++) {
    //   items[i].addEventListener("mouseover", function() {
    //     showBothChevrons()
    //   })
    // }

    var imageClicked = data
    console.log('000. imageClicked is: ', imageClicked);

    var imageZoomed = (this.state.imageZoomed === false) ? true : false
    console.log('0. toggleImageClassName - imageZoomed: ', imageZoomed)
    console.log('0. toggleImageClassName - setting state to: ', imageZoomed)

    this.setState({
      imageZoomed: imageZoomed
    });
    this.toggleImageNumberOne(imageZoomed)
  }

  toggleImageNumberOne(imageZoomed) {
    console.log('toggleImageNumberOne called...')
    var images = document.getElementsByTagName("img") //an array of our images
    var imageZoomed = imageZoomed
      // if ( this.state.imageZoomed === true ) { //state isn't updated yet, so doing below instead...
      if ( imageZoomed === true ) {
        images[0].classList.remove("figure-image__image")
        images[0].classList.add("figure-image__image--zoom")
      }
      else {
        images[0].classList.remove("figure-image__image--zoom")
        images[0].classList.add("figure-image__image")
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
          toggleImageClassName={this.toggleImageClassName}
          // handleClick={this.youClicked}
          // imageZoomed={this.state.imageZoomed}
        />

      </div>
    )
  }

}
export default BlocksContainer
