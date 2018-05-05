import serviceUrl from "./config.js"

let API = {
  GET_BANNER: serviceUrl + "/?json=true", //获取banner图
  GET_BILLBOARD_TYPE: serviceUrl + "/rank/list&json=true", //获取榜单类别
  GET_BILLBOARD_SONG:
    serviceUrl + "/rank/info/?rankid={rankId}&page=1&json=true", //获取指定榜单歌曲
  GET_SINGER_TYPE: serviceUrl + "/singer/class&json=true", //获取歌手分类
  GET_SINGER_LIST: serviceUrl + "/singer/list/{classId}?json=true", //获取指定歌手类别下的歌手列表
  GET_RECOMMEND: serviceUrl + "/plist/index&json=true" //获取精选歌单
}

export default API
