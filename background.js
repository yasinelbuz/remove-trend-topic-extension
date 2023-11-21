chrome.tabs.onActivated.addListener(tab => {
    chrome.scripting
    .registerContentScripts([{
        id: "session-script1",
        js: ["./scripts/popup.js"],
        persistAcrossSessions: true,
        matches: ["<all_urls>"],
        runAt: "document_start",
    }])
    .then(() => console.log("registration complete"))
    .catch((err) => console.warn("unexpected error", err))
})