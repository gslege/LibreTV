const CUSTOMER_SITES = {
   qiqi: { 
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '默认资源',
         }，

   qiqi: { 
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
         },

   qiqi: { 
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
         },

   qiqi: { 
        api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
         },

   qiqi: { 
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
         },

   qiqi: { 
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
         }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
