import queryString from 'query-string'

export const updateQueryString = (newParams, $window = typeof window === 'undefined' ? {} : window) => {
  const queryParams = queryString.stringify(newParams)
  // $window.history.replaceState({}, '', `http://${$window.location.host}${$window.location.pathname}?${queryParams}`)
  $window.location.href = `http://${$window.location.host}${$window.location.pathname}?${queryParams}`
}

export const createPageArray = (currentPage, totalPage) => {
  const ellipsis = '...'
  let initPageArray = [1]
  let pageArray

  if (currentPage < 5) {
    pageArray = _.range(1, currentPage + 3)
  } else if (currentPage + 2 >= totalPage) {
    pageArray = initPageArray.concat(_.range(currentPage - 2, totalPage + 1))
  }else {
    pageArray = initPageArray.concat(_.range(currentPage - 2, currentPage + 3))
  }

  if (pageArray[0] + 1 !== pageArray[1]) pageArray.splice(1, 0, ellipsis)
  if (pageArray[pageArray.length - 1] !== totalPage) pageArray.push(ellipsis)

  return pageArray
}