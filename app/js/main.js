$(function () {
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow: '<button><img class="banner-arrow banner-arrow__prev" src="images/content/arrow-left.svg" alt=""></button>',
        nextArrow: '<button><img class="banner-arrow banner-arrow__nex" src="images/content/arrow-right.svg" alt=""></button>',
    });

    $(".tab").on("click", function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass("tab--active");
        $($(this).parent().siblings().find("div")).removeClass(
            "tabs-contant--active"
        );

        $(this).addClass("tab--active");
        $($(this).attr("href")).addClass("tabs-contant--active");
    });

    $(".products-item__favorite").on("click", function () {
        $(this).toggleClass("products-item__favorite--active");
    });
    $(".products__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button><img class="products__slider-arrow products__slider-arrow__prev" src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button><img class="products__slider-arrow products__slider-arrow__nex" src="images/arrow-black-right.svg" alt=""></button>',
    });
});