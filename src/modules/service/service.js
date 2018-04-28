import serviceUrl from "./config.js"

let API = {
  GET_BANNER: serviceUrl + "/?json=true", //获取banner图
  GET_BILLBOARD_TYPE: serviceUrl + "/rank/list&json=true", //获取榜单类别
  GET_BILLBOARD_SONG:
    serviceUrl + "/rank/info/?rankid={rankId}&page=1&json=true", //获取指定榜单歌曲
  GET_SINGER_TYPE: serviceUrl + "/singer/class&json=true", //获取歌手分类
  GET_SINGER_LIST: serviceUrl + "/singer/list/{classId}?json=true", //获取指定歌手类别下的歌手列表
  GET_SINGER_INFO: serviceUrl + "/singer/info/{singerId}&json=true", //获取歌手信息
  GET_SONG_DETAIL:
    serviceUrl + "/app/i/getSongInfo.php?cmd=playInfo&hash={hash}", //获取音乐详情
  GET_SONG_DETAIL_LRC: serviceUrl + "/yy/index.php?r=play/getdata&hash={hash}", //获取音乐详情带歌词
  GET_HOT_SEARCH_LIST:
    "http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30", //获取热门搜索列表
  GET_SEARCH_RESULT:
    "http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword={keyword}&page=1&pagesize=20&showtype=1" //获取搜索结果
}

export default API
