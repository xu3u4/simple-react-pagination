import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getUrlParams, urlUpdateParams } from 'js/utils'
import PageList from './pageList'

export default class Pagination extends Component {
  static defaultProps = {
    itemsPerPage: 1,
    reloadPage: true,
    paginateClass: '',
    arrowClass: ''
  }

  static propTypes = {
    itemsPerPage: PropTypes.number,
    totalItems: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
    reloadPage: PropTypes.bool,
    paginateClass: PropTypes.string,
    arrowClass: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.state = {
      currentPage: parseInt(getUrlParams().page, 10) || 1
    }
  }

  changePage (page) {
    const { reloadPage, onPageChange } = this.props

    urlUpdateParams({ page }, reloadPage)

    if (onPageChange) onPageChange(page)
    if (!reloadPage) {
      this.setState({
        currentPage: page
      })
    }
  }

  render () {
    const { itemsPerPage, totalItems, paginateClass, arrowClass } = this.props

    if (!totalItems) return null
    return (
      <PageList
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        handlePageChange={this.changePage}
        currentPage={this.state.currentPage}
        paginateClass={paginateClass}
        arrowClass={arrowClass}
      />
    )
  }
}
