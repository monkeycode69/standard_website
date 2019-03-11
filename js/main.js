$(document).ready(function () {
    // m-nav
    $('.tit .btn').click(function (e) {
        e.preventDefault();
        $('.m-nav').slideToggle();
        $(this).toggleClass('on');
    });
    // banner slider
    $('.banner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    // tab menu
    var $tab_list = $('.tab');
    $tab_list.find('ul ul').hide();
    $tab_list.find('li.active ul').show();

    function tab_menu(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
    }
    $tab_list.find('ul>li>a').click(tab_menu).focus(tab_menu)

    $('.gallery-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    });
    $('.play').click(function () {
        $('.gallery-list').slick('slickPlay');
    });
    $('.pause').click(function () {
        $('.gallery-list').slick('slickPause');
    });
    $('.next').click(function () {
        $('.gallery-list').slick('slickNext');
    });
    $('.prev').click(function () {
        $('.gallery-list').slick('slickPrev');
    });
    // layer popup
    $('.popup-list__item:first-child a').click(function () {
        $('.layer-popup').fadeIn();
    })
    $('.layer-popup button').click(function () {
        $('.layer-popup').css('display', 'none');
    });
    //window popup
    $('.popup-list__item:nth-child(2) a').click(function (e) {
        e.preventDefault();
        window.open('popup.html', 'popup1', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
    //gallery
    $('.light-gallery').lightGallery();
})