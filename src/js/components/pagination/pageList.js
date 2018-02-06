import React from 'react'
import PropTypes from 'prop-types'

import { createPageArray } from 'js/utils'
import Page from 'js/components/pagination/page'
import NaviArrow from 'js/components/pagination/naviArrow'

const PageList = (props) => {
  const { itemsPerPage, totalItems, handlePageChange, currentPage } = props
  const totalPage = Math.ceil(totalItems / itemsPerPage)
  const pageArray = createPageArray(currentPage, totalPage)

  return (
    <div className="pagination-wrapper">
      <ul className="paginate-bar">
        <NaviArrow
          isDisabled={currentPage === 1}
          content="angle-double-left"
          pageChange={handlePageChange}
          targetPage={1}
        />
        <NaviArrow
          isDisabled={currentPage === 1}
          content="angle-left"
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
        <NaviArrow
          isDisabled={currentPage === totalPage}
          content="angle-right"
          pageChange={handlePageChange}
          targetPage={currentPage + 1}
        />
        <NaviArrow
          isDisabled={currentPage === totalPage}
          content="angle-double-right"
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
