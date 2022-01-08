'use strict';
const imagePath = 'pic/head.png';
const imageUrl = chrome.runtime.getURL(imagePath);
const imgWithUrl = `<img src="${imageUrl}" style="width: 1000px; height: 50px; background-color: lightgray;"!important>`;
document.querySelector("div").insertAdjacentHTML("afterEnd", imgWithUrl);

//document.querySelector("css-1dbjc4n").innerHTML = "<h2>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHA</span>";

/*
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
*/