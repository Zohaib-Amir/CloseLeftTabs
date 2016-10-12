chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tab.index; i++) {
        chrome.tabs.remove(tabs[i].id);
    }
});
});