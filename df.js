/**loading頁面 入門 */
/*$(window).on('load', function(){
    $('.loading').removeClass('d-flex');
    //$('.loading').fadeOut(); /*淡出*/ //
/*});*/
/*loading頁面 進階版*/
$(window).on('load', function(){
    setTimeout(function(){
        $('.loading').fadeOut();
        $(window).scrollTop(0);
    }, 2000)
});

