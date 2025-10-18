const CUSTOMER_SITES = {
   qiqi: { 
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '立即播放',
         }
    
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
