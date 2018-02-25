import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import Page from 'components/pagination/page'

describe('<Page>', () => {
  let wrapper
  const pageChange = sinon.stub()
  const renderPage = (params) => {
    const props = {
      isDisabled: params.isDisabled || false,
      isActive: params.isActive || false,
      content: params.content || '',
      pageChange: pageChange,
      targetPage: params.targetPage,
      customClass: params.customClass || ''
    }

    wrapper = mount(
      <Page {...props} />
    )
  }

  it('type is <li>', () => {
    renderPage({targetPage: 1})
    expect(wrapper.children().type()).toEqual('li')
  })

  describe('class', () => {
    it('native-paginate for no customed button', () => {
      renderPage({targetPage: 1})
      expect(wrapper.find('button').hasClass('native-paginate')).toBeTruthy()
    })

    it('is customed', () => {
      renderPage({targetPage: 1, customClass: 'custom-class'})
      expect(wrapper.find('button').hasClass('custom-class')).toBeTruthy()
    })

    it('is-active for active page', () => {
      renderPage({targetPage: 1, isActive: true})
      expect(wrapper.find('button').hasClass('is-active')).toBeTruthy()
    })

    it('is-disabled for isDisabled page', () => {
      renderPage({targetPage: 1, isDisabled: true})
      expect(wrapper.find('button').hasClass('is-disabled')).toBeTruthy()
      expect(wrapper.find({disabled: true}).length).toBe(1)
    })
  })

  it('should trigger pageChange on click', () => {
    renderPage({targetPage: 1})
    wrapper.find('button').simulate('click')
    expect(pageChange.calledOnce).toBeTruthy()
  })
})
