import React from 'react'

import { Tab, Image } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Embracing Discovery', render: () =>
  <Tab.Pane>
    Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.
    <Image
      tabindex="0"
      src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif'
      className="figure-image__image"
      // src='/assets/images/wireframe/image.png'
    // size='small'
  />
  </Tab.Pane>
},
{ menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabBlock = () => (
  <Tab panes={panes} />
)



export default TabBlock
