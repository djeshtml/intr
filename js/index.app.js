
(function(){
  function applySrc(){
    document.querySelectorAll('img[data-dcsrc]').forEach(function(el){
      var v = el.getAttribute('data-dcsrc');
      if (v && v !== 'undefined' && el.getAttribute('src') !== v) el.setAttribute('src', v);
    });
  }
  setInterval(applySrc, 250);
  document.addEventListener('DOMContentLoaded', applySrc);
})();
