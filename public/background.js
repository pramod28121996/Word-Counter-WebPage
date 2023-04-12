chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ totalWords: 0 });
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: () => {        
        var text = document.body.innerText;
        var words = text.split(/[\s,.!?]+/);        
        chrome.storage.sync.set({ totalWords: words.length });                
      },
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
