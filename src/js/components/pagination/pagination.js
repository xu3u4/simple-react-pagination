import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import queryString from 'query-string'

import { createPageArray } from 'js/utils'

const Pagination = (props) => {
  const {
    paginate: {
      items_per_page, total
    },
    handleChangePage
  } = props

  const currentPage = parseInt(queryString.parse(location.search).p) || 1
  const totalPage = Math.ceil(total / items_per_page)
  const pageArray = createPageArray(currentPage, totalPage)

  const renderPages = (page, i) => {
    if (currentPage === page) return <li className="disabled_paginate" key={i}>{page}</li>
    return <li onClick={() => handleChangePage(page)} key={i}>{page}</li>
  }
  const naviPageClass = {

  }

  return (
    <div className="pagination-wrapper">
      <ul className="paginate-bar">
        <li
          className="paginate-leftarrow"
          onClick={() => handleChangePage(currentPage - 1, currentPage === 1)}
        >
          &laquo;
        </li>
        {pageArray.map(renderPages) }
        <li
          className="paginate-rightarrow"
          onClick={() => handleChangePage(currentPage + 1, currentPage === totalPage)}
        >
          &raquo;
        </li>
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.shape({
    items_per_page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  handleChangePage: PropTypes.func.isRequired
}

export default Pagination
