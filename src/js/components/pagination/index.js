import React, { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { updateQueryString } from 'js/utils'
import Pagination from 'js/components/pagination/pagination'

class PagesContainer extends Component {
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.state = {
      currentPage: parseInt(queryString.parse(location.search).p) || 1
    }
  }

  changePage (p, disableClick) {
    if (disableClick) return false
    updateQueryString({p}, this.props.reloadPage)
    if (this.props.changePageCB) {
      this.props.changePageCB(p)
    }
    this.setState({
      currentPage: p
    })
  }

  render () {
    const { itemsPerPage, totalItems } = this.props

    return (
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        handlePageChange={this.changePage}
        currentPage={this.state.currentPage}
      />
    )
  }
}

PagesContainer.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  changePageCB: PropTypes.func,
  reloadPage: PropTypes.bool
}

PagesContainer.defaultProps = {
  itemsPerPage: 1,
  reloadPage: true
}

export default PagesContainer
