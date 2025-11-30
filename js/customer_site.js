const CUSTOMER_SITES = {
    "heimuer": {
      "api": "https://api.apibdzy.com/api.php/provide/vod",
      "name": "百度资源",
    },
    "ruyi": {
      "api": "https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8",
      "name": "光速资源"
    },
    "bfzy": {
      "api": "https://jyzyapi.com/provide/vod/from/jinyingm3u8",
      "name": "金鹰资源"
    },
    "tyyszy": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "360资源"
    },
    "xiaomaomi": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧"
    },
        "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂"
    },
    "ruyi": {
      "api": "http://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    "ffzy": {
      "api": "http://ffzy5.tv/api.php/provide/vod",
      "name": "非凡影视"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "360资源"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "茅台资源"
    },
    "wolong": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "卧龙资源"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "豆瓣资源"
    },
    "mozhua": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源"
    },
    "mdzy": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "魔都资源"
    },
    "zuid": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "樱花资源"
    },
    "wujin": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "iKun资源"
    },
    "lzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "量子资源"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
