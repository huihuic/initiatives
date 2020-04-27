import LocalStorage from './localStorage'
import bus from './bus.js'
import {getStrSearch} from './getQuery.js'
export default {
  stillMore (item, vueObject) {
    if (item.moreType === '0' || item.moreType === '') {
      vueObject.$router.push('/homeMore' + getStrSearch(item.moreURL + '&name=' + item.name))
    } else if (item.moreType === '1') {
      window.location = 'demand.html' + getStrSearch(item.moreURL)
    } else if (item.moreType === '2') {
      window.location = 'demand.html' + getStrSearch(item.moreURL)
    } else if (item.moreType === '3') {
      window.location = 'live.html' + getStrSearch(item.moreURL)
    } else if (item.moreType === '4') {
      window.location.href = item.moreURL
    } else if (item.moreType === '5') {
      window.location = 'sportsmanDetail.html' + getStrSearch(item.moreURL)
      // vueObject.$router.push('/sportsManDetail' + getStrSearch(item.moreURL + '&name=' + item.playerName))
    } else if (item.moreType === '6') {
      window.location = 'projectDetail.html' + getStrSearch(item.moreURL)
      // vueObject.$router.push('/projectDetail' + getStrSearch(item.moreURL + '&name=' + item.sportName))
    } else if (item.moreType === '7') {
      window.location = 'demandList.html' + getStrSearch(item.moreURL)
    } else if (item.moreType === '8') {
      vueObject.$router.push('/special')
      // if (item.moreURL === '') {
      //   vueObject.$router.push('/special?nodeId=11551')
      // } else {
      //   vueObject.$router.push('/special' + getStrSearch(item.moreURL))
      // }
    } else if (item.moreType === '9') {
      if (vueObject.$route.path === '/home') {
        vueObject.$router.replace('/home' + getStrSearch(item.moreURL + '&type=1'))
      } else {
        vueObject.$router.replace('/home' + getStrSearch(item.moreURL))
      }
    } else if (item.moreType === '10') {
      vueObject.$router.push('/search' + getStrSearch(item.moreURL))
    } else if (item.moreType === '11') {
      vueObject.$router.push({
        path: '/home'
      })
    } else if (item.moreType === '12') {
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
    } else if (item.moreType === '13') {
      // 13表示底部”直播”Tab类型
      // 待定，因为allLive页面不确定还要不要
    } else if (item.moreType === '14') {
      vueObject.$router.push('/special')
      // if (item.moreURL === '') {
      //   vueObject.$router.push('/special?nodeId=11551')
      // } else {
      //   vueObject.$router.push('/special' + getStrSearch(item.moreURL))
      // }
    } else if (item.moreType === '15') {
      bus.$emit('moreChannelTabShow', 1)
    } else if (item.moreType === '16') {
      window.location.href = item.moreURL
    } else if (item.moreType === '17') {
      window.location.href = item.moreURL
    } else if (item.moreType === '19') {
      vueObject.$router.push('/project')
    } else if (item.moreType === '20') {
      vueObject.$router.push('/sportsMan')
    }
  }
}
