if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/attendance-helper/sw.js', { scope: '/attendance-helper/' })})}