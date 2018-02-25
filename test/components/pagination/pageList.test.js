import React from 'react'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

import PageList from 'components/pagination/pageList'

describe('<PageList>', () => {
  let wrapper
  const renderPageList = (params) => {
    const pageChange = sinon.stub()
    const props = {
      itemsPerPage: params.itemsPerPage,
      totalItems: params.totalItems,
      handlePageChange: pageChange,
      currentPage: params.currentPage,
      paginateClass: params.paginateClass,
      arrowClass: params.arrowClass
    }

    wrapper = renderer.create(
      <PageList {...props} />
    )
  }

  it('render <Page> for custom paginateClass', () => {
    renderPageList({
      itemsPerPage: 3,
      totalItems: 7,
      currentPage: 2,
      paginateClass: 'custom-paginate',
      arrowClass: ''
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('render <Page> for custom arrowClass', () => {
    renderPageList({
      itemsPerPage: 2,
      totalItems: 15,
      currentPage: 7,
      paginateClass: '',
      arrowClass: 'custom-arrow'
    })
    expect(wrapper).toMatchSnapshot()
  })


})