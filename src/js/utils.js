import { range } from 'lodash'

export const isEmptyString = (param) => {
  return typeof param === 'string' && param.length === 0
}

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
  const total_paginate = 5
  let shift = 0

  // render all if less than 5 pages
  if (totalPage <= total_paginate) return _.range(1, totalPage + 1)
  let pageArray = _.range(currentPage - 2, currentPage + 3) // currentPage +- 2

  if (pageArray[0] <= 0 ) shift = 1 - pageArray[0]
  else if(pageArray[total_paginate - 1] > totalPage) {
    shift = totalPage - pageArray[total_paginate - 1]
  }

  return pageArray.map((page) => page + shift)
}