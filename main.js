if('serviceWorker' in navigator){
  window.addEventListener('load', () =>
    navigator.serviceWorker.worker.register('sw.js')
    .then(registration => console.log('Service worker registered'))
    .catch(err => 'SW regustratuib failed'));
}