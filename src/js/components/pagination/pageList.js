import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { createPageArray, isEmptyString } from 'js/utils'
import Page from 'js/components/pagination/page'

const PageList = (props) => {
  const {
    itemsPerPage,
    totalItems,
    handlePageChange,
    currentPage,
    paginateClass,
    arrowClass
  } = props
  const totalPage = Math.ceil(totalItems / itemsPerPage)
  const pageArray = createPageArray(currentPage, totalPage)
  const customArrow = classnames(arrowClass, {
    'paginate-arrow': isEmptyString(arrowClass)
  })

  return (
    <div className="pagination-wrapper">
      <ul className="paginate-bar">
        <Page
          customClass={`icon-angle-double-left ${customArrow}`}
          isDisabled={currentPage === 1}
          pageChange={handlePageChange}
          targetPage={1}
        />
        <Page
          customClass={`icon-angle-left ${customArrow}`}
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
            customClass={paginateClass}
          />
        )) }
        <Page
          customClass={`icon-angle-right ${customArrow}`}
          isDisabled={currentPage === totalPage}
          pageChange={handlePageChange}
          targetPage={currentPage + 1}
        />
        <Page
          customClass={`icon-angle-double-right ${customArrow}`}
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
  currentPage: PropTypes.number.isRequired,
  paginateClass: PropTypes.string.isRequired,
  arrowClass: PropTypes.string.isRequired
}

export default PageList
