// 監聽網頁上的事件，keydown就是當user按下鍵盤的按鍵
window.addEventListener('keydown', function(e) {
    // 選擇html裡面的元素，這裡是取用tag是audio，且內容的data-key是對應的按鍵號碼
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // 取用class是key，且內容的data-key是對應的按鍵號碼
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // 如果html裡面沒有對應的key，代表不動作
    if (!audio) return;
    // 每次按按鈕都要進行播放，要先把播放時間歸零
    audio.currentTime = 0;
    // 播放聲音
    audio.play();
    // 依據css裡面已經設定好的style: playing，將性質加入元素中
    key.classList.add("playing");
    // 這裡有個問題是當播放完畢，key的外誆顏色不會消失，可以用timeout方式但很麻煩，所以採用event listener
});


function removeTransition(e) {
    if (e.propertyName != "transform") return;
    console.log(e);
    this.classList.remove("playing");
}

// 取得所有的key，用來還原外誆顏色
const keys = document.querySelectorAll(`.key`);
// 每個key都加上transition結束的事件
keys.forEach(key => key.addEventListener('transitionend', removeTransition));