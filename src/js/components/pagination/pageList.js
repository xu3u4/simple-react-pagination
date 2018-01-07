import React from 'react'
import PropTypes from 'prop-types'

import { createPageArray } from 'js/utils'
import Page from 'js/components/pagination/page'

const PageList = (props) => {
  const { itemsPerPage, totalItems, handlePageChange, currentPage } = props
  const totalPage = Math.ceil(totalItems / itemsPerPage)
  const pageArray = createPageArray(currentPage, totalPage)

  return (
    <div className="pagination-wrapper">
      <ul className="paginate-bar">
        <li onClick={() => handlePageChange(currentPage - 1)}>Prev</li>
        { pageArray.map((page, i) => (
          <Page
            key={i}
            isDisabled={currentPage === page || isNaN(page)}
            isActive={currentPage === page}
            content={page.toString()}
            pageChange={handlePageChange}
            targetPage={isNaN(page) ? null : page}
          />
        )) }
        <li onClick={() => handlePageChange(currentPage + 1)}>Next</li>
      </ul>
    </div>
  )
}

PageList.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default PageList
