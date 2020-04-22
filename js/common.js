$(document).ready(function(){
//즉시 실행 함수 예제
    $('.navi-showbtn').on('click',function(){
        $('.navi-showbtn img').toggleClass('fold');
        $("#header").toggleClass('fold');
        $("#content").toggleClass('fold');
    });

    $('.subbox-title').on('click',function(){
        $(this).parents().siblings('.subbox-list').toggleClass('on');
        $(this).siblings('img').toggleClass('on');
    });

});