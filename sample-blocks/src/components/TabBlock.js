import React from 'react'
// import React, {Component} from 'react'

import { Tab } from 'semantic-ui-react'

const panes = [
  {menuItem: 'Tab1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  {menuItem: 'Tab2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  {menuItem: 'Tab3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabBlock = () => (
  <Tab panes={panes} />
)

// class TabBlock extends Component {
//   constructor() {
//     super()
//     this.state = {
//     }
//   }
//
//   render() {
//     return(
//       <h1>
//         this is the TabBlock.
//       </h1>
//     )
//   }
//
// }
export default TabBlock
