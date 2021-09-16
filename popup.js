function injectTheScript() {
  console.log("wwerewrw")
  const log = chrome.extension.getBackgroundPage().console.log;
log('something')
  // Gets all tabs that have the specified properties, or all tabs if no properties are specified (in our case we choose current active tab)
  chrome.tabs.query({ url: "https://meet.google.com/*" }, function (tabs) {
    // Injects JavaScript code into a page
    log(tabs)

    if (tabs.length > 0) {
      chrome.tabs.executeScript(tabs[0].id, { file: "content_script.js" });
    }
  });
}
// adding listener to your button in popup window
document
  .getElementById("clickactivity")
  .addEventListener("click", injectTheScript);
