
    // Hero Carousel Logic (3-Slide)
    let currentHeroSlide = 0;
    const totalHeroSlides = 3;
    let heroAutoplayTimer = setInterval(nextHeroSlide, 5000);

    function updateHeroCarousel() {
      for (let i = 0; i < totalHeroSlides; i++) {
        const textEl = document.getElementById('slide-text-' + i);
        const imgEl = document.getElementById('slide-img-' + i);
        const dotEl = document.getElementById('dot-' + i);
        
        if (!textEl || !imgEl || !dotEl) continue;

        if (i === currentHeroSlide) {
          textEl.classList.add('active');
          imgEl.style.opacity = '1';
          imgEl.style.zIndex = '10';
          dotEl.style.backgroundColor = getDotColor(i);
        } else {
          textEl.classList.remove('active');
          imgEl.style.opacity = '0';
          imgEl.style.zIndex = '0';
          dotEl.style.backgroundColor = '#d6d3d1';
        }
      }
    }

    function getDotColor(index) {
      if (index === 0) return '#68785B'; // green (Nature)
      if (index === 1) return '#64748B'; // blue-grey (Self)
      if (index === 2) return '#C87952'; // orange (Creation)
      return '#68785B';
    }

    function nextHeroSlide() {
      currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
      updateHeroCarousel();
      resetAutoplay();
    }

    function prevHeroSlide() {
      currentHeroSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
      updateHeroCarousel();
      resetAutoplay();
    }

    function setHeroSlide(index) {
      currentHeroSlide = index;
      updateHeroCarousel();
      resetAutoplay();
    }

    function resetAutoplay() {
      clearInterval(heroAutoplayTimer);
      heroAutoplayTimer = setInterval(nextHeroSlide, 5000);
    }
  