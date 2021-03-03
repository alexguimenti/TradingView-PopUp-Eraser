var interval = setInterval(eraseWindow, 300);
console.log('Start Interval!')

function stopInterval(){
  setInterval(interval, 60000);
  console.log('Start Interval!')
  console.log('Stop Interval!')
}

function eraseWindow(){
  if(document.querySelectorAll('[data-role="toast-container"]')[0]){
      document.querySelectorAll('[data-role="toast-container"]')[0].remove();
      clearInterval(interval);
      console.log('Erased!');
      var interval = setInterval(eraseWindow, 300);
      stopInterval();
  }
  if(document.querySelector('.modal-GUK9cvUQ')){
    document.querySelector('.modal-GUK9cvUQ').remove();
    clearInterval(interval);
    console.log('Erased!');
    var interval = setInterval(eraseWindow, 300);
    stopInterval();
}
}