import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

import Pagination from 'components/pagination/index'
import PageList from 'components/pagination/pageList'

describe('<Pagination>', () => {
  describe('mount Pagination', () => {
    let wrapper
    const mountPagination = (params = {}) => {
      const pageChange = sinon.stub()
      const basicProps = {
        totalItems: params.totalItems,
        onPageChange: params.onPageChange || pageChange,
        itemsPerPage: params.itemsPerPage || 1,
        reloadPage: params.reloadPage || true,
        paginateClass: params.paginateClass || '',
        arrowClass: params.arrowClass || ''
      }

      wrapper = mount(
        <Pagination {...basicProps} />
      )
    }
    mountPagination({ totalItems: 10 })
    const pageList = wrapper.find('PageList')

    it('should contain <PageList>', () => {
      expect(pageList.exists()).toBeTruthy()
    })

    it('should receive props', () => {
      expect(Object.keys(pageList.props()))
        .toEqual(["itemsPerPage", "totalItems", "handlePageChange", "currentPage", "paginateClass", "arrowClass"])
    })
  })

  describe('render Pagination', () => {
    let renderWrapper
    const renderPagination = (params = {}) => {
      const pageChange = sinon.stub()
      const basicProps = {
        totalItems: params.totalItems,
        onPageChange: params.onPageChange || pageChange,
        itemsPerPage: params.itemsPerPage || 1,
        reloadPage: params.reloadPage || true,
        paginateClass: params.paginateClass || '',
        arrowClass: params.arrowClass || ''
      }

      renderWrapper = renderer.create(
        <Pagination {...basicProps} />
      )
    }

    it('should match snapshot', () => {
      renderPagination({ totalItems: 10 })
      expect(renderWrapper).toMatchSnapshot();
    });
  })
})

