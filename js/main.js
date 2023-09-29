window.addEventListener("load", event => {

    // Fixed nav

    const mainNav = document.querySelector('.mainNav');

    window.onscroll = function () {
        if (window.pageYOffset >= 60) {
            mainNav.classList.add("fixed");
        } else {
            mainNav.classList.remove("fixed");
        }
    }

    // Open Menu Mobile
    const iconNav = document.querySelector('.mainNav__icon'),
        link = document.querySelectorAll('.mainNav__link');
    iconNav.addEventListener('click', openNavMobile);

    function openNavMobile() {
        if (mainNav.classList.contains('navOpen')) {
            mainNav.classList.remove('navOpen');
            document.querySelector('body').style.overflowY = "initial";
            if (window.innerWidth < 799) {
                setTimeout(() => {
                    document.querySelector('.mainNav .mainNav__wrapper').style.height = "auto";
                }, 600);
            }

        } else {
            mainNav.classList.add('navOpen');
            document.querySelector('body').style.overflowY = "hidden";
            if (window.innerWidth < 799) {
                document.querySelector('.mainNav.navOpen .mainNav__wrapper').style.height = window.innerHeight + "px";
            }
        }
    }

    if (window.innerWidth < 799) {
        link.forEach(function (el) {
            el.addEventListener("click", openNavMobile)
        });
    }

    // Add Items Card

    const sections = [{
            label: "Giảm giá!",
            class: "card__sale",
            title: "Lino Dress",
            priceFinal: "450.000₫",
            priceOriginal: "590.000₫",
            image: "assets/images/img-1.jpg",
            url: "details.html",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "",
            image: "assets/images/img-2.jpg",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "590.000₫",
            image: "assets/images/img-3.jpg",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Lino Dress",
            priceFinal: "500.000₫",
            priceOriginal: "",
            image: "assets/images/img-4.jpg",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Komi Dress",
            priceFinal: "590.000₫",
            priceOriginal: "",
            image: "assets/images/img-5.jpg",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "590.000₫",
            image: "assets/images/img-6.jpg",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Komi Dress",
            priceFinal: "590.000₫",
            priceOriginal: "",
            image: "assets/images/img-7.jpg",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "590.000₫",
            image: "assets/images/img-8.jpg",
            url: "",
        },
        {
            label: "Mới",
            class: "card__new",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "",
            image: "assets/images/img-9.jpg",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Komi Dress",
            priceFinal: "450.000₫",
            priceOriginal: "590.000₫",
            image: "assets/images/img-10.jpg",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Komi Dress",
            priceFinal: "590.000₫",
            priceOriginal: "",
            image: "assets/images/img-11.jpg",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Komi Dress",
            priceFinal: "590.000₫",
            priceOriginal: "690.000₫",
            image: "assets/images/img-12.jpg",
            url: "",
        },
    ];

    const cards = document.querySelector('.cards');

    sections.forEach(function (el) {
        const template =`
            <a href="${el.url}" target="_blank" rel="noopenner" class="card">
                <div class="card__item">
                    <div class="${el.class}">${el.label}</div>
                    <div class="card__image">
                        <img src="${el.image}" alt="${el.title}">
                    </div>
        
                    <div class="card__content">
                        <article class="card__text">
                            <h2 class="card__title">${el.title}</h2>
                            <div class="card__price">
                                <p class="card__priceFinal">${el.priceFinal}</p>
                                <p class="card__priceOriginal">${el.priceOriginal}</p>
                            </div>
                        </article>
        
                        <div class="card__info">
                            <p class="card__detail"><span>Chi tiết</span> <i class="card__icon"><img src="assets/icon-plus.svg" alt="" /></i></p>
                            <button class="card__btn"><span>Xem</span></button>
                        </div>
                    </div>
                </div>
            </a>
        `;

        cards.insertAdjacentHTML('beforeend', template);

    })

    ///////// Animate Modules //////////
    const card = document.querySelectorAll('.card');
    let delay = 1;


    const anime = (element, animation) => {
        if (element.offsetParent != null) {

            if (!element.classList.contains(animation)) {
                element.classList.add(animation);

                element.style.animationDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        }
    };

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };

    const isItemVisible = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 300) {
                anime(element, animation);
            }
        }
    };


    // for viewport
    const animeItem = (item, animation) => {
        item.forEach(item => {
            isItemVisible(item, animation);
        })
        delay = 1;
    };


    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 300) {
            animeItem(card, "anime");
        }

    });
    // to load the animations

    animeItem(card, "anime");

    // swiper    

    var mySwiper = new Swiper('.sliderHeading__slider.swiper-container', {
        effect: '',
        loop: false,
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sliderHeading .swiper-button-next',
            prevEl: '.sliderHeading .swiper-button-prev'
        },
        pagination: {
            el: '.sliderHeading .swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        
        
        
    });

    // open Modal

    const btnVideo = document.querySelector('.btn'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        body = document.querySelector('body');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);

    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');
        }, 300);

        modalVideo.style.overflow = "hidden";

        if (window.innerWidth < 799) {
            body.style.overflow = "hidden";
        }
    }

    function closeVideo() {
        modalVideo.classList.remove('open');

        modalVideo.style.overflow = "visible";

        if (window.innerWidth < 799) {
            body.style.overflow = "visible";
        }
    };

    


    // /* Back to top */

    // var toTop = document.getElementById("scrollme");

    // toTop.addEventListener("click", function () {
    //     scrollToTop(600);
    // });

    // function scrollToTop(scrollDuration) {
    //     var scrollStep = -window.scrollY / (scrollDuration / 15),
    //         scrollInterval = setInterval(function () {
    //             if (window.scrollY != 0) {
    //                 window.scrollBy(0, scrollStep);
    //             } else clearInterval(scrollInterval);
    //     }, 15);

    // }
    
});