// サイドナビhover時のカラー変更
$(function(){
    
    $('.side_nav_item a').hover(
        function(){
            $(this).css('color', 'black');
        },
        function(){
            $(this).css('color', 'white');
        });

        
});



// FVスリック
$('.slider').slick({

    autoplay: true,
    aytoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
});

// ハンバーガーメニュー
$('.open_btn').click(function(){
    $(this).toggleClass('active');
    $('.header_nav_inner').toggleClass('panelActive');
});

$('.header_nav_inner a').click(function(){
    $('.open_btn').removeClass('active');
    $('.header_nav_inner').removeClass('panelActive');
});