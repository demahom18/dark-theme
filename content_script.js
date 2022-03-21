function isDarkTheme () {
    return window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)')
        .matches
    }

console.log(isDarkTheme())

chrome.storage.sync.set({
    theme: isDarkTheme() ? 'dark' : 'light'
})

console.log(chrome.storage.sync);