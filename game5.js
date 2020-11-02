/* audio・video 音量初期値の設定 */
const mediasVol_def=function(){
    const a1=document.getElementById('sound');
    a1.volume = 0.1; 
}
/* ページ読み込み時に処理 */
window.addEventListener('DOMContentLoaded' , function(){
    mediasVol_def();
}, false); 
