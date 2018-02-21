import React from 'react'

import { Tab, Menu, Image } from 'semantic-ui-react'

const panes = [
//   { menuItem: 'Embracing Discovery', render: () =>
//   <Tab.Pane>Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.
//     <Image
//       tabindex="0"
//       src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif'
//       className="figure-image__image"
//     />
// </Tab.Pane>
// },
  { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", image: "https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif", },
  // { menuItem: "Embracing Discovery", pane: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work." },
  { menuItem: "Tab 2", pane: "Tab 2 Content is right here 222", },
  { menuItem: "Tab 3", pane: "Tab 3 Content is right here 333", },
  { menuItem: "Tab 4", pane: "Tab 3 Content is right here 444 w image::: <br><Image src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif' />", },
  // { menuItem: "Tab 4", pane: "Tab 4 Content is right here mofooooo", image: "https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif" },
]

// function parsePanes(jsonArray) {
//   return jsonArray.map(object =>
//     <div>
//       <Menu.Item>{object.menuItem}</Menu.Item>
//       <Tab.Pane>{object.pane}</Tab.Pane>
//       <Image src={object.image} />
//     </div>
//   )
// }

// var x = parsePanes(panes)

const TabBlock = () => (
  <Tab panes={panes} renderActiveOnly={false} />
  // <Tab panes={panes} />
  /* <Tab panes={parsePanes(panes)} /> */
  // <Tab panes={x} />
)

// const TabBlock = () => {
//   return (
//     <div>
//       <Tab panes={x} />
//     </div>
//   )
// }

// const TabBlock = (props) => {
//   return (
//     <div>
//       {parsePanes(panes)}
//     </div>
//   )
// }



export default TabBlock
