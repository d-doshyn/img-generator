//Lorem picsum

const copyButtonPicsum = document.querySelector('.copyButton-picsum')

copyButtonPicsum.addEventListener("click", function () {
    const picsumLinkContent = document.querySelector('.picsum-link').textContent
    navigator.clipboard.writeText(picsumLinkContent)
    window.alert("Link copied!")
})

//DummyImage

const copyButtonDummy = document.querySelector('.copyButton-dummy')

copyButtonDummy.addEventListener("click", function () {
    const dummyLInkContent = document.querySelector('.dummyimage-link').textContent
    navigator.clipboard.writeText(dummyLInkContent)
    window.alert("Link copied!")
})