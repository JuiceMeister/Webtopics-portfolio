import React from 'react'
import PropTypes from 'prop-types';
import './DarkmodeButton.css'

export const DarkmodeButton = ({backgroundLight, backgroundDark}) => {
const styleNotChecked = {
    backgroundColor: backgroundLight
}

const styleChecked = {
    backgroundColor: backgroundDark
}

  return (
    <label aria-label="Knop om dark mode in -en uit te schakelen" style={styleNotChecked}>
          <span class="darkModeThema">Thema</span>
          <span class="darkModeContainer" tabindex="0">
            <input type="checkbox" id="darkModeCheckBox"/>
            <span class="check" id="check"></span>
          </span>
         
        </label>
  )
}

// DarkmodeButton.PropTypes = {
//     backgroundLight: PropTypes.string,
//     backgroundDark: PropTypes.string
// }

export default DarkmodeButton
