import React from 'react'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

import { Tab } from 'semantic-ui-react'
var Parser = require('html-react-parser')
require('typeface-merriweather')


const TabBlock = (props) => {
  console.log('--------TabBlock props: ', props)

  // const parsedPanes = jsonArray.map( (object, index) => { //moved jsonArray to container...
  const parsedPanes = props.jsonArray().map( (object, index) => {
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
