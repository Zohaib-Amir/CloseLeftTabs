

function removeLeftTabs(win){
  //Remove each tab until the highlighted one is found
    for(var i = 0; win.tabs[i].highlighted != true; i++){
      if(!win.tabs[i].pinned)
      chrome.tabs.remove(win.tabs[i].id);
    }
}



function OnContextMenuClicked(info, tab){
  chrome.windows.get(tab.windowId, {"populate" : true}, removeLeftTabs);

}


chrome.contextMenus.create({"title": "Close Left Tabs",
"onclick": OnContextMenuClicked});


chrome.browserAction.onClicked.addListener(function(tab) {
  //Gets current window along with array of tabs
  chrome.windows.get(tab.windowId, {"populate" : true}, removeLeftTabs);
  
});
