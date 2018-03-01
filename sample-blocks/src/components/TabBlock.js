import React from 'react'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

import { Tab } from 'semantic-ui-react'
var Parser = require('html-react-parser')
require('typeface-merriweather')


const TabBlock = (props) => {
  // console.log('TabBlock props: ', props)

  const jsonArray = [
    { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.<br><br><Image id='imgOne' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid /><div id='zoomedDivOne' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'> <div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomOne' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif'></div>", },
    { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
    { menuItem: "Making It Real", pane: "No creative process is truly complete until it manifests a tangible reality. Whether your idea is an action or a physical creation, bringing it to life will likely involve the hard work of iteration, testing, and refinement.<br><br>Just be wary of perfectionism. Push yourself to share your creations with others. By maintaining an open stance, you’ll be able to learn from their feedback. Consider their responses new material that you can draw from the next time you’re embarking on a creative endeavor.", },
    { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.<br><br><Image id='imgTwo' className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid /><div id='zoomedDivTwo' class='display-none' style='position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 999;'><div style='position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 300ms;'></div><img id='imgZoomTwo' class='figure-image__image--zoom' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png'>", },
    { menuItem: "Have Fun", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", },
    { menuItem: " ", pane: " ", },
  ]


  const parsedPanes = jsonArray.map( (object, index) => {
    // console.log('TabBlock - object is: ', index, object)
    var newObject = Object.assign({}, object) //cloning each object into a newObject
    // newObject.key = index
    newObject.menuItem = object.menuItem
    newObject.pane = Parser(object.pane) //second key value is parsed
    newObject.id = index //giving each object an id...
    newObject.key = index //giving each object a key...
    ////////trying to add unique key to each child in array so i don't get warning in console...
    // console.log('TabBlock - newObject is: ', newObject)
    return newObject
  })
  // console.log('TabBlock - jsonArray is::::: ', jsonArray)
  // console.log('0. TabBlock - parsedPanes is::::: ', parsedPanes)


  function getMenuItems() {
    var items = document.getElementsByClassName("item")
    return items
  }

  function getChevrons() {
    var chevrons = document.getElementsByClassName("chevron-icon")
    return chevrons
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
    // console.log('check to see if we should showChevrons...')
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
    // console.log('no longer hovering over blocks-tabs__wrapper div, so hideChevrons called...')
    var items = getMenuItems()
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseleave", function() {
        hideBothChevrons()
      })
    }
  }


  // working on this
  // working on this
  // working on this
  // working on this
  // function styleItemGradients() {
  //   console.log('styleItemGradients called !!!!!!!')
  //   var anchors = document.getElementsByTagName('a')
  //   console.log('anchors is: ', anchors)
  //   var rightAnchor = anchors[anchors.length - 1]
  //   console.log('rightAnchor is: ', rightAnchor)
  //
  //   var items = getMenuItems()
  //   var lastItem = items[items.length - 1]
  //   var lastItemPosition = lastItem.getBoundingClientRect()
  //   console.log('lastItemPosition is: ', lastItemPosition)
  //
  //   var rightLimit = lastItemPosition.width + lastItemPosition.x
  //   console.log('rightLimit is: ', rightLimit)
  //   var windowWidth = window.innerWidth
  //   var rightSide = windowWidth - (windowWidth * .13)
  //
  //   for (var i = 0; i < anchors.length; i++) {
  //     if (rightLimit < rightSide) {
  //       anchors[i].classList.remove('gradient-right')
  //     } else {
  //       anchors[i].classList.add('gradient-right')
  //     }
  //   }
  // }

  function showBothChevrons() {
    // console.log('showBothChevrons called...!!!!!')
    var mySVG = document.getElementsByClassName('chevron-icon');
    // console.log('mySVG is: ', mySVG)
    mySVG[0].setAttribute("viewBox", "0 0 500 512");
    mySVG[1].setAttribute("viewBox", "0 0 500 512");
    // mySVG[1].setAttribute("viewBox", "0 0 300 512");
    //viewBox, min-x min-y width height
    showChevronLeft()
    showChevronRight()
  }

  function showChevronLeft() {
    var chevrons = getChevrons()
    var items = getMenuItems()
    var firstItem = items[0]
    var firstItemPosition = firstItem.getBoundingClientRect()
    // console.log('firstItemPosition is: ', firstItemPosition)
    // console.log('00. firstItemPosition.x is: ', firstItemPosition.x)
    var windowWidth = window.innerWidth
    // console.log('11. windowWidth is: ', windowWidth)
    var leftSide = windowWidth * .135
    // console.log('22. leftSide is: ', leftSide)
    if (firstItemPosition.x > leftSide) {
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
    // console.log('0. lastItemPosition is: ', lastItemPosition)
    // console.log('0. lastItemPosition.x is: ', lastItemPosition.x)
    // console.log('0. lastItemPosition.width is: ', lastItemPosition.width)
    var limit = lastItemPosition.width + lastItemPosition.x
    // console.log('0. limit (x + width) is: ', limit)
    var windowWidth = window.innerWidth
    // console.log('1. windowWidth is: ', windowWidth)
    var rightSide = windowWidth - (windowWidth * .13)
    // console.log('2. rightSide is: ', rightSide)
    if (limit < rightSide) {
      hideChevronRight()
    } else {
      chevrons[1].classList.remove("hidden")
    }
  }


  function hideBothChevrons() {
    // console.log('hideBothChevrons called...!!!!!')
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
    <div className="tab-block"
      // onMouseEnter={() => styleItemGradients()}
      >

        <h2 className="brand--head">Tab Block</h2>

        <div className="blocks-tabs">
          <div className="blocks-tabs__wrapper">
            <FontAwesomeIcon
              icon={Icons.faChevronLeft}
              onClick={() => clickedLeftChevron()}
              className="chevron-icon hidden"
            />

            <FontAwesomeIcon
              icon={Icons.faChevronRight}
              onClick={() => clickedRightChevron()}
              className="chevron-icon hidden chevron-icon__right"
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

      </div>
    )
  }

  export default TabBlock
