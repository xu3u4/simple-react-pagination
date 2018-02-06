import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const NaviArrow = (props) => {
  const { isDisabled, content, pageChange, targetPage } = props
  const iconClass = `icon-${content}`

  if (isDisabled) return <li className={`is-disabled ${iconClass}`}></li>
  return <li className={iconClass} onClick={() => pageChange(targetPage)}></li>
}

NaviArrow.propTypes = {
  isDisabled: PropTypes.bool,
  content: PropTypes.string.isRequired,
  pageChange: PropTypes.func.isRequired,
  targetPage: PropTypes.number
}

NaviArrow.defaultProps = {
  isDisabled: false
}

export default NaviArrow