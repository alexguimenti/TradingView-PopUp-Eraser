var interval = setInterval(eraseWindow, 300);

function eraseWindow(){
  if(document.querySelectorAll('[data-role="toast-container"]')){
      document.querySelectorAll('[data-role="toast-container"]')[0].remove();
      clearInterval(interval);
  }
  if(document.querySelector('.modal-GUK9cvUQ')){
    document.querySelector('.modal-GUK9cvUQ').remove();
    clearInterval(interval);
}
}