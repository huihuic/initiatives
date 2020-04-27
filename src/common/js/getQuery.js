export function getStrSearch (str) {
  let identifyIndex = str.indexOf('?')
  if (identifyIndex > -1) {
    return str.slice(identifyIndex)
  } else {
    return str
  }
}
export function getUrlQuery (key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
