var tab;
function getUrl(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
      callback(tabs[0]);
  });
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

  console.log(msg);
  if (msg.msg == "WHATPAGE") {
    getUrl(function (data) {
      chrome.runtime.sendMessage({
        page: data
      })

    })
  }
});
