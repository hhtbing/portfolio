(function() {
  'use strict';

  const STORAGE_KEY = 'benson-portfolio-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'zh';

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang();
    updateButtons();
  }

  function applyLang() {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
      if (currentLang === 'en') {
        el.textContent = el.getAttribute('data-lang-en');
      } else {
        el.textContent = el.getAttribute('data-lang-zh');
      }
    });
    document.querySelectorAll('[data-lang-en-html]').forEach(el => {
      if (currentLang === 'en') {
        el.innerHTML = el.getAttribute('data-lang-en-html');
      } else {
        el.innerHTML = el.getAttribute('data-lang-zh-html');
      }
    });
    document.querySelectorAll('.lang-zh, .lang-en').forEach(el => {
      if (currentLang === 'en') {
        el.classList.toggle('active', el.classList.contains('lang-en'));
      } else {
        el.classList.toggle('active', el.classList.contains('lang-zh'));
      }
    });
  }

  function updateButtons() {
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang();
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.addEventListener('click', function() {
        setLang(this.getAttribute('data-lang'));
      });
    });
  });

  window.i18n = { setLang, getLang: () => currentLang };
})();
