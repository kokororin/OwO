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

  document.querySelector('.help').innerHTML =
    chrome.i18n.getMessage('help') + ' ( ≧Д≦)';

  document.querySelector('.success h2').innerHTML = chrome.i18n.getMessage(
    'afterCopy'
  );

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
      var bars = document.querySelectorAll('.OwO-packages li');
      var barIndex = localStorage.getItem('bar_index');
      if (barIndex != null) {
        try {
          bars[barIndex].click();
        } catch (e) {}
      }
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(event) {
          document.querySelector('.OwO').style.display = 'none';
          document.querySelector('.help').style.display = 'none';
          copyTextToClipboard(this.innerText);
          document.querySelector('.success').style.display = 'block';
          setTimeout(window.close, 1000);
        });
      }
      for (var i = 0; i < bars.length; i++) {
        bars[i].dataset.index = i;
        bars[i].addEventListener('click', function(event) {
          localStorage.setItem('bar_index', this.dataset.index);
        });
      }
    }
  }, 10);
};
