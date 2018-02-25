import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isEmptyString } from 'utils'

const Page = (props) => {
  const {
    isDisabled,
    isActive,
    content,
    pageChange,
    targetPage,
    customClass
  } = props
  const buttonClass = classnames(customClass,
    {
      'native-paginate': isEmptyString(customClass),
      'is-disabled': isDisabled,
      'is-active': isActive
    }
  )

  return (
    <li>
      <button
        className={buttonClass}
        disabled={isDisabled || isActive}
        onClick={() => pageChange(targetPage)}
      >
        {content}
      </button>
    </li>
  )
}

Page.propTypes = {
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  content: PropTypes.string,
  pageChange: PropTypes.func.isRequired,
  targetPage: PropTypes.number,
  customClass: PropTypes.string
}

Page.defaultProps = {
  isDisabled: false,
  isActive: false,
  customClass: '',
  content: ''
}

export default Page
