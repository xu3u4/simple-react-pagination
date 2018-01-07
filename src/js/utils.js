// import queryString from 'query-string'
import { range } from 'lodash'

const paramsToQueryString = (params) => {
  if (_.isEmpty(params)) return ''
  let s = ''
  const keys = Object.keys(params)
  keys.forEach(k => {
    if (k === keys.slice(0)[0]) s += '?'
    s += `${k}=${encodeURIComponent(params[k])}`
    if (k !== keys.slice(-1)[0]) s += '&'
  })

  return s
}

export const getUrlParams = () => {
  if (location.search) {
    const params = {}
    const querys = location.search.substring(1).split('&')

    for (let i = 0; i < querys.length; i++) {
      const param = querys[i].split('=')
      if (param[0] && param[1]) params[param[0]] = param[1]
    }
    return params
  }
  return {}
}

export const urlUpdateParams = (newParams = {}, reloadPage = true, $window = window || {}) => {
  const { origin, pathname } = $window.location

  if (_.isEmpty(newParams)) return
  const queryParams = paramsToQueryString(newParams)
  const newUrl = `${origin}${pathname}${queryParams}`

  if (reloadPage) {
    $window.location.href = newUrl // eslint-disable-line no-param-reassign
  } else {
    $window.history.replaceState({}, '', newUrl)
  }
}

export const createPageArray = (currentPage, totalPage) => {
  const ellipsis = "..."
  let initPageArray = [1]
  let pageArray

  if (totalPage < 6) {
    pageArray = range(1, totalPage + 1)
  } else if (currentPage < 5) {
    pageArray = _.range(1, currentPage + 3)
  } else if (currentPage + 2 >= totalPage) {
    pageArray = initPageArray.concat(_.range(currentPage - 2, totalPage + 1))
  } else {
    pageArray = initPageArray.concat(_.range(currentPage - 2, currentPage + 3))
  }

  if (pageArray[0] + 1 !== pageArray[1]) pageArray.splice(1, 0, ellipsis)
  if (pageArray[pageArray.length - 1] !== totalPage) pageArray.push(ellipsis)

  return pageArray
}