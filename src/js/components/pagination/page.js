import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Page = (props) => {
  const { isDisabled, isActive, content, pageChange, targetPage } = props
  const statusClass = classnames('is-disabled', { 'is-active': isActive })

  if (isDisabled || isActive) return <li className={statusClass}>{content}</li>
  return <li onClick={() => pageChange(targetPage)}>{content}</li>
}

Page.propTypes = {
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  content: PropTypes.string.isRequired,
  pageChange: PropTypes.func.isRequired,
  targetPage: PropTypes.number
}

Page.defaultProps = {
  isDisabled: false,
  isActive: false
}

export default Page
