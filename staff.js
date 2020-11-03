
// フェードイン
// フェードイン
(function (window, $) {
    'use strict';
    $.fn.useSound = function (_event, _id) {
      var se = $(_id);
      this.on(_event, function(){
        se[0].currentTime = 0;
        se[0].play();
      });
      return this;
    };
  })(this, this.jQuery);
  $('.btn a').useSound('mousedown touchstart', '#sound');
  
  /* audio・video 音量初期値の設定 */
const mediasVol_def=function(){
    const a1=document.getElementById('sound');
    a1.volume = 0.1; 
}
/* ページ読み込み時に処理 */
window.addEventListener('DOMContentLoaded' , function(){
    mediasVol_def();
}, false); 

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
    if(answer1 == "0202"){
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
   if(answer2 == "ロッカー"){
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
   if(answer3 == "33"){
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
   if(answer4 == "0205"){
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

document.onkeypress = enter;
function enter(){
  if( window.event.keyCode == 13 ){
    return false;
  }
}

function clickBtn1(){
    document.form1.textBox1.value = "0202";
}

function clickBtn2(){
    document.form2.textBox2.value = "ロッカー";
}

function clickBtn3(){
    document.form3.textBox3.value = "33";
}

function clickBtn4(){
    document.form4.textBox4.value = "0205";
}