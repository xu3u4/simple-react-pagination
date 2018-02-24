import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from 'js/components/pagination'
import { getUrlParams } from './utils'

export default class Spa extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.getItem = this.getItem.bind(this)
    const currentPage = parseInt(getUrlParams().page, 10) || 1
    this.state = {
      item: props.items[currentPage - 1]
    }
  }

  getItem(page) {
    this.setState({
      item: this.props.items[page - 1]
    })
  }

  render() {
    const itemsPerPage = 1, totalItems = this.props.items.length

    return (
      <div className="block">
        <div className="mode-name">SPA mode</div>
        <div>Current page: {this.state.item}</div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={this.getItem}
          reloadPage={false}
        />
      </div>
    )
  }
}
