window.onload = function() {

  new OwO({
    logo: 'OωO',
    container: document.querySelector('.OwO'),
    target: document.querySelector('.OwO-textarea'),
    api: './OwO.json',
    position: 'down',
    width: '100%',
    maxHeight: '250px'
  });

  var copyTextToClipboard = function(text) {
    var copyFrom = document.createElement('textarea');
    copyFrom.textContent = text;
    var body = document.querySelector('body');
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
  };


  var initTimer = setInterval(function() {
    var btn = document.querySelector('.OwO-logo');
    if (null != btn) {
      clearInterval(initTimer);
      btn.click();
      var items = document.querySelectorAll('.OwO-item');
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(event) {
          document.querySelector('.OwO').style.display = 'none';
          copyTextToClipboard(this.innerHTML);
          document.querySelector('.success').style.display = 'block';
          setTimeout(window.close, 1000);
        });
      }
    }

  }, 10);
};