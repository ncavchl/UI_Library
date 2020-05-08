$(document).ready(function(){
//즉시 실행 함수 예제
    $('.navi-showbtn').on('click',function(){
        $('.navi-showbtn img').toggleClass('fold');
        $("#header").toggleClass('fold');
        $("#content").toggleClass('fold');
    });

    $('.subtitlebox').on('click',function(){
        $(this).siblings('.subbox-list').toggleClass('on');
        $(this).children('img').toggleClass('on');
    });

    $('.searchbox').keyup(function(){
        $('.searcbox-icon').css('display','block');
        $(this).css('border-bottom', '1px solid #3A403D');
    });

    $('.searcbox-icon').on('click', function(){
        $('.searchbox').val('');
        $(this).css('display','none');
        $('.searchbox').css('border-bottom', 'none');
    });

    // $('.clickk').on('click', function(){
    //     $('.alarmimg').css('animation-duration', '-0.5s');
    // });


});

