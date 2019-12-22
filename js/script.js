if (screen.width < 994) {
    $("#mobileSlider").slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: false,
        nextArrow: false
    })
}
$(window).scroll(() => {
    scrollFunction();
})
const scrollFunction = () => {
    window.pageYOffset > 0 ? $("#fixedMenu").addClass("activeTop") : $("#fixedMenu").removeClass("activeTop");
}
const openMenu = () => {
    $("#fixedMenu").toggleClass("active");
    scrollFunction();
    $("#menuIcon").toggleClass("active");
}
const dontCloseFancy = () => {
    event.stopPropagation();
}
const closeFancy = () => {
    $("#fancyHolder").removeClass("active");
}
const showImg = (i) => {
    const element = $(`.worksSliders .imgBox:nth-child(${i})>img`);
    const source = element.attr("src");
    $("#fancyHolder img").attr("src", source);
    $("#fancyHolder").addClass("active");
}

const openLangOptions = () => {
    $("#langOptions").hasClass("active") ? $("#langOptions").removeClass("active") : $("#langOptions").addClass("active");
}
const openFixedLangOptions = () => {
    $("#fixedLangOptions").hasClass("active") ? $("#fixedLangOptions").removeClass("active") : $("#fixedLangOptions").addClass("active");
}

const changeLang = (i) => {
    const langs = ["AZ", "EN", "RU"];
    $("#langOptions .active").removeClass("active");
    $("#selectedLang").text(langs[i - 1]);
    let a = 1;
    i === 2 ? a = 3 : a = a;
    i === 3 ? a = 5 : a = a;
    $(`#langOptions li:nth-child(${a})`).addClass("active");
    $(`#langOptions li:nth-child(${a + 1})`).addClass("active");
    openLangOptions(4);
    event.stopPropagation();
}
const changeFixedLang = (i) => {
    const langs = ["AZ", "EN", "RU"];
    $("#fixedLangOptions .active").removeClass("active");
    $("#fixedSelectedLang").text(langs[i - 1]);
    let a = 1;
    i === 2 ? a = 3 : a = a;
    i === 3 ? a = 5 : a = a;
    $(`#fixedLangOptions li:nth-child(${a})`).addClass("active");
    $(`#fixedLangOptions li:nth-child(${a + 1})`).addClass("active");
    openFixedLangOptions(4);
    event.stopPropagation();
}
const changePhoto = (i) => {
    $('.slideRight img.active').removeClass("active");
    $(`#slideRight img:nth-child(${i})`).addClass("active");
    $('.slideDots .slideDot.active').removeClass("active");
    $(`.slideDots .slideDot:nth-child(${i})`).addClass("active");
}
$("#testimonies").slick({
    slidesToShow: 3,
    prevArrow: '<div class="testimonialArrow testimonialArrowLeft"><img src="assets/icons/arrow-left.png"/><p>Öncəki</p></div>',
    nextArrow: '<div class="testimonialArrow testimonialArrowRight"><p>Növbəti</p><img src="assets/icons/arrow-right.png"/></div>',
    responsive: [
        {
            breakpoint: 994,
            settings: {
                slidesToShow: 2,
                nextArrow: false,
                prevArrow: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                nextArrow: false,
                prevArrow: false,
            }
        }
    ]
})

$("#worksSlider").slick({
    centerMode: true,
    slidesToShow: 6,
    prevArrow: '<div class="arrow left"><div class="arrowHolder"><img src="assets/fivi/main/left_arrow.png" /><p>Əvvəlki</p></div></div>',
    nextArrow: '<div class="arrow right"><div class="arrowHolder"><p>Sonrakı</p><img src="assets/fivi/main/right_arrow.png" /></div></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: "40px",
                slidesToShow: 4
            }
        },
        {
            breakpoint: 994,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            centerMode: false,
            centerPadding: "0px",
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
