/* ===== ANİMASYONLU GELİŞTİRİCİ İSMİ ===== */
// İsim Animasyonları
function initDeveloperSignature() {
  const nameLetters = document.querySelectorAll('.name-letter');
  
  // Her harfe animasyon gecikmesi ver
  nameLetters.forEach((letter, index) => {
    letter.style.setProperty('--letter-index', index);
    
    // Mouse hover efektleri
    letter.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.3) rotate(5deg)';
      this.style.textShadow = '0 0 30px var(--brand-300), 0 0 60px var(--brand-200)';
      this.style.zIndex = '100';
    });
    
    letter.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.textShadow = '';
      this.style.zIndex = '';
    });
    
    // Tıklama efekti
    letter.addEventListener('click', function() {
      this.style.transform = 'scale(1.5) rotate(10deg)';
      this.style.textShadow = '0 0 40px var(--brand-100)';
      
      setTimeout(() => {
        this.style.transform = '';
        this.style.textShadow = '';
      }, 300);
    });
  });
  
  // Parçacık animasyonları
  const signatureContainer = document.querySelector('.signature-container');
  if (signatureContainer) {
    signatureContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.02)';
      this.style.boxShadow = '0 12px 40px rgba(47, 137, 255, 0.3)';
    });
    
    signatureContainer.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  }
  
  // Tema değişiminde animasyonları yenile
  document.addEventListener('themeChanged', function() {
    nameLetters.forEach((letter, index) => {
      letter.style.animation = 'none';
      setTimeout(() => {
        letter.style.animation = '';
      }, 10);
    });
  });
}

/* ===== PERFORMANS OPTİMİZASYONLARI ===== */

// Sayfa yükleme performansı
document.addEventListener('DOMContentLoaded', function() {
  // Hero kartlarını hemen görünür yap
  document.querySelectorAll('.hero-card-content').forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.visibility = 'visible';
    card.style.display = 'flex';
  });

  // Progress bar'ları hemen görünür yap
  document.querySelectorAll('.hero-card-bar').forEach((bar) => {
    bar.style.width = '100%';
    bar.style.transform = 'scaleX(1)';
    bar.style.opacity = '1';
    bar.style.visibility = 'visible';
  });

  // Hero kart değerlerini hemen görünür yap
  document.querySelectorAll('.hero-card-value').forEach((value) => {
    value.style.opacity = '1';
    value.style.visibility = 'visible';
    value.style.display = 'block';
  });

  // Critical rendering path optimizasyonu
  const initPerformanceCards = function() {
    // Lazy loading için intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Performans kartları için özel animasyon
    document.querySelectorAll('.hero-card-content').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // 100% performans göstergesi
    document.querySelectorAll('.hero-card-bar').forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = '100%';
        bar.style.transform = 'scaleX(1)';
      }, 1000 + (index * 300));
    });
  };

  // requestIdleCallback fallback
  if (window.requestIdleCallback) {
    requestIdleCallback(initPerformanceCards);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(initPerformanceCards, 100);
  }
});

// Sayfa yüklendiğinde hero kartlarını zorla görünür yap
window.addEventListener('load', function() {
  // Hero kartlarını zorla görünür yap
  document.querySelectorAll('.hero-card-content').forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.visibility = 'visible';
    card.style.display = 'flex';
    card.style.zIndex = '10';
  });

  // Progress bar'ları zorla görünür yap
  document.querySelectorAll('.hero-card-bar').forEach((bar) => {
    bar.style.width = '100%';
    bar.style.transform = 'scaleX(1)';
    bar.style.opacity = '1';
    bar.style.visibility = 'visible';
  });

  // Hero kart değerlerini zorla görünür yap
  document.querySelectorAll('.hero-card-value').forEach((value) => {
    value.style.opacity = '1';
    value.style.visibility = 'visible';
    value.style.display = 'block';
  });

  // Tasarım ve Performans kartlarını özel olarak zorla görünür yap
  const designCard = document.querySelector('.card-demo:nth-child(3) .hero-card-content');
  const performanceCard = document.querySelector('.card-demo:nth-child(4) .hero-card-content');
  
  if (designCard) {
    designCard.style.opacity = '1';
    designCard.style.visibility = 'visible';
    designCard.style.display = 'flex';
    designCard.style.zIndex = '15';
  }
  
  if (performanceCard) {
    performanceCard.style.opacity = '1';
    performanceCard.style.visibility = 'visible';
    performanceCard.style.display = 'flex';
    performanceCard.style.zIndex = '15';
  }

  // Tasarım ve Performans progress bar'larını zorla görünür yap
  const designBar = document.querySelector('.card-demo:nth-child(3) .hero-card-bar');
  const performanceBar = document.querySelector('.card-demo:nth-child(4) .hero-card-bar');
  
  if (designBar) {
    designBar.style.width = '100%';
    designBar.style.opacity = '1';
    designBar.style.visibility = 'visible';
    designBar.style.zIndex = '10';
  }
  
  if (performanceBar) {
    performanceBar.style.width = '100%';
    performanceBar.style.opacity = '1';
    performanceBar.style.visibility = 'visible';
    performanceBar.style.zIndex = '10';
  }

  // Tasarım ve Performans değerlerini zorla görünür yap
  const designValue = document.querySelector('.card-demo:nth-child(3) .hero-card-value');
  const performanceValue = document.querySelector('.card-demo:nth-child(4) .hero-card-value');
  
  if (designValue) {
    designValue.style.opacity = '1';
    designValue.style.visibility = 'visible';
    designValue.style.display = 'block';
    designValue.style.zIndex = '10';
  }
  
  if (performanceValue) {
    performanceValue.style.opacity = '1';
    performanceValue.style.visibility = 'visible';
    performanceValue.style.display = 'block';
    performanceValue.style.zIndex = '10';
  }
});

// Memory leak önleme
window.addEventListener('beforeunload', function() {
  // GSAP temizleme
  if (window.gsap) {
    gsap.killTweensOf('*');
  }
  // ScrollTrigger temizleme
  if (window.ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
});

// Performans metrikleri
const performanceMetrics = {
  loadTime: 0,
  firstPaint: 0,
  firstContentfulPaint: 0,
  largestContentfulPaint: 0,
  
  measure() {
    // Sayfa yükleme süresi
    this.loadTime = performance.now();
    
    // Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-paint') this.firstPaint = entry.startTime;
            if (entry.name === 'first-contentful-paint') this.firstContentfulPaint = entry.startTime;
          }
          if (entry.entryType === 'largest-contentful-paint') {
            this.largestContentfulPaint = entry.startTime;
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }
  },
  
  // 100% performans raporu
  getReport() {
    return {
      speed: 100,
      security: 100,
      design: 100,
      performance: 100,
      loadTime: this.loadTime,
      fcp: this.firstContentfulPaint
    };
  }
};

// Performans ölçümünü başlat
performanceMetrics.measure();

// Tasarım ve çalışma zamanı performansını ölçüp kartlara yaz
function measureDesignQuality() {
  let score = 100;
  try {
    const el = document.querySelector('.card-demo:nth-child(3) .hero-card-content') || document.querySelector('.hero-card-content');
    if (!el) return 100;
    const cs = getComputedStyle(el);
    const borderRadius = parseFloat(cs.borderRadius) || 0;
    const boxShadow = cs.boxShadow;
    const contrastBase = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--contrast') || '1');
    if (borderRadius < 8) score -= 5;
    if (!boxShadow || boxShadow === 'none') score -= 5;
    if (contrastBase < 1) score -= 5;
    score = Math.max(0, Math.min(100, Math.round(score)));
  } catch (e) {}
  return score;
}

function measureRuntimePerformance() {
  return new Promise((resolve) => {
    let frames = 0;
    const start = performance.now();
    function onFrame() {
      frames += 1;
      if (performance.now() - start < 500) {
        requestAnimationFrame(onFrame);
      } else {
        const fps = frames / 0.5;
        let score = 100;
        if (fps < 55) score -= 10;
        if (fps < 45) score -= 20;
        if (fps < 30) score -= 40;
        score = Math.max(0, Math.min(100, Math.round(score)));
        resolve(score);
      }
    }
    requestAnimationFrame(onFrame);
  });
}

async function updateDesignAndPerformanceCards() {
  try {
    const designScore = measureDesignQuality();
    const runtimeScore = await measureRuntimePerformance();
    const designBar = document.querySelector('.card-demo:nth-child(3) .hero-card-bar');
    const designValue = document.querySelector('.card-demo:nth-child(3) .hero-card-value');
    if (designBar) designBar.style.width = designScore + '%';
    if (designValue) designValue.textContent = designScore + '%';
    const perfBar = document.querySelector('.card-demo:nth-child(4) .hero-card-bar');
    const perfValue = document.querySelector('.card-demo:nth-child(4) .hero-card-value');
    if (perfBar) perfBar.style.width = runtimeScore + '%';
    if (perfValue) perfValue.textContent = runtimeScore + '%';
  } catch (e) {}
}

window.addEventListener('load', function() {
  updateDesignAndPerformanceCards();
  setTimeout(updateDesignAndPerformanceCards, 1200);
});

// ===== MEVCUT JAVASCRIPT DEVAM EDİYOR =====

(function () {
  // JS aktif olduğunu HTML'e belirt
  try {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  } catch (e) {}
  
  // Yıl
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tema sistemi
  var currentTheme = localStorage.getItem('theme') || 'ocean-blue';
  document.body.setAttribute('data-theme', currentTheme);
  
  // Başlangıçta tema animasyonlarını anında ayarla (gecikmesiz)
  updateThemeAnimations(currentTheme);
  
  // Sayfa yüklendiğinde en üste scroll yap (yenileme butonuna basınca ana menüye dön)
  window.addEventListener('load', function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  
  // Sayfa yenilendiğinde de en üste dön
  window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
  });
  
  // Tema değiştirme fonksiyonları
  window.changeTheme = function(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    
    // Aktif tema seçeneğini güncelle
    document.querySelectorAll('.theme-option').forEach(function(option) {
      option.classList.remove('active');
    });
    document.querySelector('[data-theme="' + theme + '"]').classList.add('active');
    
    // Animasyonları güncelle
    updateThemeAnimations(theme);
    
    // Modal'ı kapat
    closeThemeSelector();
  };
  
  // Tema animasyonlarını güncelle
  function updateThemeAnimations(theme) {
    // GSAP animasyonlarını tema değişkenlerine göre güncelle
    if (window.gsap && window.ScrollTrigger) {
      // Mevcut tüm ScrollTrigger'ları öldür ve temiz bir kurulum yap
      try { ScrollTrigger.getAll().forEach(function(t){ t.kill(); }); } catch (e) {}
      try { gsap.killTweensOf('.reveal, .parallax-y'); } catch (e) {}

      // Reveal animasyonları
      gsap.utils.toArray('.reveal').forEach(function(el) {
        var duration = getComputedStyle(document.documentElement).getPropertyValue('--animation-duration') || '0.3s';
        var ease = getComputedStyle(document.documentElement).getPropertyValue('--animation-ease') || 'ease';
        var durationValue = Math.max(0.15, parseFloat(duration));
        var easeFunction = 'power3.out';
        if (ease.includes('cubic-bezier')) easeFunction = ease;
        else if (ease.includes('bounce')) easeFunction = 'bounce.out';
        else if (ease.includes('elastic')) easeFunction = 'elastic.out';

        var from = { y: 20, opacity: 0 };
        if (el.classList.contains('slide-left')) from = { x: 24, opacity: 0 };
        if (el.classList.contains('slide-right')) from = { x: -24, opacity: 0 };
        if (el.classList.contains('zoom-in')) from = { scale: 0.95, opacity: 0 };
        if (el.classList.contains('rotate-in')) from = { rotation: -2, scale: 0.98, opacity: 0 };
        if (el.classList.contains('tilt')) from = { rotationX: 6, rotationY: -6, opacity: 0, transformPerspective: 800 };

        gsap.fromTo(el, from, {
          rotationX: 0,
          rotationY: 0,
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: durationValue,
          ease: easeFunction,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onStart: function () { el.classList.add('is-visible'); },
        });
      });

      // Parallax Y (mobilde devre dışı)
      var isMobile = window.matchMedia('(max-width: 640px)').matches;
      if (!isMobile) {
        gsap.utils.toArray('.parallax-y').forEach(function(el) {
          var speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.25;
          if (theme === 'sunset-orange') speed *= 1.5;
          else if (theme === 'royal-purple') speed *= 0.7;
          else if (theme === 'midnight-dark') speed *= 0.5;

          gsap.to(el, {
            yPercent: function () { return -speed * 100; },
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    }
    
    // CSS animasyonlarını yeniden başlat
    document.querySelectorAll('.animate-slow-pulse').forEach(function(el) {
      el.style.animation = 'none';
      el.offsetHeight; // Reflow
      el.style.animation = null;
    });
  }
  
  window.openThemeSelector = function() {
    document.getElementById('themeSelector').classList.add('active');
    // Aktif tema seçeneğini işaretle
    document.querySelectorAll('.theme-option').forEach(function(option) {
      option.classList.remove('active');
    });
    document.querySelector('[data-theme="' + currentTheme + '"]').classList.add('active');
  };
  
  window.closeThemeSelector = function() {
    document.getElementById('themeSelector').classList.remove('active');
  };
  
  // Modal dışına tıklayınca kapat
  document.getElementById('themeSelector').addEventListener('click', function(e) {
    if (e.target === this) {
      closeThemeSelector();
    }
  });
  
  // ESC tuşu ile kapat
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeThemeSelector();
    }
  });

  // Reduce motion tercihi
  var prefersReducedMotion = false;
  try {
    prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      try { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); }); } catch (e) {}
    }
  } catch (e) {}

  // Lenis smooth scroll
  var lenis = null;
  if (!prefersReducedMotion) {
    try {
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1.2,
      });
    } catch (e) {
      // Lenis yüklenemezse standart scroll ile devam
    }
  }

  if (lenis) {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // GSAP + ScrollTrigger
  try { if (!prefersReducedMotion) gsap.registerPlugin(ScrollTrigger); } catch (e) {}

  // Genel reveal/parallax kurulumunu updateThemeAnimations üstleniyor
  if (!( !prefersReducedMotion && window.gsap && window.ScrollTrigger)) {
    // GSAP yoksa içerikler görünür olsun
    try { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); }); } catch (e) {}
  }

  // Skew efekti (görseller için örnek)
  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    var proxy = { skew: 0 };
    var clamp = gsap.utils.clamp(-6, 6);
    ScrollTrigger.create({
      onUpdate: function (self) {
        var skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to('.template-thumb', { skewY: skew, transformOrigin: 'center', duration: 0.6, ease: 'power3', overwrite: true });
        }
      },
    });
    gsap.set('.template-thumb', { transformOrigin: 'center', force3D: true });
  }

  // Navbar küçülme efekti
  var lastY = 0;
  var header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    var y = window.scrollY || 0;
    if (!header) return;
    if (y > 10) {
      header.style.boxShadow = '0 10px 30px rgba(0,0,0,.3)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastY = y;
  }, { passive: true });

  // Magnetic buton hissi ve mouse tracking
  document.querySelectorAll('.btn-primary').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      
      // Magnetic efekt
      gsap.to(btn, { x: x * 0.1, y: y * 0.2, duration: 0.3, ease: 'power3.out' });
      
      // Mouse pozisyonunu CSS değişkeni olarak ayarla (Ocean Blue tema için)
      var mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      var mouseY = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty('--mouse-x', mouseX + '%');
      btn.style.setProperty('--mouse-y', mouseY + '%');
    });
    btn.addEventListener('mouseleave', function () {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' });
    });
  });

  // Basit demo form işlemi
  try {
    var form = document.querySelector('#iletisim form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        var name = (fd.get('name') || '').toString().trim();
        var email = (fd.get('email') || '').toString().trim();
        if (!name || !email) {
          alert('Lütfen ad ve e-posta bilgilerini doldurun.');
          return;
        }
        alert('Teşekkürler! Mesajınız alındı. (Demo)');
        form.reset();
      });
    }
  } catch (e) {}

  // Şablon filtreleri ve önizleme modali
  (function () {
    try {
      var pills = Array.prototype.slice.call(document.querySelectorAll('.pill'));
      var cards = Array.prototype.slice.call(document.querySelectorAll('.template-card'));
      pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
          pills.forEach(function (p) { p.classList.remove('is-active'); });
          pill.classList.add('is-active');
          var filter = pill.getAttribute('data-filter');
          cards.forEach(function (card) {
            var cat = card.getAttribute('data-category');
            var show = filter === 'all' || cat === filter;
            card.style.display = show ? '' : 'none';
          });
        });
      });

      // Modal altyapısı
      var modal = document.createElement('div');
      modal.className = 'fixed inset-0 z-[100] hidden items-center justify-center p-4';
      modal.innerHTML = '\n        <div class="absolute inset-0 bg-black/70"></div>\n        <div class="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-glow">\n          <div class="flex items-center justify-between border-b border-white/10 p-3">\n            <strong>Şablon Önizleme</strong>\n            <button class="btn-ghost btn-close">Kapat</button>\n          </div>\n          <div class="aspect-video w-full bg-slate-900">\n            <iframe src="about:blank" title="Preview" class="h-full w-full" referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts"></iframe>\n          </div>\n        </div>';
      document.body.appendChild(modal);
      var modalFrame = modal.querySelector('iframe');
      var modalClose = modal.querySelector('.btn-close');
      modal.addEventListener('click', function (e) { if (e.target === modal) hideModal(); });
      modalClose.addEventListener('click', hideModal);
      function showModal(src) {
        try { modalFrame.src = src; } catch (e) {}
        modal.classList.remove('hidden');
        if (window.gsap) gsap.fromTo(modal.querySelector('.relative'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .35, ease: 'power2.out' });
      }
      function hideModal() {
        modal.classList.add('hidden');
        try { modalFrame.src = 'about:blank'; } catch (e) {}
      }

      document.querySelectorAll('.template-card .btn-preview').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.template-card');
          var src = card && card.getAttribute('data-template');
          if (src) showModal(src);
        });
      });
    } catch (e) {}
  })();
})();

// İsim animasyonlarını başlat
document.addEventListener('DOMContentLoaded', function() {
  initDeveloperSignature();
});

// Sayfa yüklendiğinde de başlat
window.addEventListener('load', function() {
  initDeveloperSignature();
});