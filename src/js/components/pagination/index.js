import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { updateQueryString } from 'js/utils'
import Pagination from 'js/components/pagination/pagination'

class PagesContainer extends Component {
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this);
  }

  changePage (p, disableClick) {
    if (disableClick) return false
    updateQueryString({p}, this.props.reloadPage)
  }

  render () {
    return (
      <Pagination
        paginate={this.props.paginate}
        handlePageChange={this.changePage}
      />
    )
  }
}

PagesContainer.propTypes = {
  paginate: PropTypes.shape({
    itemsPerPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  reloadPage: PropTypes.bool
}

PagesContainer.defaultProps = {
  reloadPage: true
}

export default PagesContainer
