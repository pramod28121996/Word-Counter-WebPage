// function countWords(callback) {
//     var text = document.body.innerText;
//     var words = text.split(/[\s,.!?]+/);
//     callback(words.length);
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: countWords,
//     }, (results) => {
//       chrome.storage.sync.set({ totalWords: results[0].result });
//     });
//   });
alert("Hello");