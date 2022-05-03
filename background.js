chrome.webNavigation.onCompleted.addListener( details => {
    chrome.cookies.getAll( { domain: details.url }, cookies => {
        for(var i = 0; i < cookies.length; i++) {
            console.log(cookies[i]);
        }
    })
})