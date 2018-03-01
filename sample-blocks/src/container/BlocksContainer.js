import React, {Component} from 'react'

import TabBlock from '../components/TabBlock'

class BlocksContainer extends Component {
  constructor() {
    super()
    this.state = {
      imageZoomed: false,
    }
    this.toggleImageState = this.toggleImageState.bind(this)
    this.getJsonArray = this.getJsonArray.bind(this)
  }

  getJsonArray() {
    const jsonArray = [
      { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.<br><br><Image id='imgOne' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid /><div id='zoomedDivOne' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'> <div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomOne' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif'></div>", },
      { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
      { menuItem: "Making It Real", pane: "No creative process is truly complete until it manifests a tangible reality. Whether your idea is an action or a physical creation, bringing it to life will likely involve the hard work of iteration, testing, and refinement.<br><br>Just be wary of perfectionism. Push yourself to share your creations with others. By maintaining an open stance, you’ll be able to learn from their feedback. Consider their responses new material that you can draw from the next time you’re embarking on a creative endeavor.", },
      { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.<br><br><Image id='imgTwo' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid /><div id='zoomedDivTwo' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'><div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomTwo' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png'>", },
      { menuItem: "Have Fun", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", },
      { menuItem: " ", pane: " ", },
    ]
    return jsonArray
  }

  toggleImageState(event) {
    // console.log('0. toggleImageState called...')
    // console.log('0. toggleImageState - event.target is: ', event.target)
    // console.log('0. toggleImageState - event.target.tagName is: ', event.target.tagName)
    // console.log('0. toggleImageState - event.target.id is: ', event.target.id)
    if (event.target.tagName === 'IMG') { //filtering for images getting clicked...
      // console.log("image clicked!")
      // console.log('0. toggleImageState - this.state.imageZoomed: ', this.state.imageZoomed)
      var imageZoomed = this.state.imageZoomed
      imageZoomed = (imageZoomed === false) ? true : false
      // console.log('0. toggleImageState - setting state to: ', imageZoomed)
      this.setState({
        imageZoomed: imageZoomed
      });
      var imageClicked = event.target.id
      // console.log('imagedClicked is:', imageClicked)
      // console.log('calling handleToggleImage with imageZoomed and imageClicked....')
      this.handleToggleImage(imageZoomed, imageClicked)
    }
  }

  handleToggleImage(imageZoomed, imageClicked) {
    // console.log('handleToggleImage called...')
    var zoomedDivOne = document.getElementById("zoomedDivOne")
    var zoomedDivTwo = document.getElementById("zoomedDivTwo")
    if (imageZoomed === true) { //state hasn't updated yet, so getting this from function above
    // console.log('removing display-none from zoomedDiv...')
      zoomedDivOne.classList.remove("display-none")
      zoomedDivTwo.classList.remove("display-none")
    } else {
      // console.log('adding display-none to zoomedDiv...')
      zoomedDivOne.classList.add("display-none")
      zoomedDivTwo.classList.add("display-none")
    }
  }


  render() {
    // console.log('state from BlocksContainer: ', this.state)
    return(
      <div>

        <h1 className="center">
          {/* This is the BlocksContainer. */}
        </h1>

        <TabBlock
          toggleImageState={this.toggleImageState}
          jsonArray={this.getJsonArray}
        />

      </div>
    )
  }

}
export default BlocksContainer
