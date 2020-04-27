import LocalStorage from './localStorage'
import bus from './bus.js'
import {getStrSearch} from './getQuery.js'
export default {
  goNext (item, vueObject) {
    if (item.dataType === '1') { // 1表示新点播类型
      window.location = 'demand.html' + getStrSearch(item.requestURL)
    } else if (item.dataType === '2') { // 2表示旧点播类型
      window.location = 'demand.html' + getStrSearch(item.requestURL)
    } else if (item.dataType === '3') { // 3表示直播类型
      window.location = 'live.html' + getStrSearch(item.requestURL)
    } else if (item.dataType === '4') { // 4表示外链类型
      window.location.href = item.requestURL
      // window.location.href = 'http://www.baidu.com'
    } else if (item.dataType === '5') { // 5表示运动员类型
      window.location = 'sportsmanDetail.html' + getStrSearch(item.requestURL)
      // vueObject.$router.push('/sportsManDetail' + getStrSearch(item.requestURL + '&name=' + item.playerName))
    } else if (item.dataType === '6') { // 6表示项目类型
      window.location = 'projectDetail.html' + getStrSearch(item.requestURL)
      // vueObject.$router.push('/projectDetail' + getStrSearch(item.requestURL + '&name=' + item.sportName))
    } else if (item.dataType === '7') { // 7表示自建视频集类型
      window.location = 'demandList.html' + getStrSearch(item.requestURL)
    } else if (item.dataType === '8') { // 8表示专题类型
      vueObject.$router.push('/special')
      // if (item.requestURL === '') {
      //   vueObject.$router.push('/special?nodeId=11551')
      // } else {
      //   vueObject.$router.push('/special' + getStrSearch(item.requestURL))
      // }
    } else if (item.dataType === '9') { // 9表示频道类型
      if (vueObject.$route.path === '/home') {
        vueObject.$router.replace('/home' + getStrSearch(item.requestURL + '&type=1'))
      } else {
        vueObject.$router.replace('/home' + getStrSearch(item.requestURL))
      }
    } else if (item.dataType === '10') { // 10表示搜索页类型
      vueObject.$router.push('/search' + getStrSearch(item.requestURL))
    } else if (item.dataType === '11') { // 11表示底部”首页”Tab类型
      vueObject.$router.push({
        path: '/home'
      })
    } else if (item.dataType === '12') { // 12表示底部”我的频道”Tab类型
      if (LocalStorage.getLocalStorage('Authorization') === '') {
        vueObject.$router.push({
          path: 'login',
          query: {
            type: '2'
          }
        })
      } else {
        vueObject.axios.post('/cltv2/myFollow.jsp', {
          wdToken: LocalStorage.getLocalStorage('Authorization')
        }).then(res => {
          if (res.data.resultCode === '0000') {
            if (res.data.followList.length === 0) {
              vueObject.$router.push({
                path: 'myChannelUnconcern'
              })
            } else {
              vueObject.$router.push({
                path: 'myChannel',
                query: {
                  wdToken: LocalStorage.getLocalStorage('Authorization')
                }
              })
            }
          } else {
            console.log(res.data.resultMsg)
          }
        }).catch(e => {
          console.log('报错了')
        })
      }
    } else if (item.dataType === '13') { // 13表示底部”直播”Tab类型
      // 待定，因为allLive页面不确定还要不要
    } else if (item.dataType === '14') { // 14表示底部”故事”Tab类型
      vueObject.$router.push('/special')
      // if (item.requestURL === '') {
      //   vueObject.$router.push('/special?nodeId=11551')
      // } else {
      //   vueObject.$router.push('/special' + getStrSearch(item.requestURL))
      // }
    } else if (item.dataType === '15') { // 15表示“发现”Tab页
      bus.$emit('moreChannelTabShow', 1)
    } else if (item.dataType === '16') { // 16表示CMS图文页面
      window.location.href = item.requestURL
    } else if (item.dataType === '17') { // 17表示CMS图集页面
      window.location.href = item.requestURL
    } else if (item.dataType === '19') {
      vueObject.$router.push('/project')
    } else if (item.dataType === '20') {
      vueObject.$router.push('/sportsMan')
    }
  }
}
