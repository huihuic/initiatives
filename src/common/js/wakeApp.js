import browser from './browser'
export default {
  wake: function (pageType, dataType, contId, nodeId) {
    var pageType=pageType||''
    var dataType=dataType||''
    var contId=contId||''
    var nodeId=nodeId||''
    var yybUrl=''
    var appstoreUrl='https://itunes.apple.com/app/apple-store/id1479528873?mt=8'
    var apkDownLoadUrl='http://aoyun-oms.oss-cn-beijing.aliyuncs.com/app/3/com.cctv.OlympicChannel.apk'
    var schemeUrl = 'olympicchannelcctv://oc?pageType=' + pageType + '&dataType=' + dataType + '&contId=' + contId + '&nodeId=' + nodeId
    var encodeSchemeUrl=encodeURIComponent(schemeUrl)
    if (browser.ios) {
      if (browser.weixin) {
        //window.location = yybUrl+'&ios_scheme='+encodeSchemeUrl
        alert('在应用宝打开')
      } else{
        window.location = schemeUrl
        var timer = setTimeout(function () {
          var hidden = isPageHidden()
          if (!hidden) {
            //window.location = appstoreUrl
            alert('在appStore内打开')
          }
        }, 3500)
      }
    } else if (browser.android) {
      if (browser.weixin) {
        //window.location = yybUrl+'&android_schema='+encodeSchemeUrl
        alert('在应用宝打开')
      }else {
        window.location = schemeUrl
        var timer = setTimeout(function () {
          var hidden = isPageHidden()
          if (!hidden) {
            window.location = apkDownLoadUrl
          }
        }, 3500)
      }
    } else if (browser.pc) {
      //window.location = apkDownLoadUrl
      alert('打开PC推广页')
    }

    var visibilityChangeProperty = getVisibilityChangeProperty()
    if (visibilityChangeProperty) {
	    document.addEventListener(visibilityChangeProperty, function () {
	      clearTimeout(timer)
	    })

	    return;
	  }
	  window.addEventListener('pagehide', function () {
	    clearTimeout(timer)
	  })

  }
}

/**
	 * 获取页面隐藏属性的前缀
	 * 如果页面支持 hidden 属性，返回 '' 就行
	 * 如果不支持，各个浏览器对 hidden 属性，有自己的实现，不同浏览器不同前缀，遍历看支持哪个
	 */
function getPagePropertyPrefix () {
	  var prefixes = ['webkit', 'moz', 'ms', 'o']
	  var correctPrefix = void 0

	  if ('hidden' in document) return ''

	  prefixes.forEach(function (prefix) {
	    if (prefix + 'Hidden' in document) {
	      correctPrefix = prefix
	    }
	  })

	  return correctPrefix || false
	}
/**
	 * 判断页面是否隐藏（进入后台）
	 */
function isPageHidden () {
	  var prefix = getPagePropertyPrefix()
	  if (prefix === false) return false
	  var hiddenProperty = prefix ? prefix + 'Hidden' : 'hidden'
	  return document[hiddenProperty]
	}
/**
	 * 获取判断页面 显示|隐藏 状态改变的属性
	 */
function getVisibilityChangeProperty () {
	  var prefix = getPagePropertyPrefix()
    if (prefix === false) return false
	  return prefix + 'visibilitychange'
	}
