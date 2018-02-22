import React from 'react'

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
  { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work. <Image src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' />", },
  // { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work." },
  { menuItem: "Gaining Insight", pane: "To spark creativity, feed your brain material like you're cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. <br></br>It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.", },
  { menuItem: "Tab 3", pane: "Tab 3 Content is right here 333", },
  { menuItem: "Tab 4", pane: "Tab 3 Content is right here 444 w image::: <Image src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' />", },
  { menuItem: "Tab 5", pane: "Tab 3 Content is right here 555", },
  // { menuItem: "Tab 4", pane: "Tab 4 Content is right here mofooooo", image: "https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif" },
]


const parsedPanes = jsonArray.map( (object, index) => {
  console.log('TabBlock - object is: ', index, object)
  var newObject = Object.assign({}, object)
  // newObject.key = index
  newObject.pane = Parser(object.pane) //second key value is parsed
  ////////trying to add unique key to each child in array so i don't get warning in console...
  // if (newObject.pane instanceof Array) {
  //   console.log('adding keys to array of parsed object...')
  //   newObject.pane = newObject.pane.map( (object, index) => {
  //     console.log(`------returning ${object} with div key ${index}`)
  //     return <div key={index}>{object}</div>
  //   })
  // }
  // console.log('TabBlock - newObject is: ', newObject)
  return newObject
})

console.log('TabBlock - jsonArray is::::: ', jsonArray)
console.log('TabBlock - parsedPanes is::::: ', parsedPanes)


// const TabBlock = () => (
//   <div>
//     <Tab panes={parsedPanes} renderActiveOnly={false} />
//   </div>
// )
const TabBlock = () => (
  <div>
    <h2>Tab Block</h2>
    
    <Tab panes={parsedPanes} renderActiveOnly={false} />
  </div>
)

export default TabBlock
