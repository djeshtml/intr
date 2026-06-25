
(function(){
  function applySrc(){
    document.querySelectorAll('img[data-dcsrc]').forEach(function(el){
      var v = el.getAttribute('data-dcsrc');
      if (v && v !== 'undefined' && el.getAttribute('src') !== v) el.setAttribute('src', v);
    });
  }
  setInterval(applySrc, 250);
  document.addEventListener('DOMContentLoaded', applySrc);
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    var header = document.querySelector('header');
    var off = (header ? header.getBoundingClientRect().height : 0) + 8;
    var y = t.getBoundingClientRect().top + window.pageYOffset - off;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
})();
