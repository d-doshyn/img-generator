const delay = 1000;

//Lorem picsum

const copyButtonPicsum = document.querySelector('.copyButton-picsum')
copyButtonPicsum.addEventListener("click", function () {
    const picsumLinkContent = document.querySelector('.picsum-link').textContent
    navigator.clipboard.writeText(picsumLinkContent)
    const copyAlertPicsum = document.querySelector('.copied-alert-container')
    copyAlertPicsum.classList.add('flex-copied-alert-container')
    setTimeout(function () {
        copyAlertPicsum.classList.remove('flex-copied-alert-container')
    }, delay);
})

//DummyImage

const copyButtonDummy = document.querySelector('.copyButton-dummy')

copyButtonDummy.addEventListener("click", function () {
    const dummyLInkContent = document.querySelector('.dummyimage-link').textContent
    navigator.clipboard.writeText(dummyLInkContent)
    const copyAlertDummy = document.querySelector('.copied-alert-container-dummy')
    copyAlertDummy.classList.add('flex-copied-alert-container')
    setTimeout(function () {
        copyAlertDummy.classList.remove('flex-copied-alert-container')
    }, delay);
})