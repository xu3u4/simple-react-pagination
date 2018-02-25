import sinon from 'sinon'
import {
  isEmptyString,
  paramsToQueryString,
  getUrlParams,
  createPageArray
} from 'utils'

describe('isEmptyString', () => {
  it('should return true if is an empty string', () => {
    expect(isEmptyString('')).toBeTruthy()
  })

  it('should return false if is a string', () => {
    expect(isEmptyString('hi')).toBeFalsy()
  })

  it('should return false if is an array', () => {
    expect(isEmptyString([])).toBeFalsy()
  })
})

describe('paramsToQueryString', () => {
  it('should return empty string if no params', () => {
    expect(paramsToQueryString({})).toBe('')
  })

  it('should return query string if has params', () => {
    expect(paramsToQueryString({page: 1, test: 'yes'})).toBe('?page=1&test=yes')
  })
})

describe('getUrlParams', () => {
  it('should return an empty object if no query string', () => {
    expect(getUrlParams()).toEqual({})
  })

  it.skip('should return an object if has query string', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?page=3'
    });
    expect(getUrlParams()).toEqual({page: '3'})
  })
})

describe('createPageArray', () => {
  it('should return [1, 2, 3] when current page=1, total=3', () => {
    expect(createPageArray(1, 3)).toEqual([1, 2, 3])
  })

  it('should return [1, 2, 3, 4, 5] when current page=1, total=13', () => {
    expect(createPageArray(1, 13)).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, 3, 4, 5] when current page=3, total=13', () => {
    expect(createPageArray(3, 13)).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [2, 3, 4, 5, 6] when current page=4, total=13', () => {
    expect(createPageArray(4, 13)).toEqual([2, 3, 4, 5, 6])
  })

  it('should return [9, 10, 11, 12, 13] when current page=12, total=13', () => {
    expect(createPageArray(12, 13)).toEqual([9, 10, 11, 12, 13])
  })

  it('should return page list [2, 3, 4, 5, 6] when current page=6, total=6', () => {
    expect(createPageArray(6, 6)).toEqual([2, 3, 4, 5, 6])
  })
})