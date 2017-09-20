document.addEventListener('DOMContentLoaded', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
  document.documentElement.setAttribute('data-dpr', window.devicePixelRatio)
})
