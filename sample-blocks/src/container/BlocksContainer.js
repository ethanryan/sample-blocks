import React, {Component} from 'react'

import TabBlock from '../components/TabBlock'

class BlocksContainer extends Component {
  constructor() {
    super()
    this.state = {
      imageClassName: true,
      test: 'hello',
    }
    this.toggleTrueOrFalse = this.toggleTrueOrFalse.bind(this)
    this.toggleImageClassName = this.toggleImageClassName.bind(this)
  }

  toggleTrueOrFalse() {
    var trueOrFalse = (this.state.imageClassName === true) ? false : true
    this.setState({
      imageClassName: trueOrFalse
    });
  }

  toggleImageClassName() {
    // console.log('in TabBlock, props are::::', this.props)
    console.log('check to see if we should toggleImageClassName...')
    var images = document.getElementsByTagName("img") //an array of our images
    console.log('images are: ', images)
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        console.log('image clicked!!!!')
        // console.log('images[i] classList is:::', images[i].classList)
        console.log('images[0] classList is:::', images[0].classList)

        //toggleImageNumberOne...
        if ( images[0].classList[0] === "figure-image__image" ) {
          images[0].classList.remove("figure-image__image")
          images[0].classList.add("figure-image__image--zoom")
        }
        else {
          images[0].classList.remove("figure-image__image--zoom")
          images[0].classList.add("figure-image__image")
        }
      })
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
          // toggleTrueOrFalse={this.toggleTrueOrFalse}
          toggleImageClassName={this.toggleImageClassName}
        />

      </div>
    )
  }

}
export default BlocksContainer
