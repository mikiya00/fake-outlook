//head.pngの画像挿入
//document.querySelector("form")=instagram
//document.querySelector("div")=twitter

'use strict';
const imagePath = 'pic/head.png';
const imageUrl = chrome.runtime.getURL(imagePath);
const imgWithUrl = `<img src="${imageUrl}" style="width: 1600px; height: 150px; background-color: lightgray;"!important>`;
document.querySelector("form").insertAdjacentHTML("afterEnd", imgWithUrl);

/*
サイド
'use strict';
const imagePathtwo = 'pic/said.png';
const imageUrltwo = chrome.runtime.getURL(imagePathtwo);
const imgWithUrltwo = `<img src="${imageUrltwo}" style="width: 200px; height: 30000px; background-color: lightgray;"!important>`;
document.querySelector("img").insertAdjacentHTML("afterEnd", imgWithUrltwo);
*/

// インスタ用
//要素の削除

//インスタロゴ要素を取得
var elements = document.getElementsByClassName('s4Iyt');
  //インスタロゴ削除まで
  while(elements.length != 0){
    //インスタロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//メニューロゴ要素を取得
var elements = document.getElementsByClassName('J5g42');
  //メニューロゴ削除まで
  while(elements.length != 0){
    //メニューロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//カメラロゴ要素を取得
var elements = document.getElementsByClassName('_8-yf5 ');
  //カメラロゴ削除まで
  while(elements.length != 0){
    //カメラロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}
 

//一番上の要素を取得
var elements = document.getElementsByClassName('b5itu');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//一番上の要素を取得
  var elements = document.getElementsByClassName('MWDvN');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//一番上の要素を取得
  var elements = document.getElementsByClassName('_lz6s');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}


//右にあるおすすめアカウントを取得
  var elements = document.getElementsByClassName('COOzN MnWb5 YT6rB');
  //右にあるおすすめアカウントの削除まで
  while(elements.length != 0){
    //右にあるおすすめアカウントの要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}



//document.querySelector("css-1dbjc4n").innerHTML = "<h2>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHA</span>";



//getElementById('id_Red')でvisual.htmlのidを取得onclickハンドラ
//chrome.tabs(API)を使いタブの作成をし、query({})の中は最近開いたタブを取得

document.getElementById('id_Red').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorRed
    });
  });
}
document.getElementById('id_Blue').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorBlue
    });
  });
}
function setBackGroundColorRed(){
  document.body.style.backgroundColor = 'red';
}
function setBackGroundColorBlue(){
  document.body.style.backgroundColor = 'blue';
}
