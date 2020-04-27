import wx from 'weixin-jsapi'
export function weChatShare (imgUrl, title, desc, vueObject) {
  let shareImgUrl = imgUrl || 'https://m.olympicchannelchina.cn/static/image/defaultLogo.png'
  let shareTitle = title || '奥林匹克频道'
  let shareDesc = desc || '奥林匹克频道'
  let shareLink = window.location.href
  let encodeUrl = encodeURIComponent(encodeURIComponent(window.location.href))
  vueObject.axios.get('/otherApi/list/getWeiXinSignature?url=' + encodeUrl + '&t=json&appid=olympicchannel&serviceId=sjocc').then(res => {
    // 获取access_token
    if (res.data.data.timestamp) {
      let wx_timestamp = res.data.data.timestamp
      let wx_nonceStr = res.data.data.nonceStr
      let wx_signature = res.data.data.signature
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx703e45e89bcc5207', // 必填，公众号的唯一标识
        timestamp: wx_timestamp, // 必填，生成签名的时间戳
        nonceStr: wx_nonceStr, // 必填，生成签名的随机串
        signature: wx_signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      wx.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        // 分享朋友圈
        wx.onMenuShareTimeline({
          title: shareTitle, // 分享描述
          link: shareLink, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          }
        })
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: shareTitle, // 分享标题
          desc: shareDesc, // 分享描述
          link: shareLink, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          }
        })
        // 分享到qq
        // eslint-disable-next-line no-undef
        wx.onMenuShareQQ({
          title: shareTitle, // 分享标题
          desc: shareDesc, // 分享描述
          link: shareLink, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // qq空间
        // eslint-disable-next-line no-undef
        wx.onMenuShareQZone({
          title: shareTitle, // 分享标题
          desc: shareDesc, // 分享描述
          link: shareLink, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // 腾讯微博
        // eslint-disable-next-line no-undef
        wx.onMenuShareWeibo({
          title: shareTitle, // 分享标题
          desc: shareDesc, // 分享描述
          link: shareLink, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }).catch(e => {
    console.log(e)
  })
}
