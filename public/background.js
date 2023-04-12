chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.session.set({ totalWords: 0 });
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: async () => {        
        var text = document.body.innerText;
        var words = text.split(/[\s,.!?]+/);        
        await chrome.storage.sync.set({ totalWords: words.length });                   
      },
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
