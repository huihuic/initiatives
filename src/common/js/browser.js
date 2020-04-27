let _u=navigator.userAgent
let browser = {
  pc: !_u.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),
  trident: _u.indexOf('Trident') > -1, //IE
  presto: _u.indexOf('Presto') > -1, //opera
  webKit: _u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
  gecko: _u.indexOf('Gecko') > -1 && _u.indexOf('KHTML') == -1, //火狐内核
  mobile: !!_u.match(/AppleWebKit.*Mobile.*/), //移动终端
  ios: !!_u.match(/\(i[^;]+;( _u;)? CPU.+Mac OS X/), //ios终端
  android: _u.indexOf('Android') > -1 || _u.indexOf('Adr') > -1, //android终端
  iPhone: _u.indexOf('iPhone') > -1, //iPhone或者QQHD浏览器
  iPad: _u.indexOf('iPad') > -1, //iPad
  webApp: _u.indexOf('Safari') == -1, //web应该程序，没有头部与底部
  weixin: _u.indexOf('MicroMessenger') > -1, //微信
  qq: _u.match(/\sQQ/i) == " qq" ,//QQ
  weibo: _u.indexOf('Weibo') > -1 //微博
}
export default browser