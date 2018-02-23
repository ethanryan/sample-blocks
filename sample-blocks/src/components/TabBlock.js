import React from 'react'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

import { Tab } from 'semantic-ui-react'

var Parser = require('html-react-parser')

const jsonArray = [
// const panes = [
//   { menuItem: 'Embracing Discovery', render: () =>
//   <Tab.Pane>Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.
//     <Image
//       tabindex="0"
//       src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif'
//       className="figure-image__image"
//     />
// </Tab.Pane>
// },
  { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' fluid />", },
  { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
  { menuItem: "Making It Real", pane: "No creative process is truly complete until it manifests a tangible reality. Whether your idea is an action or a physical creation, bringing it to life will likely involve the hard work of iteration, testing, and refinement. <br><br>Just be wary of perfectionism. Push yourself to share your creations with others. By maintaining an open stance, you’ll be able to learn from their feedback. Consider their responses new material that you can draw from the next time you’re embarking on a creative endeavor.", },
  { menuItem: "Love The Work", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <br><br><Image className='figure-image__image' src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png' fluid />", },
  { menuItem: "Have Fun", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", },
  { menuItem: " ", pane: " ", },

  // { menuItem: "Tab 4", pane: "Tab 4 Content is right here mofooooo", image: "https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif" },
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
  console.log('TabBlock - newObject is: ', newObject)
  return newObject
})
// console.log('TabBlock - jsonArray is::::: ', jsonArray)
console.log('0. TabBlock - parsedPanes is::::: ', parsedPanes)

function getItems() {
  var items = document.getElementsByClassName("item")
  return items
}

function clickedLeftChevron() {
  // console.log('left chevron clicked...')
  var items = getItems()
  // console.log('items is:', items)
  var firstItem = items[0]
  // console.log('firstItem is: ', firstItem)
  firstItem.scrollIntoView({behavior: "smooth"})
}

function clickedRightChevron() {
  // console.log('right chevron clicked...')
  var items = getItems()
  // console.log('items is:', items)
  var lastItem = items[items.length - 1]
  // console.log('lastItem is: ', lastItem)
  lastItem.scrollIntoView({behavior: "smooth"})
}


function hideChevrons() {
  console.log('hideChevrons called...')
  var items = getItems()
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
        hideIt()
    })
  }
}


function hideIt() {
  console.log('hideIt called...!!!!!')
}


const TabBlock = () => (

  <div>
  <div className="tab-block">

    <h2>Tab Block</h2>

    <FontAwesomeIcon
      icon={Icons.faChevronLeft}
      onClick={() => clickedLeftChevron()}
      className="chevron-icon"
      size="4x"
    />

    <FontAwesomeIcon
      icon={Icons.faChevronRight}
      onClick={() => clickedRightChevron()}
      className="chevron-icon chevron-icon__right"
      size="4x"
    />

    {/* <ReactComponent
        onMouseEnter={this.someHandler}
        onMouseLeave={this.someOtherHandler}
    /> */}

    {/* <ul>
        {this.state.letters.map(letter =>
          <li key={letter} data-letter={letter} onClick={this.handleClick}>
            {letter}
          </li>
        )}
      </ul> */}

    <div className="blocks-tabs__wrapper">
      <Tab
        menu={{attached: true, tabular: false}}
        panes={parsedPanes}
        renderActiveOnly={false}
        onMouseEnter={() => hideChevrons()}
      />
    </div>

  </div>


  <br></br>
  <br></br>
  <br></br>
  <br></br>


  {/* <div>
      <div className="tab-block">

      <div className="blocks-tabs__wrapper">
        <Tab>
        {parsedPanes.map(object =>
          <div>

        <div key={object}>
          {object.menuItem}>
        </div>
        <div>
          {object.pane.map(eachPane =>
          <div key={eachPane}>
            {eachPane}
          </div>
          )}
        </div>

      </div>
      )}
      </Tab>
      </div>
      </div>
    </div> */}

  </div>
)

export default TabBlock
