import React from 'react'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

import { Tab, Image, Modal, Button } from 'semantic-ui-react'

const TabBlock = (props) => {
  console.log('99999999999 -------- TabBlock props: ', props)

  var Parser = require('html-react-parser')

  const jsonArray = [
    { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgOne' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid /><div id='zoomedDivOne' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'> <div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomOne' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' style='cursor: zoom-out; position: absolute; transition: transform 300ms; transform: translate3d(40.3438px, -329px, 0px) scale(1.09492); transform-origin: center center 0px; will-change: transform, top, left; top: 361px; left: 252.156px; width: 619px; height: 380px;'></div>", },


    // { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgOne' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid />", },
    { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
    { menuItem: "Making It Real", pane: "No creative process is truly complete until it manifests a tangible reality. Whether your idea is an action or a physical creation, bringing it to life will likely involve the hard work of iteration, testing, and refinement. <br><br>Just be wary of perfectionism. Push yourself to share your creations with others. By maintaining an open stance, you’ll be able to learn from their feedback. Consider their responses new material that you can draw from the next time you’re embarking on a creative endeavor.", },
    { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgTwo' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid /><div id='zoomedDivTwo' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'><div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomTwo' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' style='cursor: zoom-out; position: absolute; transition: transform 300ms; transform: translate3d(159.844px, -236px, 0px) scale(1.04653); transform-origin: center center 0px; will-change: transform, top, left; top: 263px; left: 248.156px; width: 380px; height: 380px;'></div>", },

    // { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgTwo' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid />", },
    { menuItem: "Have Fun", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", },
    { menuItem: " ", pane: " ", },
    { menuItem: " ", pane: " ??? ", },
  ]

  // const jsonArray = [
  //   { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgOne' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid /><div class='zoomedDiv' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'> <div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' style='cursor: zoom-out; position: absolute; transition: transform 300ms; transform: translate3d(40.3438px, -329px, 0px) scale(1.09492); transform-origin: center center 0px; will-change: transform, top, left; top: 361px; left: 252.156px; width: 619px; height: 380px;'></div>", },
  //   { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
  //   { menuItem: "Making It Real", pane: "No creative process is truly complete until it manifests a tangible reality. Whether your idea is an action or a physical creation, bringing it to life will likely involve the hard work of iteration, testing, and refinement. <br><br>Just be wary of perfectionism. Push yourself to share your creations with others. By maintaining an open stance, you’ll be able to learn from their feedback. Consider their responses new material that you can draw from the next time you’re embarking on a creative endeavor.", },
  //   { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image id='imgTwo' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid /><div class='zoomedDiv' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'><div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' style='cursor: zoom-out; position: absolute; transition: transform 300ms; transform: translate3d(159.844px, -236px, 0px) scale(1.04653); transform-origin: center center 0px; will-change: transform, top, left; top: 263px; left: 248.156px; width: 380px; height: 380px;'></div>", },
  //
  //   { menuItem: "Have Fun", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", },
  //   { menuItem: " ", pane: " ", },
  //   { menuItem: " ", pane: " ??? ", },
  // ]

  const parsedPanes = jsonArray.map( (object, index) => {
    // console.log('TabBlock - object is: ', index, object)
    var newObject = Object.assign({}, object) //cloning each object into a newObject
    // newObject.key = index
    newObject.menuItem = object.menuItem
    newObject.pane = Parser(object.pane) //second key value is parsed
    newObject.id = index //giving each object an id...
    newObject.key = index //giving each object a key...
    ////////trying to add unique key to each child in array so i don't get warning in console...
    // if (newObject.pane instanceof Array) {
    //   console.log('adding keys to array of parsed object...')
    // //   let cascadingMenu = (
    // // <Menu>{items.map((item, key) => <MenuItem key={key}>{item}</MenuItem>)}</Menu> )
    //   newObject.pane = (
    //     newObject.pane.map( (object, index) => {
    //     console.log(`------>>> returning ${object} with div key ${index}`)
    //     // object.key = index
    //     return <div key={index}>{object}</div>
    //     })
    //   )
    // }
    // console.log('TabBlock - newObject is: ', newObject)
    return newObject
  })
  // console.log('TabBlock - jsonArray is::::: ', jsonArray)
  console.log('0. TabBlock - parsedPanes is::::: ', parsedPanes)







  function getMenuItems() {
    var items = document.getElementsByClassName("item")
    return items
  }

  function getChevrons() {
    var chevrons = document.getElementsByClassName("chevron-icon")
    return chevrons
  }

  function getImages() {
    var images = document.getElementsByTagName("img")
    return images
  }

  function clickedLeftChevron() {
    // console.log('left chevron clicked...')
    var items = getMenuItems()
    var firstItem = items[0]
    firstItem.scrollIntoView({behavior: "smooth"})
    hideChevronLeft()
  }

  function clickedRightChevron() {
    // console.log('right chevron clicked...')
    var items = getMenuItems()
    var lastItem = items[items.length - 1]
    lastItem.scrollIntoView({behavior: "smooth"})
    hideChevronRight()
  }


  function showChevrons() { //conditonally show chevrons, based on where the mouse is in the menu scroll...
    console.log('check to see if we should showChevrons...')
    var items = getMenuItems()
    var chevrons = getChevrons()
    //show both chevrons on mouseover of menu items...
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseover", function() {
        showBothChevrons()
      })
    }
    //show chevrons when chevrons are hovered over as well...
    for (var j = 0; j < chevrons.length; j++) {
      chevrons[j].addEventListener("mouseover", function() {
        showBothChevrons()
      })
    }
  }


  function hideChevrons() {
    console.log('no longer hovering over blocks-tabs__wrapper div, so hideChevrons called...')
    //hideBothChevrons() //can i just call this???
    var items = getMenuItems()
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseleave", function() { //mouseover or mouseleave????
        hideBothChevrons()
      })
    }
  }


  function showBothChevrons() {
    console.log('showBothChevrons called...!!!!!')
    showChevronLeft()
    showChevronRight()
  }

  function showChevronLeft() {
    var chevrons = getChevrons()
    var items = getMenuItems()
    var firstItem = items[0]
    var firstItemPosition = firstItem.getBoundingClientRect()
    console.log('------firstItemPosition is: ', firstItemPosition)
    console.log('firstItemPosition.x is: ', firstItemPosition.x)
    if (firstItemPosition.x > 204) { //do this by 18% instead of pixels??? pixels will change with resizing window...
      hideChevronLeft()
    } else {
      chevrons[0].classList.remove("hidden")
    }
  }

  function showChevronRight() {
    var chevrons = getChevrons()
    var items = getMenuItems()
    var lastItem = items[items.length - 1]
    var lastItemPosition = lastItem.getBoundingClientRect()
    console.log('lastItemPosition.x is: ', lastItemPosition.x)
    if (lastItemPosition.x < 635) {
      hideChevronRight()
    } else {
      chevrons[1].classList.remove("hidden")
    }
  }


  function hideBothChevrons() {
    console.log('hideBothChevrons called...!!!!!')
    hideChevronLeft()
    hideChevronRight()
  }

  function hideChevronLeft() {
    var chevrons = getChevrons()
    chevrons[0].classList.add("hidden")
  }

  function hideChevronRight() {
    var chevrons = getChevrons()
    chevrons[1].classList.add("hidden")
  }



  return (
    <div className="tab-block">

      <h2 className="brand--head">Tab Block</h2>

      {/* <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' />
        modal image here
      </Modal.Content>
    </Modal> */}

    <div className="blocks-tabs__wrapper">
      <FontAwesomeIcon
        icon={Icons.faChevronLeft}
        onClick={() => clickedLeftChevron()}
        className="chevron-icon hidden"
        size="4x"
      />

      <FontAwesomeIcon
        icon={Icons.faChevronRight}
        onClick={() => clickedRightChevron()}
        className="chevron-icon hidden chevron-icon__right"
        size="4x"
      />

      <Tab
        menu={{attached: true, tabular: false}}
        panes={parsedPanes}
        renderActiveOnly={false}
        onMouseEnter={() => showChevrons()}
        onMouseLeave={() => hideChevrons()}
        onClick={props.toggleImageState}
        // onClick={function(e){console.log(e.target, e.currentTarget);}}
      />
    </div>

  </div>
)
}

export default TabBlock
