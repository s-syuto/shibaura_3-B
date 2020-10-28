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
    if(answer1 == "stamp" || answer1 == "STAMP"){
        hint ++;
        console.log(hint);
        $(".clear1").html('<img src="./img/q1.clear.png">');
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
   if(answer2 == "春"){
       hint += 2;
       console.log(hint);
       $('.clear2').html('<img src="./img/q2.clear.png">');
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
   if(answer3 == "バンド"){
       hint += 3 ;
       console.log(hint);
       $('.clear3').html('<img src="./img/q3.clear.png">');
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
   if(answer4 == "かせき"){
        hint += 4 ;
        console.log(hint);
        $('.clear4').html('<img src="./img/q4.clear.png">');
        $('#judge4').html('<p></>')
        if(hint >= 10){
            $('.hint').css('display','block');
        }
   } else {
       $('#judge4').html('<p style="color: red">不正解です</>');

   }
});

$('#answer-change').click(function() {
    console.log("十字架");
    // 問題1の答え変更
    $('.answer_input1').css('display','none');
    $('#judge1').html('<img src="./img/answer1.png" style="width:200px height:50px">');
    // 問題2
    $('.answer_input2').css('display','none');
    $('#judge2').html('<img src="./img/answer2.png" style="width:200px height:50px">');
    // 問題3
    $('.answer_input3').css('display','none');
    $('#judge3').html('<img src="./img/answer3.png" style="width:200px height:50px">');
    // 問題4
    $('.answer_input4').css('display','none');
    $('#judge4').html('<img src="./img/answer4.png" style="width:200px height:50px">');
    // 十字架フェードアウト
    $('#cross').fadeOut(1000);
    $('#answer-change').css('display','none');
});