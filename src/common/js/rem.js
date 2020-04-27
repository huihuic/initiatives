/*
适配移动端和PC端
*/
(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth > 750) { // 设备宽度超过750不再扩大内容显示区域（pc屏幕缩小显示，两边留白）
      docEl.style.width = '750px'
      docEl.style.margin = 'auto'
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.width = '100%'
      var fsize = parseFloat(100 * (clientWidth / 750)).toFixed(2)
      docEl.style.fontSize = fsize + 'px'
      var realF = parseFloat(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize).toFixed(2)
      if (realF !== fsize) { // 解决系统内设置缩小放大字体影响布局
        docEl.style.fontSize = parseInt((fsize * fsize / realF)) + 'px'
      }
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  recalc()
})(document, window)
