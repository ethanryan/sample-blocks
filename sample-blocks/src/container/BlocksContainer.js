import React, {Component} from 'react'

import TabBlock from '../components/TabBlock'

class BlocksContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return(
      <div>

        <h1 className="center">
          {/* This is the BlocksContainer. */}
        </h1>

        <TabBlock />

      </div>
    )
  }

}
export default BlocksContainer
