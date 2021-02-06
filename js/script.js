function switchItems(btnS,picS,nameS) {
    let elementsBtn = document.querySelectorAll(btnS),
        elementsPic = document.querySelectorAll(picS),
        elementText = document.querySelector(nameS);
        
        function selectItem () {
            elementsBtn.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            let dataCarColor = this.getAttribute('data-car-color'),
            dataColor = this.getAttribute('data-color');
            elementText.textContent = `Цвет: ${dataColor}`;
            selectColor(dataCarColor);
        }
        function selectColor(dataCarColor) {
            elementsPic.forEach(
                item => {
                    item.classList.contains(dataCarColor) ? item.classList.add('active') : item.classList.remove('active')
                }
            )
        }
    elementsBtn.forEach(e => e.addEventListener('click',selectItem));
}
switchItems('.model-construct__top-column-colors li','.model-construct__top-column-wrap','.model-construct__top-column-title');
switchItems('.calc-param__colors li','.calc-img__wrap','.calc-param__colors p');




new Swiper('.model__block-img-wrap', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    
});

new Swiper('.other-model__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.other-model__container'
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    on: {
        resize: function(swiper) {
            if(window.innerWidth <992 && window.innerWidth >676) swiper.params.slidesPerView = 2;
            else if(window.innerWidth <675) swiper.params.slidesPerView = 1;
            else swiper.params.slidesPerView = 3;
        }
    }
});

new Swiper('.slider-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
});

new Swiper('.gallery-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.other-model__container'
    },
    loop: true,
    
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    spaceBetween: 12,
    slidesPerView: 4,
    on: {
        resize: function(swiper) {
            if (window.innerWidth <= 1100 && window.innerWidth >=851) swiper.params.slidesPerView = 3;
            else if(window.innerWidth <= 850 && window.innerWidth >= 551) swiper.params.slidesPerView = 2;
            else if(window.innerWidth <= 550) swiper.params.slidesPerView = 1;
            else swiper.params.slidesPerView = 4;
        }
    }
});


new Swiper('.trade-calc__column-item', {
    autoplay: {
        delay: 3000,
    }
});

new Swiper('.trade-calc__column-container',{});

;
//============МЕНЮ БУРГЕР==========================================================
function burger() {
    const menu = document.getElementById('hMenu'),
        burger = document.querySelector('.header__menu-burger'),
        menuItem = menu.querySelectorAll('a');
    
    function openMenu() {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    }
    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
    burger.addEventListener('click',openMenu);
    window.addEventListener('click',() => {
        menuItem.forEach(el => {
            if(menu.classList.contains('active')) {
                el.addEventListener('click', closeMenu)}
        });
    })
}
burger();

//============Залипалка=========================================================
function fixedNav() {
    const itemNav = document.querySelector('.header__menu'),
        header    = document.querySelector('header');
    let scrollStart = itemNav.offsetTop
    function scroll() {
        let scrolled = window.pageYOffset;
        scrolled > scrollStart ? itemNav.classList.add('fixed') : 
        itemNav.classList.remove('fixed');
    }
    window.onscroll = scroll;
    window.onresize = scroll;
}
fixedNav();
//==============================================================================
;
//=======АККОРДЕОН=============================================
function accordion() {
    const elements = document.querySelectorAll('.js-accordion');
    let active;
    function showElements() {
        let next = this.nextElementSibling;
        this.classList.add('active');
        next.style.height = `${next.scrollHeight}px`;
        if (active) {
            active.classList.remove('active');
            active.nextElementSibling.style.height = null;
        }
        active = (active === this) ? 0 : this;
    }
    elements.forEach(item => item.addEventListener('click', showElements));
}
accordion();
//==============================================================

;
//=========== ТАБЫ ===========================================================================
function tab(s1, s2) {
    let tabHeader = document.querySelectorAll(s1),
        tabContent = document.querySelectorAll(s2),
        tabName;
    tabHeader.forEach(item => item.addEventListener('click', selectTab));
    function selectTab() {
        tabHeader.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active')); 
    }
}
tab('.tab__link','.tab');
//==============================================================================================
;
// === Маска телефона ====================================================================================================
function maskPhone(selector, masked = '+7(___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		let i = 0,
			newValue = template.replace(/[_\d]/g, newVal);
			function newVal(a) {return i < val.length ? val.charAt(i++) || def.charAt(i) : a;}
		i = newValue.indexOf("_");
		if (i !== -1) {newValue = newValue.slice(0, i);}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {return `\\d{1,${a.length}}`;}).replace(/[+()]/g, "\\$&");
		reg = new RegExp(`^${reg}$`);
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {this.value = newValue;}
		if (event.type === "blur" && this.value.length < 5) {this.value = "";}
	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}
maskPhone('input[type="tel"]');
//========================================================================================================================;
//=== Модалки =====================================================================================
function ShowBanner(btnSelector,bannerSelector) {
    const btn = document.querySelectorAll(btnSelector);
    btn.forEach(item => item.addEventListener('click', ()=> banner()));
    const banner = () => {
        const box = document.querySelector(bannerSelector),
            hMenu = document.querySelector('#hMenu'),
            boxSpan = box.querySelector('span');
        box.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.body.style.paddingRight = ``;
            hMenu.style.paddingRight = ``;
        } 
        else {
            document.body.style.paddingRight = `17px`;
            hMenu.style.paddingRight = `17px`;
        };
        function closeBanner() {
            box.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = ``;
            hMenu.style.paddingRight = ``;
            this.parentElement.removeEventListener('click',closeBanner);
        };
        boxSpan.parentElement.addEventListener('click',closeBanner);
    }
}
ShowBanner('.js-credit','.banner');
ShowBanner('.js-buy','.buy');
//=================================================================================================


