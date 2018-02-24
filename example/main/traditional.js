import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'js/components/pagination'
import { getUrlParams } from './utils'

const Traditional = ({items}) => {
  const currentPage = parseInt(getUrlParams().page, 10) || 1
  const item = items[ currentPage - 1]
  const itemsPerPage = 1, totalItems = items.length

  return (
    <div className="block">
      <div className="mode-name">Reload after page change</div>
      <div>Current page: {item}</div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  )
}

Traditional.propTypes = {
  items: PropTypes.array.isRequired
}

export default Traditional
