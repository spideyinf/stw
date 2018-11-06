import React, { Component } from 'react'
import { Toggle } from './style'

export class LandingButton extends Component {
  render() {
    return (
      <Toggle>
        <input type="radio" id="choice1" name="choice" value="creative" />
        <label for="choice1">Desinger</label>

        <input type="radio" id="choice2" name="choice" value="productive" />
        <label for="choice2">Coder</label>
        <div id="flap">
          <span className="content"></span>
        </div>
      </Toggle>
    )
  }
}

export default LandingButton
