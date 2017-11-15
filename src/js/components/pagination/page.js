import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Page = (props) => {
  const { isDisabled, isActive, content, pageChange, targetPage } = props
  const pageClasses = classnames({
    'disabled_paginate': isDisabled,
    'active_page': isActive
  })

  return (
    <li className={pageClasses} onClick={() => pageChange(targetPage, isDisabled)}>
      {content}
    </li>
  )
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
