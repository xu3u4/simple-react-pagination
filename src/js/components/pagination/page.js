import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Page = (props) => {
  const { isDisabled, isActive, content, pageChange, targetPage } = props
  const buttonClass = classnames('native-paginate',
    {
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
  content: PropTypes.string.isRequired,
  pageChange: PropTypes.func.isRequired,
  targetPage: PropTypes.number
}

Page.defaultProps = {
  isDisabled: false,
  isActive: false
}

export default Page
