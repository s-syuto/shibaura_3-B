$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
        $('.start').fadeOut(500);
	},4000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function(){
    setTimeout(function(){
        $('#count_up').fadeOut(10000);
    },11000);
});

var hint = 0;
var not = 0;
$('#count_up').click(function() {
    not ++;
    console.log(not);
        if (not == 3 ){
            location.href = "./clear.html";
        }
    });
// フェードイン
// フェードイン
$(function(){
    $(window).scroll(function (){
        $('.effect-fade').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
     });
    });

$('.answer_send1').click(function() {
     answer1 = document.getElementById("textBox_a1").value;
    console.log(answer1);
    if(answer1 == "5673" || answer1 == "5673"){
        hint ++;
        console.log(hint);
        $(".clear1").html('<img src="photo/qestion_2F_1_clear.png">');
        $('#judge1').html('<p></>');
        console.log("画像を表示");
        if(hint >= 10){
            $('.hint').css('display','block');
        }
    } else {
        $('#judge1').html('<p style="color: red">不正解です</>')

    }
});

$('.answer_send2').click(function() {
    answer2 = document.getElementById("textBox_a2").value;
   console.log(answer2);
   if(answer2 == ""){
       hint += 2;
       console.log(hint);
       $('.clear2').html('<img src="photo/qestion_2F_2_clear.png">');
       $('#judge2').html('<p></>')
       if(hint >= 10){
        $('.hint').css('display','block');
    }
   } else {
       $('#judge2').html('<p style="color: red">不正解です</>');

   }
});

$('.answer_send3').click(function() {
    answer3 = document.getElementById("textBox_a3").value;
   console.log(answer3);
   if(answer3 == ""){
       hint += 3 ;
       console.log(hint);
       $('.clear3').html('<img src="photo/qestion_2F_3_clear.png">');
       $('#judge3').html('<p></>')
       if(hint >= 10){
        $('.hint').fadeIn(1000);}
   } else {
       $('#judge3').html('<p style="color: red">不正解です</>');

   }
});

$('.answer_send4').click(function() {
    answer4 = document.getElementById("textBox_a4").value;
   console.log(answer4);
   if(answer4 == ""){
        hint += 4 ;
        console.log(hint);
        $('.clear4').html('<img src="photo/qestion_2F_4_clear.png">');
        $('#judge4').html('<p></>')
        if(hint >= 10){
            $('.hint').css('display','block');
        }
   } else {
       $('#judge4').html('<p style="color: red">不正解です</>');

   }
});

