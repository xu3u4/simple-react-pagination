import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { createPageArray } from 'js/utils'
import Page from 'js/components/pagination/page'

const Pagination = (props) => {
  const {
    paginate: {
      itemsPerPage, total
    },
    handlePageChange
  } = props

  const currentPage = parseInt(queryString.parse(location.search).p) || 1
  const totalPage = Math.ceil(total / itemsPerPage)
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
  paginate: PropTypes.shape({
    itemsPerPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  handlePageChange: PropTypes.func.isRequired
}

export default Pagination
