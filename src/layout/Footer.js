import React from 'react'
import Fade from 'react-reveal/Fade'

const today = new Date()

const Footer = props => {
  return (
    <Fade>
      <div className="footer">
        &copy; {today.getFullYear()} Your Name
      </div>
    </Fade>
  )
}

export default Footer
