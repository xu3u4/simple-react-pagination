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