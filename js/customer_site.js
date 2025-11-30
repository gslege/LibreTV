const CUSTOMER_SITES = {
    "dyttzy": {
      "api": "https://collect.wolongzyw.com/api.php/provide/vod",
      "name": "默认资源",
    },
     "heimuer": {
      "api": "https://api.apibdzy.com/api.php/provide/vod",
      "name": "百度资源",
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
