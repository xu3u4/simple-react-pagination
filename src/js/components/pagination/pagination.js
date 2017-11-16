import React from 'react'
import PropTypes from 'prop-types'

import { createPageArray } from 'js/utils'
import Page from 'js/components/pagination/page'

const Pagination = (props) => {
  const { itemsPerPage, totalItems, handlePageChange, currentPage } = props
  const totalPage = Math.ceil(totalItems / itemsPerPage)
  const pageArray = createPageArray(currentPage, totalPage)

  return (
    <div className="pagination-wrapper">
      <ul className="paginate-bar">
        <Page
          isDisabled={currentPage === 1}
          content='&laquo;'
          pageChange={handlePageChange}
          targetPage={currentPage - 1}
        />
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
        <Page
          isDisabled={currentPage === totalPage}
          content='&raquo;'
          pageChange={handlePageChange}
          targetPage={currentPage + 1}
        />
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
