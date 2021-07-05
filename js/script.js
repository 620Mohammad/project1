$(function(){
    $('.slickRight').slick({
        arrows:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        asNavFor:'.mumbertestiimg',
    });
    $('.mumbertestiimg').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        arrows:false,
        asNavFor:'.slickRight',
    });
});