import React from 'react'
import PropTypes from 'prop-types'

function Layout(props) {
  return (
    <div>
      
    </div>
  )
}

Layout.propTypes = {
    main_frame:PropTypes.string,
    vid_frame:PropTypes.string,
    chat_frame:PropTypes.string,
    alert1_frame:PropTypes.string,
    alert2_frame:PropTypes.string,
    alert3_frame:PropTypes.string,
    label1_frame:PropTypes.string,
    label2_frame:PropTypes.string,
    label3_frame:PropTypes.string,
}

Layout.defaultProps = {
    main_frame: "",
    vid_frame:"",
    chat_frame:"",
    alert1_frame:"",
    alert2_frame:"",
    alert3_frame:"",
    label1_frame:"",
    label2_frame:"",
    label3_frame:"",
}

export default Layout
