import React, { Component } from 'react';

import { updateQueryString } from 'js/utils'
import Pagination from 'js/components/pagination/pagination';

class PagesContainer extends Component {
  changePage (p, disableClick) {
    if (disableClick) return false
    updateQueryString({p})
  }

  render () {
    return (
      <Pagination
        paginate={this.props.paginate}
        handleChangePage={this.changePage}
      />
    )
  }
}

export default PagesContainer
