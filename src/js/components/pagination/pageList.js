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
        <Page
          customClass="paginate-arrow icon-angle-double-left"
          isDisabled={currentPage === 1}
          pageChange={handlePageChange}
          targetPage={1}
        />
        <Page
          customClass="paginate-arrow icon-angle-left"
          isDisabled={currentPage === 1}
          pageChange={handlePageChange}
          targetPage={currentPage - 1}
        />
        { pageArray.map((page, i) => (
          <Page
            key={i}
            isDisabled={currentPage === page}
            isActive={currentPage === page}
            content={page.toString()}
            pageChange={handlePageChange}
            targetPage={isNaN(page) ? null : page}
          />
        )) }
        <Page
          customClass="paginate-arrow icon-angle-right"
          isDisabled={currentPage === totalPage}
          pageChange={handlePageChange}
          targetPage={currentPage + 1}
        />
        <Page
          customClass="paginate-arrow icon-angle-double-right"
          isDisabled={currentPage === totalPage}
          pageChange={handlePageChange}
          targetPage={totalPage}
        />
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
