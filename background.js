chrome.browserAction.onClicked.addListener(function(tab) {
  // Gets all tabs using qeury
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tab.index; i++) {
        chrome.tabs.remove(tabs[i].id);
    }
});
});
