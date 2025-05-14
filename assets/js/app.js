function setVhUnit() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVhUnit);
window.addEventListener('orientationchange', setVhUnit);
window.addEventListener('DOMContentLoaded', setVhUnit);

const mobNav = document.querySelectorAll('.btn-burger');

mobNav.forEach(el => {
  el.addEventListener('click', function () {
    el.classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.header-bottom').classList.toggle('active');
  });
});

const mobFilter = document.querySelectorAll('.btn-filter');

mobFilter.forEach(el => {
  el.addEventListener('click', function () {
    el.classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.csn-filter').classList.toggle('active');
  });
});

const mobFilterClose = document.querySelectorAll('.btn-close');

mobFilterClose.forEach(el => {
  el.addEventListener('click', function () {
    document.body.classList.remove('lock');
    document.querySelector('.csn-filter').classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelectorAll('.popup-loop');

  popup.forEach((el, i) => {
    const popupLink = el.querySelector('.popup-link');
    const popupWrap = el.querySelector('.popup-wrap');

    if (popupWrap && !popupWrap.id) {
      popupWrap.id = `popup-${i}`;
    }

    if (popupLink && popupWrap) {
      popupLink.addEventListener("click", function (e) {
        e.preventDefault();
        Fancybox.show([
          {
            src: `#${popupWrap.id}`,
            type: "inline"
          }
        ], {
          autoFocus: false,
          dragToClose: false,
        });
      });
    }
  });
});

const linkPopup = document.querySelectorAll('.link__popup');
linkPopup.forEach((el, index) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    let src = el.dataset.src;
    Fancybox.show([{ src: src }], { type: "inline", autoFocus: false, dragToClose: false, });
    
  });
});


const childrenMenus = document.querySelectorAll('.dropdowns');

childrenMenus.forEach(el => {
  const id = el.querySelector('a').dataset.children;
  const subMenu = document.getElementById(id);
  if (subMenu) {
    el.appendChild(subMenu);
  }

});

const searchInput = document.querySelector('#search');
const searchList = document.querySelector('.form-wrap ul');
const searchLabel = document.querySelector('.form-wrap label');


searchInput.addEventListener('focus', () => {
  searchList.classList.add('active');
  searchLabel.classList.add('active');
});


searchLabel.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.focus();
  searchLabel.classList.add('active');
  searchList.classList.add('active');
});


searchList.addEventListener("click", (e) => {
  e.stopPropagation();
});


document.addEventListener("click", (e) => {
  if (
    !searchInput.contains(e.target) &&
    !searchLabel.contains(e.target) &&
    !searchList.contains(e.target)
  ) {
    searchList.classList.remove('active');
    searchLabel.classList.remove('active');
  }
});


const searchListItem = document.querySelectorAll('.form-wrap ul li'),
  postTypeInput = document.querySelector('input[name="post_type"]');

searchListItem.forEach(item => {
  item.addEventListener("click", (e) => {
    searchInput.focus();
    searchListItem.forEach(li => li.classList.remove('active'));
    item.classList.add('active');
    const currentItemmText = item.textContent;
    searchLabel.querySelector('.label-title').textContent = currentItemmText;
    const selectedType = item.getAttribute('data-type');
    if (postTypeInput) {
      postTypeInput.value = selectedType;
    }
  });
});

const headerLangBtn = document.querySelector('.header__lang button');

headerLangBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector('.header__lang').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.icon-lang').forEach(function (el) {
    const langCode = el.dataset.langName;

    if (langCode) {
      const flagPath = `assets/images/src/flags/${langCode.toLowerCase()}.svg`;

      const img = document.createElement('img');
      img.src = flagPath;
      img.alt = langCode;

      el.prepend(img);
    }
  });

  document.querySelectorAll('.icon-country').forEach(function (el) {
    const countryCode = el.dataset.countryName;

    if (countryCode) {
      const flagPath = `assets/images/src/flags/${countryCode.toLowerCase()}.svg`;

      const img = document.createElement('img');
      img.src = flagPath;
      img.alt = countryCode;

      el.prepend(img);
    }
  });

});

document.addEventListener("DOMContentLoaded", function () {

  function checkShowMoreButton(wrapper) {
    const textItem = wrapper.querySelector('.comment-body__right-text-item.active');
    if (!textItem) return;

    const oldBtn = wrapper.querySelector('.show-more');
    if (oldBtn) oldBtn.remove();

    const p = textItem.querySelector('p');
    if (!p) return;

    if (p.scrollHeight > 72) {
      const newBtn = document.createElement('div');
      newBtn.classList.add('show-more');
      newBtn.innerHTML = 'Read&nbsp;<span>more</span>';
      wrapper.appendChild(newBtn);

      newBtn.addEventListener('click', function () {
        wrapper.classList.toggle('full');
        wrapper.classList.toggle('opened');

        const span = newBtn.querySelector('span');
        if (span) {
          span.textContent = wrapper.classList.contains('full') ? 'less' : 'more';
        }
      });
    } else {
      wrapper.classList.add('full');
    }
  }

  document.querySelectorAll('.comment-body__right-text').forEach(function (wrapper) {
    checkShowMoreButton(wrapper);
  });

  const listItems = document.querySelectorAll('.comment-body__right-meta-header ul li');

  listItems.forEach(function (li, index) {
    li.addEventListener('click', function () {
      const parent = li.closest('.comment-body__right');
      const textWrapper = parent.querySelector('.comment-body__right-text');
      const textItems = textWrapper.querySelectorAll('.comment-body__right-text-item');

      textItems.forEach(item => item.classList.remove('active'));
      if (textItems[index]) {
        textItems[index].classList.add('active');
      }

      textWrapper.classList.remove('full', 'opened');

      checkShowMoreButton(textWrapper);
    });
  });
});


const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const accordionTitle = accordion.querySelectorAll('.accordion__title');
  accordionTitle.forEach(item => {
    if (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        const accordionBody = this.nextElementSibling;
        if (accordionBody.style.maxHeight) {
          accordionBody.style.maxHeight = null;
        } else {
          accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";

        }
      });
    }
  });
});

var formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  }
};

var slider = document.getElementById('rating');
if (slider) {
  noUiSlider.create(slider, {
    start: [1, 5],
    connect: true,
    step: 0.1,
    range: {
      'min': 1,
      'max': 5
    }
  });
  let ratingMin = document.querySelector('.rating-min');
  let ratingMax = document.querySelector('.rating-max');

  slider.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      ratingMax.value = parseFloat(value).toFixed(1);
    } else {
      ratingMin.value = parseFloat(value).toFixed(1);
    }
  });
  ratingMax.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
  });
  ratingMin.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
  });
}
var established = document.getElementById('established');
if (established) {
  noUiSlider.create(established, {
    start: [2012, 2025],
    connect: true,
    range: {
      'min': 2012,
      'max': 2025
    }
  });
  let establishedMin = document.querySelector('.established-min');
  let establishedMax = document.querySelector('.established-max');

  established.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      establishedMax.value = Math.round(value);
    } else {
      establishedMin.value = Math.round(value);
    }
  });
  establishedMax.addEventListener('change', function () {
    established.noUiSlider.set([null, this.value]);
  });
  establishedMin.addEventListener('change', function () {
    established.noUiSlider.set([this.value, null]);
  });
}
var deposit = document.getElementById('deposit');
if (deposit) {
  noUiSlider.create(deposit, {
    start: [500, 5000],
    step: 100,
    connect: true,
    range: {
      'min': 500,
      'max': 5000
    }
  });
  let depositMin = document.querySelector('.deposit-min');
  let depositMax = document.querySelector('.deposit-max');

  deposit.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      depositMax.value = Math.round(value);
    } else {
      depositMin.value = Math.round(value);
    }
  });
  depositMax.addEventListener('change', function () {
    deposit.noUiSlider.set([null, this.value]);
  });
  depositMin.addEventListener('change', function () {
    deposit.noUiSlider.set([this.value, null]);
  });
}

var price = document.getElementById('price');
if (price) {
  noUiSlider.create(price, {
    start: [500, 5000],
    step: 100,
    connect: true,
    range: {
      'min': 500,
      'max': 5000
    }
  });
  let priceMin = document.querySelector('.price-min');
  let priceMax = document.querySelector('.price-max');

  price.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      priceMax.value = Math.round(value);
    } else {
      priceMin.value = Math.round(value);
    }
  });
  priceMax.addEventListener('change', function () {
    price.noUiSlider.set([null, this.value]);
  });
  priceMin.addEventListener('change', function () {
    price.noUiSlider.set([this.value, null]);
  });
}

var wagering = document.getElementById('wagering');
if (wagering) {
  noUiSlider.create(wagering, {
    start: [35, 75],
    step: 5,
    connect: true,
    range: {
      'min': 35,
      'max': 75
    }
  });
  let wageringMin = document.querySelector('.wagering-min');
  let wageringMax = document.querySelector('.wagering-max');

  wagering.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      wageringMax.value = Math.round(value);
    } else {
      wageringMin.value = Math.round(value);
    }
  });
  wageringMax.addEventListener('change', function () {
    wagering.noUiSlider.set([null, this.value]);
  });
  wageringMin.addEventListener('change', function () {
    wagering.noUiSlider.set([this.value, null]);
  });
}




const freePlayBtn = document.getElementById('freePlay');

if (freePlayBtn) {
  freePlayBtn.addEventListener("click", () => {
    document.querySelector('.game-overlay').classList.add('active');
    document.querySelector('.zoom').classList.add('active');
  });
}

const button = document.querySelector('.zoom');
if (button) {
  button.addEventListener('click', fullscreen);
}

document.addEventListener('keydown', function (e) {
  console.log('key press' + e.key);
});

document.addEventListener('webkitfullscreenchange', fullscreenChange);
document.addEventListener('mozfullscreenchange', fullscreenChange);
document.addEventListener('fullscreenchange', fullscreenChange);
document.addEventListener('MSFullscreenChange', fullscreenChange);

function fullscreen() {
  if (document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    const iframe = document.querySelector('.game-overlay__video-wrap iframe');
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
  else {
    document.querySelector('.error').innerHTML = 'Your browser is not supported';
  }
}

function fullscreenChange() {
  if (document.fullscreenEnabled ||
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement) {
    console.log('enter fullscreen');
  }
  else {
    console.log('exit fullscreen');
  }

  const iframe = document.querySelector('iframe');
  iframe.src = iframe.src;
}

const linksHash = document.querySelectorAll('.ancor');

linksHash.forEach(item => {
  item.addEventListener('click', function (e) {
    const href = this.dataset.href,
      scrollTarget = document.getElementById(href);
    if (scrollTarget) {
      e.preventDefault();
      const elementPosition = scrollTarget.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  });
});


const sliders = document.querySelectorAll(".sliders .swiper");
if (sliders) {
  sliders.forEach(el => {
    const count = el.dataset.count,
      countTabl = el.dataset.counttabl,
      countMob = el.dataset.countMob,
      prev = el.dataset.prev,
      next = el.dataset.next,
      pug = el.dataset.pug,
      str = el.dataset.loop === 'true';
    new Swiper(el, {
      speed: 800,
      slidesPerView: countMob,
      spaceBetween: 16,
      //loop: str,
      allowTouchMove: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      navigation: {
        nextEl: "#" + next,
        prevEl: "#" + prev,
      },
      pagination: {
        el: "." + pug ,
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: countTabl,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: count,
          spaceBetween: 20,
          //allowTouchMove: false
        },
      }
    });
  });
}

new PureCounter(
  {
    formater: "en-IN",
    separator: true,
  }
);

document.querySelectorAll('.slider-tabs').forEach(tabs => {
  const buttons = tabs.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});


const list = document.getElementById("languageList");
const input = document.getElementById("languageSearch");

function renderLanguages(filtered = countries) {
  list.innerHTML = '';
  filtered.forEach(lang => {
    const div = document.createElement('div');
    div.className = 'language-item';
    div.innerHTML = `<img src="${lang.flag}" alt="${lang.code}">${lang.name}`;
    div.onclick = () => {
      input.value = lang.name;
      list.innerHTML = '';
    };
    list.appendChild(div);
    console.log(list)
  });
}
if(list){
  renderLanguages(countries);
  input.addEventListener("input", () => {
    const val = input.value.toLowerCase();
    renderLanguages(countries.filter(lang => lang.name.toLowerCase().includes(val)));
  });
}


/* input.addEventListener("focus", () => renderLanguages(countries));
document.addEventListener("click", e => {
  if (!e.target.closest(".language-filter")) {
    list.innerHTML = '';
  }
}); */ 