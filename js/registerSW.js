/*
使用方法：
1. 将serviceworker.js放置在网站发布的根目录
2. serviceworker.js文件引入完成之后，再在全局配置文件里面写入下面内容，
    或者直接引入当前文件
*/
/*
在页面中        
        <script src="/js/registerSW.js?v=xxx"></script>
*/
// 延迟注册serviceWorker
window.addEventListener('load', function() {
    if('serviceWorker' in navigator){
       // serviceworker.js 文件要放在网站发布的根目录
       navigator.serviceWorker.register('/serviceworker.js').then(function (registration) {
        console.log('Service Worker Registered,register script: serviceworker.js.');
      }).catch(function (error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }
  });
  // 控制台显示service worker缓存占用情况
  if ('storage' in navigator && 'estimate' in navigator.storage) {
      navigator.storage.estimate().then(estimate => {
          console.log(`Using ${estimate.usage/1024/1024} out of ${estimate.quota/1024/1024} MB.And the proportion is ${estimate.usage/estimate.quota*100}%`);
      });
  }