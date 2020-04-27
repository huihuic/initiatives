 // 时间戳格式化
export function formatDate(date, fmt) {

  if (/(y+)/.test(fmt)) {

    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }

  let o = {

    'M+': date.getMonth() + 1, // 月

    'd+': date.getDate(), // 日

    'h+': date.getHours(), // 时

    'm+': date.getMinutes(), // 分

    's+': date.getSeconds() // 秒

  };

  for (let k in o) {

    if (new RegExp(`(${k})`).test(fmt)) {

      let str = o[k] + '';

      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));

    }

  }

  return fmt;

};
export function formatYear (date){ //设置时间转换格式

    let y = date.getFullYear();  //获取年
  
    let m = date.getMonth() + 1;  //获取月

    let d = date.getDate();  //获取日

    return y + '年' + m + '月' + d + '日';  //返回时间格式

};
// 格式化秒
export function formatSecond(value){
  let secondTime = parseInt(value);// 秒
	let minuteTime = 0;// 分
	let hourTime = 0;// 小时
	if(secondTime > 60) {
	  minuteTime = parseInt(secondTime / 60);
	  secondTime = parseInt(secondTime % 60)
	  if(minuteTime > 60) {
	    hourTime = parseInt(minuteTime / 60);
	    minuteTime = parseInt(minuteTime % 60);
	  }
	}
  let resultSeconed = parseInt(secondTime) > 9 ? secondTime : padLeftZero(secondTime) // 秒
  let resultMinute = parseInt(minuteTime) > 9 ? minuteTime : padLeftZero(minuteTime) // 分
	if(hourTime > 0) {
	  return hourTime + ":" + resultMinute + ":" +resultSeconed
	}else{
    return resultMinute + ":" + resultSeconed
  }
}

function padLeftZero(str) {

  return ('0' + str).substr(str.length);
  // return ('00' + str).substr(str.length); // 不够两位补0

};