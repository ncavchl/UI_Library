$(document).ready(function(){
    //헤더 include 용
    // $(function () { 
    //     loadHtml();    
    // }); 
    // function loadHtml() {
    //     $("[data]").each(function(){
    //         var url = $(this).attr("data");
    //        // alert(url);
    //         $(this).load(url);
    //     });
    // }



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

    //alert dismissing
    $(".dismissing").on('click',function(){
        var parent = $(this).parent('li');
        //console.log(parent.text());
        parent.remove();
        if($('.temt .alert-ul').text() == null){
            alert('f');
        }

    });

    // $('.clickk').on('click', function(){
    //     $('.alarmimg').css('animation-duration', '-0.5s');
    // });

});

